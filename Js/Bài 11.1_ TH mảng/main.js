// 1,2
var flag = true;
function XuatMonAn() {
    var Mang = [
        'Xoai',
        'Mận',
        'Ổi',
        'Mít'
    ];
    if (flag) {
        document.getElementById("Bai1").innerText = Mang.toString();
        document.getElementById("Bai1").innerText = Mang.join(", ");
        flag = false;
    } else {
        document.getElementById("Bai1").innerText ="";
        flag = true;
    }

    
}


// Bài 3,4,5,6,7
// Thêm sản phẩm
var Product = [
    'Xoài',
    'Mận',
    'Ổi',
    'Táo',
    'Mít'
];
function Out_product() {
    
  
    var dau = '<ul  id="list">';
    var dau1 = '<li><b>';
    var cuoi = '</b><div style="padding-left: 40px;">Xóa</div></li>';
    var cuoicung = '</ul>';
    for (var i = 0; i < Product.length; i++){
        dau = dau + (dau1 + Product[i] + cuoi);
    }
    dau += cuoicung;
    document.getElementById('list').innerHTML = dau;
}
// Thêm sản phẩm
function Add_Product() {

    var munber = document.getElementById('munberSP').value;
    var value_product = document.getElementById('SP').value;
    if (munber == 1) {
       
      Product.unshift(value_product);
   } else {

      Product.splice(munber,0,value_product); 
   }
    

    Out_product(); 
}
// Xóa sản phẩm
function del_Product() {

    var munber = document.getElementById('munberSP').value;
    var value_product = document.getElementById('SP').value;
   if (munber == 1) {
    
      Product.shift();
   } else {

     Product.splice(munber,1); 
   }
    

    Out_product(); 
}
