$(document).ready(function () {
    $("#cbDTUuTien").click(function () {
        var display = $("#lstDoiTuong").css("display");
        $("#lstDoiTuong").toggle();
        if (display == 'none') {
            $("#lstDoiTuong").css("display", "block")
        } else {
            $("#lstDoiTuong").css("display", "none")
        }
    });
    SaveData();
    $('#btnFile').click(function () {
        var fileData = new FormData();
        var FileLst = [];
        for (var i = 0; i < ($("#fDinhKem_1").get(0).files.length); i++) {
            console.log($("#fDinhKem_1").get(0).files[i]);
            FileLst.push($("#fDinhKem_1").get(0).files[i]);
        }
        for (var i = 0; i < ($("#fDinhKem_2").get(0).files.length); i++) {
            console.log($("#fDinhKem_2").get(0).files[i]);
            FileLst.push($("#fDinhKem_2").get(0).files[i]);
        }
        for (var i = 0; i < ($("#fDinhKem_3").get(0).files.length); i++) {
            console.log($("#fDinhKem_3").get(0).files[i]);
            FileLst.push($("#fDinhKem_3").get(0).files[i]);
        }
        console.log(FileLst);
        for (var i = 0; i < FileLst.length; i++) {
            fileData.append(FileLst[i].name, files[i]);
        };
        // Adding more keys/values here if need
        fileData.append('Test', "Test Object values");
        $.ajax({
            type: 'POST',
            url: "/Home/UploadFiles",
            type: "POST", //as we will be posting files and other method POST is used
            data: fileData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data)
            }
        });
    });
});

//var frmData = new FormData();
//console.log(frmData);
function updateListFirst() {
    //var idFile = $("[type='file']").map(function () {
    //    var idSubFile = $(this).attr('id');
    //    return idSubFile;
    //    break;
    //}).get().join(", ");
    var input = document.getElementById('fDinhKem_1');
    var output = document.getElementById('fileList_1');
    output.innerHTML = '<ul id="ulId">';
    for (var i = 0; i < input.files.length; ++i) {
        var idLi = input.files.item(i).name.split('.')[0];
        output.innerHTML += '<li id="' + idLi +'hsdk">' + input.files.item(i).name + '</li>';
        $('#delFile_1').append('<a class="fa fa-trash btn_chontep" id="' + idLi +'" style="width:100%; cursor: pointer;"onclick="removeFile(this.id)"></a>')
    }
    output.innerHTML += '</ul>';
};
function updateListSecond() {
    //var idFile = $("[type='file']").map(function () {
    //    var idSubFile = $(this).attr('id');
    //    return idSubFile;
    //    break;
    //}).get().join(", ");
    var input = document.getElementById('fDinhKem_2');
    var output = document.getElementById('fileList_2');
    output.innerHTML = '<ul>';
    for (var i = 0; i < input.files.length; ++i) {
        output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        $('#delFile_2').append('<a class="fa fa-trash btn_chontep" id="removeFile_2" style="width:100%; cursor: pointer;"onclick="removeFile()"></a>')
    }
    output.innerHTML += '</ul>';
    /*$('#fileList_2').append(output);*/

};
function updateListThird() {
    //var idFile = $("[type='file']").map(function () {
    //    var idSubFile = $(this).attr('id');
    //    return idSubFile;
    //    break;
    //}).get().join(", ");
    var input = document.getElementById('fDinhKem_3');
    var output = document.getElementById('fileList_3');
    output.innerHTML = '<ul>';
    for (var i = 0; i < input.files.length; ++i) {
        output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        $('#delFile_3').append('<a class="fa fa-trash btn_chontep" id="removeFile_3" style="width:100%; cursor: pointer;"onclick="removeFile()"></a>')
    }
    output.innerHTML += '</ul>';
};

function SaveData() {
    $("#savethongtin").click(function () {
        var frmData = new FormData();
        var select_nv_1 = $("#select_nv_1").val();
        var txtmahocsinh = $("#txtmahocsinh").val();
        var txtmatkhau = $("#txtmatkhau").val();
        //Thông tin học sinh
        var txthoten = $("#txthoten").val();
        var gioitinh = $('input[name=gioitinh]:checked').val();
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
        };
        /*Hồ sơ đính kèm*/
         var FileLst = [];
        for (var i = 0 ; i < ($("#fDinhKem_1").get(0).files.length); i++) {
            console.log($("#fDinhKem_1").get(0).files[i]);
            FileLst.push($("#fDinhKem_1").get(0).files[i]);
        }
        for (var i = 0 ; i < ($("#fDinhKem_2").get(0).files.length); i++) {
            console.log($("#fDinhKem_2").get(0).files[i]);
            FileLst.push($("#fDinhKem_2").get(0).files[i]);
        }
        for (var i = 0 ; i < ($("#fDinhKem_3").get(0).files.length); i++) {
            console.log($("#fDinhKem_3").get(0).files[i]);
            FileLst.push($("#fDinhKem_3").get(0).files[i]);
        }
        console.log(FileLst);
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
        frmData.append("gioitinh", gioitinh);
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
        for (var i = 0; i < FileLst.length; i++) {
            frmData.append(FileLst[i].name, FileLst[i]);
        };

        console.log(frmData);
        $.ajax({
            type: 'POST',
            url: "/Home/Registration",
            dataType: "json",
            data: frmData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log("Đây là dữ liệu học sinh:" + data);
                /*$('#btnFile').trigger('click');*/
            }
        });
    })
}


