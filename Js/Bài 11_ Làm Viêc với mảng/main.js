/**
 * Làm Viêc Với mảng
 * 1/ To string                     Biến mảng thành chuỗi    
 * 2/ Join                          Biến mảng thành chuỗi nhưng có dâu ngăn cách
 * 3/ Pop
 * 4/ Push
 * 5/ Shift
 * 6/ Unshift
 * 7/ SpLicing
 * 8/ Concat
 * 9/ Slicing
 */

var NgonNgu = [
    'js',
    'php',
    'RUby'
];

 //VD toString : Biến mảng thành chuỗi 
//console.log(NgonNgu.toString());

 //VD join : Biến mảng thành chuỗi nhưng có dâu ngăn cách
// console.log(NgonNgu.join(" - "));

 //VD Pop : Xóa đi phần tử cuối mảng và trả về phần từ đã xóaxóa
//console.log(NgonNgu.pop());
//console.log(NgonNgu);

//VD Push : thêm Phần từ vào cuối mảng 
// console.log(NgonNgu.push("HTML","Java"));
// console.log(NgonNgu);

 //VD Shift : Xóa đi phần tử đầu mảng và trả về phần từ đã xóaxóa
// console.log(NgonNgu.shift());
// console.log(NgonNgu);

//VD Unshift : thêm Phần từ vào đầu mảng 
// console.log(NgonNgu.unshift("HTML","Java"));
// console.log(NgonNgu);

// VD:  SpLice : Xóa phần tử bất kì
// NGhĩa là: Xóa ở vị trí mảng[1] . Một phần tử
// console.log(NgonNgu.splice(1, 1));
// console.log(NgonNgu);
// //  Chèn thêm vị trí số 1
// console.log(NgonNgu.splice(1, 0, "CSS"));
// console.log(NgonNgu);


// VD concat : nối chuỗi 
// var NgonNgu2 = [
//     "Dart"
// ]
// console.log(NgonNgu.concat(NgonNgu2));



// VD: slice : Cắt mảng 
//Nghĩa là : cắt từ vị trí 1 đến vị trí 2
// console.log(NgonNgu.slice(1,2));
//Nghĩa là : cắt từ vị trí -2 đến vị trí -1 ở cuối mảng
// console.log(NgonNgu.slice(-2, -1));

