var URL_HOME = "http://" + document.location.host + '/Home/';

$(document).ready(function () {
    GetDistrict();
    GetDistrictForTamTru();
    GetWardForTamTru();
    GetDistrictForThuongTru();
    GetWardForThuongTru();
    GetDistrictForCurrent();
    GetWardForCurrent();
})

function GetDistrict() {
    $('#cbnoisinhthanhpho').change(function () {
        var cbnoisinhthanhpho = $('#cbnoisinhthanhpho').val();
        var html = '<option value="">Chọn Quận/Huyện</option>';
        if (cbnoisinhthanhpho != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/getDistrict",
                dataType: "json",
                data: {
                    provinceId: cbnoisinhthanhpho
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbnoisinhquan').html(html);
                },
                error: function (exception) {
                    alert('Exception:', exception);
                }
            });
        }
    })
}
//Đổ dữ liệu cho hộ khẩu tạm trú
function GetDistrictForTamTru() {
    $('#cbhokhauthanhpho_tamtru').change(function () {
        $('#cbhokhauphuong_tamtru').val("");
        var cbhokhauthanhpho_tamtru = $('#cbhokhauthanhpho_tamtru').val();
        var html = '<option value="">Chọn Quận/Huyện</option>';
        if (cbhokhauthanhpho_tamtru != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/getDistrict",
                dataType: "json",
                data: {
                    provinceId: cbhokhauthanhpho_tamtru
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbhokhauquan_tamtru').html(html);
                },
                error: function (exception) {
                    alert('Exception:', exception);
                }
            });
        }
    })
}
function GetWardForTamTru() {
    $('#cbhokhauquan_tamtru').change(function () {
        var cbhokhauquan_tamtru = $('#cbhokhauquan_tamtru').val();
        var html = '<option value="">Chọn Phường/Xã</option>';
        if (cbhokhauquan_tamtru != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/GetWard",
                dataType: "json",
                data: {
                    districtId: cbhokhauquan_tamtru
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbhokhauphuong_tamtru').html(html);
                },
                error: function (exception) {
                    alert('Exception:', exception);
                }
            });
        }
    })
}
//dổ dữ liệu cho hộ khẩu thường trú
function GetDistrictForThuongTru() {
    $('#cbhokhauthanhpho').change(function () {
        $('#cbhokhauphuong').val("");
        var cbhokhauthanhpho = $('#cbhokhauthanhpho').val();
        var html = '<option value="">Chọn Quận/Huyện</option>';
        if (cbhokhauthanhpho != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/getDistrict",
                dataType: "json",
                data: {
                    provinceId: cbhokhauthanhpho
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbhokhauquan').html(html);
                },
                error: function (exception) {
                    alert('Exception:', exception);
                }
            });
        }
    })
}
function GetWardForThuongTru() {
    $('#cbhokhauquan').change(function () {
        var cbhokhauquan = $('#cbhokhauquan').val();
        var html = '<option value="">Chọn Phường/Xã</option>';
        if (cbhokhauquan != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/GetWard",
                dataType: "json",
                data: {
                    districtId: cbhokhauquan
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbhokhauphuong').html(html);
                },
                error: function (error ) {
                    alert(error);
                }
            });
        }
    })
}
//đổ dữ liệu cho chỗ ở hiện tại
function GetDistrictForCurrent() {
    $('#cbnoiothanhpho').change(function () {
        $('#cbnoiophuong').val("");
        var cbnoiothanhpho = $('#cbnoiothanhpho').val();
        var html = '<option value="">Chọn Quận/Huyện</option>';
        if (cbnoiothanhpho != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/getDistrict",
                dataType: "json",
                data: {
                    provinceId: cbnoiothanhpho
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbnoioquan').html(html);
                },
                error: function (exception) {
                    alert('Exception:', exception);
                }
            });
        }
    })
}
function GetWardForCurrent() {
    $('#cbnoioquan').change(function () {
        var cbnoioquan = $('#cbnoioquan').val();
        var html = '<option value="">Chọn Phường/Xã</option>';
        if (cbnoioquan != '') {
            $.ajax({
                type: 'POST',
                url: "/Home/GetWard",
                dataType: "json",
                data: {
                    districtId: cbnoioquan
                },
                success: function (result) {
                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        html += '<option value="' + result[i].IdAddress + '">' + result[i].NameAddress + '</option>';
                    };
                    $('#cbnoiophuong').html(html);
                },
                error: function (error) {
                    alert(error);
                }
            });
        }
    })
}
