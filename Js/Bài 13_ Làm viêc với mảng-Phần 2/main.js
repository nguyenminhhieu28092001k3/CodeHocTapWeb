// LÀM VIỆC VỚI MẢNG PHẦN 2
/**
 * Array methods
 * 
 * 1/ forEach()         : lặp từng phần tử 
 * 2/ every()           : Tìm kiếm: tất cả phải thỏa mãn
 * 3/ some()            : Tìm kiếm : Chỉ cần 1 cái thỏa mãn      
 * 4/ find()            :lọc 1 cái
 * 5/ filter()          : lọc nhiều cái
 * 6/ map()
 * 7/ reduce()
 */

 //VD
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
   
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 150
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Javascript',
        coin: 100
    },

];

//  VD : forEach Như vòng for duyệt qua các phần tử 
courses.forEach(function(course1) {
    
    console.log(course1);

});


//  VD : every :  Kiểu tra các phần tử phải thoải 1 điều kiện nào đó
 var isFree = courses.every(function(course1) {
    
     return course1.coin === 0;
 });
console.log(isFree);

//  VD : some :  Chỉ cần thỏa 1 điều kiện là dc 


//  VD: find : Tìm và xuất phần tử : Chỉ một phần tử
var isCourse = courses.find(function(course1) {
    
    return course1.name === 'Javascript';
});
console.log(isCourse);

//  VD: filter : Tìm và xuất phần tử : Xuất tất cả phần tử 
var listCourse = courses.filter(function(course1) {
    
    return course1.name === 'Javascript';
});
console.log(listCourse);