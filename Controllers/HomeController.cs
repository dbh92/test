using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Database;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        DataClasses1DataContext db = new DataClasses1DataContext();
        public ActionResult Index()
        {

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
            stdInfo.matkhau= formCollection["txtmatkhau"];
            stdInfo.hoten= formCollection["txthoten"];
            stdInfo.gioitinh= formCollection["gender"];
            CultureInfo cultures = new CultureInfo("en-US");
            stdInfo.ngaysinh = Convert.ToDateTime((formCollection["txtngaysinh"]), cultures);
            stdInfo.dantoc = formCollection["txtdantoc"];
            stdInfo.noisinhtp = Convert.ToInt32(formCollection["cbnoisinhthanhpho"]);
            stdInfo.noisinhquan = Convert.ToInt32(formCollection["cbnoisinhquan"]);
            stdInfo.thuongtrutp = Convert.ToInt32(formCollection["cbhokhauthanhpho"]);
            stdInfo.thuongtruquan = Convert.ToInt32(formCollection["cbhokhauquan"]);
            stdInfo.thuongtruxa = Convert.ToInt32(formCollection["cbhokhauphuong"]);
            stdInfo.thuongtrudiachi = formCollection["txthokhaudiachi"];
            stdInfo.thuongtrungay = Convert.ToDateTime((formCollection["txtngaycap_thuongtru"]), cultures);
            stdInfo.tamtrutp = Convert.ToInt32(formCollection["cbhokhauthanhpho_tamtru"]);
            stdInfo.tamtruquan = Convert.ToInt32(formCollection["cbhokhauquan_tamtru"]);
            stdInfo.tamtruxa = Convert.ToInt32(formCollection["cbhokhauphuong_tamtru"]);
            stdInfo.tamtrungay = Convert.ToDateTime((formCollection["txtngaycap_tamtru"]), cultures);
            stdInfo.tamtrudiachi= formCollection["txtmahocsinh"];
            stdInfo.hientaitp = Convert.ToInt32(formCollection["cbnoiothanhpho"]);
            stdInfo.hientaiquan = Convert.ToInt32(formCollection["cbnoioquan"]);
            stdInfo.hientaixa = Convert.ToInt32(formCollection["cbnoiophuong"]);
            stdInfo.hientaidiachi = formCollection["txtnoiodiachi"];
            stdInfo.iduutien = string.Join(",", formCollection["tbDoiTuongUuTien"]);
            db.thongtinhocsinhs.InsertOnSubmit(stdInfo);
            return View();
        }
    }
}