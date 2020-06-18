var Array = [
    'Nguyễn Minh Hiếu',
    'Nguyễn Huy Hoàng',
    'Nguyễn Quốc Hiệu',
];


function Them() {
    var value = document.getElementsByClassName("container__input")[0];
    if (value.value == "") {
        alert("Bạn chưa nhập nè");
    } else {
        Array.push(value.value);
        document.getElementsByClassName("container__input")[0].value = "";
        XuatMang(); 
   }
}
function Sua() {
    var value = document.getElementsByClassName("container__input")[0];
    if (value.value == "") {
        alert("Bạn chưa nhập nè");
    } else {
        var GiaTriNhap = prompt("nhập tên mới của " + value.value, "VD :Nguyễn Văn A");
        for (var index in Array) {
            if (Array[index] == value.value) {
                Array[index] = GiaTriNhap;
            }
        }
        XuatMang(); 
   }
}
function Xoa() {
    var value = document.getElementsByClassName("container__input")[0];
    if (value.value == "") {
        alert("Bạn chưa nhập nè");
    } else {
        var XN = confirm("Bạn có chắc xóa");
        if (XN) {
            for (var index = 0; index < Array.length; index++) {
                if (Array[index] == value.value) {
                    Array.splice(index, 1);
                    index--;
                }
            }
            XuatMang(); 
        }
   }
}

function TimKiem() {
    var value = document.getElementsByClassName("container__input")[0];
    if (value.value == "") {
        alert("Bạn chưa nhập nè");
    } else {
        var sun = "";
        for (var index = 0; index < Array.length; index++) {
           
            if (Array[index] == value.value) {
                var a = Array.indexOf(value.value,index) + 1;
                sun += `${a} , `;
                
            }
        }
       
        alert(`Vi trí của ${value.value} cân tìm là ${sun}`); 
   }
}
function Sort() {
    Array.sort();
    XuatMang(); 
    
}
function Onload_Sort() {
   
    
}


  

function XuatMang() {
    var list = document.getElementById("ol_list");
    var sun = "";
    for (var i = 0; i < Array.length;i++) {
        sun += `<div style="display: flex;"><div class="header_list-STT">${i+1}</div>`;
        sun += `<div class="header_list-name">${Array[i]}</div></div>`;
    }
    list.innerHTML = sun;
}

var a = document.getElementById("add");
a.addEventListener('click',Them);






