// arguments -->  Biến lưu tham số truyền vào
var tong ='';






function XuatSo(value) {
    tong += value;
    document.getElementById('man_hinh').value = tong; 
}
function GiaTriTrong(value) {
    tong = '';
    document.getElementById('man_hinh').value = tong; 
}



// function SunGiaTri() {
//     let sun;
//     let mang = [];
//     let value = document.getElementById('man_hinh').value;
//     for (let i = 0; i < value.length; i++){
//         let soPhanTuMang = 0;
//         sun += value[i];
//         if (value[i] == '+') {
//             mang[soPhanTuMang] = Number(sun);
//             sun = 0;
//         } 
//         else  if (value[i] == ( value.length-1)) {
//             mang[soPhanTuMang] = Number(sun);
//             sun = 0;
//         }   
//     }
//     var tongGiaTri = 0;
//     for (var value of mang) {
//         tongGiaTri += value;
//     }
//     document.getElementById('man_hinh').value = tongGiaTri; 
// }

function Kt() {
    var Xd_phuongthuc;
    let value = document.getElementById('man_hinh').value;
    for (let i = 0; i < value.length; i++){
        if (value[i] == '+') {
            Xd_phuongthuc = 'Cong';
        }
        else  if (value[i] == '-') {
            Xd_phuongthuc = 'Phép tru';
        }
        else if (value[i] =='x') {
            Xd_phuongthuc = 'Phép Nhan';
        }
        else if (value[i] =='/') {
            Xd_phuongthuc = 'Phép Chia';
        } 
    }
    if (Xd_phuongthuc == 'Cong') {
        console.log("cong");
    }
}



