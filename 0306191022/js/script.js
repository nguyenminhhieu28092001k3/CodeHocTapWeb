function Search() {
    var values = document.getElementById('txt');
    if (values.value == "") {
        alert(" Bạn chưa nhập nè");
    }
}

function dangky() {
    var values = document.getElementById("name_Taikhoan").value;
    var values_mk = document.getElementById("mk").value;
    var values_xn_mk = document.getElementById("xn_mk").value;
    if (values_mk =="") {
        alert("Lỗi rồi bạn ơi ");
    } else
    if (values_xn_mk =="") {
        alert("Lỗi rồi bạn ơi ");
    }else
    if (values_mk != values_xn_mk) {
        alert("Lỗi rồi bạn ơi ");
    }
    else
    alert("Xin chào "+ values +" . Tài khoản"+ values +" của bạn đã được tạo với shop là họ tên và"+ values +"là tên tài khoản người dùng nhập")
}