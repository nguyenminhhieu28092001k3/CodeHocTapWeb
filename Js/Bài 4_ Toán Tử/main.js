document.write("hello");

// Giới thiệu 1 số toán tử trong Javascript
// Toán tử số học    - Arithmetic
// Toán tử gán      -  Assignment
// Toán tử so sánh   - Conpaison 
// Toán tử logic    - Logical




// Toán tử học
var Tong = 1 + 2;
console.log(Tong);

// Toán tử gán
var fullName = " Nguyễn Minh Hiếu";
console.log(fullName);

// Toán tử so sánh 
var a = 1;
var b = 2;
if (a > b) {
    console.log("Đúng");
} else {
    console.log("Sai");
}


// Cộng chuỗi thì ưu tiên: Char
// So sánh thì ưu tiên   : số
console.log(3 + "2"); // bằng 32 // Ưu Tiên Kiểu char
console.log(12 + 4 + "hello");
