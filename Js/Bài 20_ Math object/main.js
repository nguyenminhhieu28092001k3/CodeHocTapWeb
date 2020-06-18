/* 

Math object 

1/ Math.PI              --- Số PI: 3.14
2/ Math.round()         ---  Làm tròn số 
3/ Math.abs()           --- Trị tuyệt đối 
4/ Math.ceil()          --- Làm tròn trên 
5/ Math.floor()         ---  Làm tròn dưới 
6/ Math.random()        --- Tạọ 1 số ngẫu nhiên nhỏ hơn 1
7/ Math.min()
8/ Math.max()

*/

var number = Math.random() % 10;
console.log(number);

// VD: Tạo Random()  từ 7 ->8
console.log(Math.floor(Math.random() * 2) +7);


// VD: Tạo Random()  từ 0 ->9
console.log(Math.floor(Math.random() * 10));


//VD 7/ Math.min()
console.log(Math.min(100, -100, 1, 2, 3));