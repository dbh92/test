using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Database;
using WebApplication1.Models;
using WebApplication2.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        DataClasses1DataContext db = new DataClasses1DataContext();
        public ActionResult Index()
        {
            UserTest userTest = new UserTest();
            string prioritySql = "select * from CheDoUuTien";
            var priorityLst = db.ExecuteQuery<CheDoUuTien>(prioritySql).ToList();
            string locationSql = "select * from StudentLocation where ParentId = 0";
            var lstdata = db.ExecuteQuery<Models.StudentLocation>(locationSql).ToList();
            ViewBag.lstCity = lstdata;
            ViewBag.priorityLst = priorityLst;
            return View();

        }
        [HttpPost]
        public ActionResult getDistrict(string provinceId)
        {
            string sql = "select * from StudentLocation where ParentId = " + provinceId + "and LevelAddress = 2";
            var lstdata = db.ExecuteQuery<Models.StudentLocation>(sql).ToList();
            return Json(lstdata, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult GetWard(string districtId)
        {
            string sql = "select * from StudentLocation where ParentId = " + districtId + "and LevelAddress = 3";
            var lstdata = db.ExecuteQuery<Models.StudentLocation>(sql).ToList();
            return Json(lstdata, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Registration(FormCollection formCollection)
        {
            Database.thongtinhocsinh stdInfo = new Database.thongtinhocsinh();
            stdInfo.matruong = formCollection["select_nv_1"];
            stdInfo.mahs = formCollection["txtmahocsinh"];
            stdInfo.matkhau = formCollection["txtmatkhau"];
            stdInfo.hoten = formCollection["txthoten"];
            stdInfo.gioitinh = formCollection["gioitinh"];
            //string DateString = formCollection["txtngaysinh"];
            //IFormatProvider culture = new CultureInfo("en-US", true);
            //DateTime dateVal = DateTime.ParseExact(DateString, "yyyy-MM-dd", culture);
            stdInfo.ngaysinh = DateTime.ParseExact(formCollection["txtngaysinh"], "dd/MM/yyyy", CultureInfo.InvariantCulture);
            stdInfo.dantoc = formCollection["txtdantoc"];
            stdInfo.noisinhtp = Convert.ToInt32(formCollection["cbnoisinhthanhpho"]);
            stdInfo.noisinhquan = Convert.ToInt32(formCollection["cbnoisinhquan"]);
            stdInfo.thuongtrutp = Convert.ToInt32(formCollection["cbhokhauthanhpho"]);
            stdInfo.thuongtruquan = Convert.ToInt32(formCollection["cbhokhauquan"]);
            stdInfo.thuongtruxa = Convert.ToInt32(formCollection["cbhokhauphuong"]);
            stdInfo.thuongtrudiachi = formCollection["txthokhaudiachi"];
            stdInfo.thuongtrungay = Convert.ToDateTime(formCollection["txtngaycap_thuongtru"]);
            stdInfo.tamtrutp = Convert.ToInt32(formCollection["cbhokhauthanhpho_tamtru"]);
            stdInfo.tamtruquan = Convert.ToInt32(formCollection["cbhokhauquan_tamtru"]);
            stdInfo.tamtruxa = Convert.ToInt32(formCollection["cbhokhauphuong_tamtru"]);
            stdInfo.tamtrungay = Convert.ToDateTime(formCollection["txtngaycap_tamtru"]);
            stdInfo.tamtrudiachi = formCollection["txtmahocsinh"];
            stdInfo.hientaitp = Convert.ToInt32(formCollection["cbnoiothanhpho"]);
            stdInfo.hientaiquan = Convert.ToInt32(formCollection["cbnoioquan"]);
            stdInfo.hientaixa = Convert.ToInt32(formCollection["cbnoiophuong"]);
            stdInfo.hientaidiachi = formCollection["txtnoiodiachi"];
            stdInfo.iduutien = string.Join(",", formCollection["tbDoiTuongUuTien"]);
            db.thongtinhocsinhs.InsertOnSubmit(stdInfo);
            db.SubmitChanges();

            //Xử lý file đính kèm          
            if (Request.Files.Count > 0)
            {
                var files = Request.Files;

                foreach (string str in files)
                {
                    HttpPostedFileBase file = Request.Files[str] as HttpPostedFileBase;
                    if (file != null)
                    {
                        var InputFileName = Path.GetFileName(file.FileName);
                        var ServerSavePath = Path.Combine(Server.MapPath("~/UploadedFiles/") + InputFileName);
                        //Save file to server folder  
                        
                        if (!System.IO.File.Exists(ServerSavePath))
                        {
                            file.SaveAs(ServerSavePath);
                            string filename = Directory.GetCurrentDirectory() + "\\" + InputFileName;
                            System.IO.FileInfo fi = new System.IO.FileInfo(ServerSavePath);
                            Database.FileInfo fileInfo = new Database.FileInfo();
                            fileInfo.idfile = (int)DateTime.Now.ToFileTimeUtc();
                            fileInfo.namefile = fi.Name;
                            fileInfo.sizefile = fi.Length.ToString();
                            fileInfo.extfile = fi.Extension;
                            fileInfo.urlfile = Path.GetFullPath(fileInfo.namefile);
                            db.FileInfos.InsertOnSubmit(fileInfo);
                            db.SubmitChanges();
                        }
                    }
                }            
                return Json("File Uploaded Successfully!");
            }
            else
            {
                return Json("No files to upload");
            };

        }


        //[HttpPost]
        //public ActionResult UploadFiles()
        //{
        //    if (Request.Files.Count > 0)
        //    {
        //        var files = Request.Files;

        //        //iterating through multiple file collection   
        //        foreach (string str in files)
        //        {
        //            HttpPostedFileBase file = Request.Files[str] as HttpPostedFileBase;
        //            //Checking file is available to save.  
        //            if (file != null)
        //            {
        //                var InputFileName = Path.GetFileName(file.FileName);
        //                var ServerSavePath = Path.Combine(Server.MapPath("~/UploadedFiles/") + InputFileName);
        //                //Save file to server folder  
        //                file.SaveAs(ServerSavePath);

        //            }

        //        }
        //        return Json("File Uploaded Successfully!");
        //    }
        //    else
        //    {
        //        return Json("No files to upload");
        //    }
        //}
    }
}