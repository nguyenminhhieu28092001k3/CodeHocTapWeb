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
console.log(123);


// VD map()  : Duyệt từ đầu đến cuối, và thay đổi theo ý ( thay đổi trong hàm).

var mapCourse = courses.map(function(course1) {
    
    return {
        id : course1.id,
        name: 'Khóa học' + course1.name,
        coin: course1.coin,
        coinText : 'Giá ' + course1.coin,
    };
});
console.log(mapCourse);


