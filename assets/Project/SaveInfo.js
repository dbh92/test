$(document).ready(function () {
    CheDoUuTien();
    SaveData();
});


//var frmData = new FormData();
//console.log(frmData);
function CheDoUuTien() {
    $("#cbDTUuTien").click(function () {
        $("#lstDoiTuong").toggle();
        if ($("#lstDoiTuong").style.display === 'none') {
            $("#lstDoiTuong").css("display", "block")
        } else {
            $("#lstDoiTuong").css("display", "none")
        }
    })
}
function SaveData() {
    $("#savethongtin").click(function () {
        var frmData = new FormData();
        var select_nv_1 = $("#select_nv_1").val();
        var txtmahocsinh = $("#txtmahocsinh").val();
        var txtmatkhau = $("#txtmatkhau").val();
        //Thông tin học sinh
        var txthoten = $("#txthoten").val();
        var gender = $('input[name=gender]:checked');
        var txtngaysinh = $("#txtngaysinh").val();
        var txtdantoc = $("#txtdantoc").val();
        var cbnoisinhthanhpho = $("#cbnoisinhthanhpho").val();
        var cbnoisinhquan = $("#cbnoisinhquan").val();
        var cbhokhauthanhpho_tamtru = $("#cbhokhauthanhpho_tamtru").val();
        var cbhokhauquan_tamtru = $("#cbhokhauquan_tamtru").val();
        var cbhokhauphuong_tamtru = $("#cbhokhauphuong_tamtru").val();
        var txthokhaudiachi_tamtru = $("#txthokhaudiachi_tamtru").val();
        var txtngaycap_tamtru = $("#txtngaycap_tamtru").val();
        var cbhokhauthanhpho = $("#cbhokhauthanhpho").val();
        var cbhokhauquan = $("#cbhokhauquan").val();
        var cbhokhauphuong = $("#cbhokhauphuong").val();
        var txthokhaudiachi = $("#txthokhaudiachi").val();
        var txtngaycap_thuongtru = $("#txtngaycap_thuongtru").val();
        var cbnoiothanhpho = $("#cbnoiothanhpho").val();
        var cbnoioquan = $("#cbnoioquan").val();
        var cbnoiophuong = $("#cbnoiophuong").val();
        var txtnoiodiachi = $("#txtnoiodiachi").val();
        //Học Bạ
        var txthocluc = $("#txthocluc").val();
        var txthanhkiem = $("#txthanhkiem").val();
        var MathScore = $("#lstDiemHocBa tr td input")[0].value
        var EnglishScore = $("#lstDiemHocBa tr td input")[1].value
        var LitureScore = $("#lstDiemHocBa tr td input")[2].value
        //CHẾ ĐỘ ƯU TIÊN
        var tbDoiTuongUuTien = [];
        var priorityLst = $("#tbDoiTuongUuTien tr td input:checked").length;
        for (var i = 0; i < priorityLst; i++) {
            var element = $("#tbDoiTuongUuTien tr td input:checked")[i].value;
            tbDoiTuongUuTien.push(element);
        }
       

        //Hồ sơ đính kèm
        //var FileLst = [];
        //FileLst.push($("#fDinhKem_2").get(0).files[0])
        //FileLst.push($("#fDinhKem_1").get(0).files[0])
        //console.log(FileLst)
        //Thông tin cha mẹ giám hộ
        var txthotencha = $("#txthotencha").val();
        var txtnghenghiepcha = $("#txtnghenghiepcha").val();
        var txtnamsinhcha = $("#txtnamsinhcha").val();
        var txtcmndcha = $("#txtcmndcha").val();
        var txtsdtcha = $("#txtsdtcha").val();
        var txthotenme = $("#txthotenme").val();
        var txtnghenghiepme = $("#txtnghenghiepme").val();
        var txtnamsinhme = $("#txtnamsinhme").val();
        var txtcmndme = $("#txtcmndme").val();
        var txtsdtme = $("#txtsdtme").val();
        var txthotenngh = $("#txthotenngh").val();
        var txtnghenghiepngh = $("#txtnghenghiepngh").val();
        var txtnamsinhngh = $("#txtnamsinhngh").val();
        var txtcmndngh = $("#txtcmndngh").val();
        var txtsdtngh = $("#txtsdtngh").val();
        var txtdienthoailienhe = $("#txtdienthoailienhe").val();
        var txtemaillienhe = $("#txtemaillienhe").val();

        frmData.append("select_nv_1", select_nv_1);
        frmData.append("txtmahocsinh", txtmahocsinh);
        frmData.append("txtmatkhau", txtmatkhau);
        frmData.append("txthoten", txthoten);
        frmData.append("gender", gender);
        frmData.append("txtngaysinh", txtngaysinh);
        frmData.append("txtdantoc", txtdantoc);
        frmData.append("cbnoisinhthanhpho", cbnoisinhthanhpho);
        frmData.append("cbnoisinhquan", cbnoisinhquan);
        frmData.append("cbhokhauthanhpho_tamtru", cbhokhauthanhpho_tamtru);
        frmData.append("cbhokhauquan_tamtru", cbhokhauquan_tamtru);
        frmData.append("cbhokhauphuong_tamtru", cbhokhauphuong_tamtru);
        frmData.append("txthokhaudiachi_tamtru", txthokhaudiachi_tamtru);
        frmData.append("txtngaycap_tamtru", txtngaycap_tamtru);
        frmData.append("cbhokhauthanhpho", cbhokhauthanhpho);
        frmData.append("cbhokhauquan", cbhokhauquan);
        frmData.append("cbhokhauphuong", cbhokhauphuong);
        frmData.append("txthokhaudiachi", txthokhaudiachi);
        frmData.append("txtngaycap_thuongtru", txtngaycap_thuongtru);
        frmData.append("cbnoiothanhpho", cbnoiothanhpho);
        frmData.append("cbnoioquan", cbnoioquan);
        frmData.append("cbnoiophuong", cbnoiophuong);
        frmData.append("txtnoiodiachi", txtnoiodiachi);
        frmData.append("txthocluc", txthocluc);
        frmData.append("txthanhkiem", txthanhkiem);
        frmData.append("MathScore", MathScore);
        frmData.append("EnglishScore", EnglishScore);
        frmData.append("LitureScore", LitureScore);
        frmData.append("tbDoiTuongUuTien", tbDoiTuongUuTien);

        ////Hồ sơ đính kèm
        //var FileLst = [];
        //FileLst.push($("#fDinhKem_2").get(0).files[0])
        //FileLst.push($("#fDinhKem_1").get(0).files[0])
        //console.log(FileLst)
        frmData.append("txthotencha", txthotencha);
        frmData.append("txtnghenghiepcha", txtnghenghiepcha);
        frmData.append("txtnamsinhcha", txtnamsinhcha);
        frmData.append("txtcmndcha", txtcmndcha);
        frmData.append("txtsdtcha", txtsdtcha);
        frmData.append("txthotenme", txthotenme);
        frmData.append("txtnghenghiepme", txtnghenghiepme);
        frmData.append("txtnamsinhme", txtnamsinhme);
        frmData.append("txtcmndme", txtcmndme);
        frmData.append("txtsdtme", txtsdtme);
        frmData.append("txthotenngh", txthotenngh);
        frmData.append("txtnghenghiepngh", txtnghenghiepngh);
        frmData.append("txtnamsinhngh", txtnamsinhngh);
        frmData.append("txtcmndngh", txtcmndngh);
        frmData.append("txtsdtngh", txtsdtngh);
        frmData.append("txtdienthoailienhe", txtdienthoailienhe);
        frmData.append("txtemaillienhe", txtemaillienhe);
        console.log(frmData);
        $.ajax({
            type: 'POST',
            url: "/Home/Registration",
            dataType: "json",
            data: frmData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data)
            }
        });
    })
}
