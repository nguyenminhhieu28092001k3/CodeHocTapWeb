
// Biến: gọi la thuộc tính 
// object : là phương thức


// Object Constructor
//  Đây là một đối tượng chung 
function User(firstName, lastName, avater) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avater = avater;


    //this.getName1 = this.firstName + " " + this.lastName;
    
    this.getName = function () {
        return this.firstName + " "+this.lastName;
    }
    
}

// Cho 2 thành viên
var author = new User("Hiếu", "Minh", "Avatar");
var user = new User("Vũ", "Minh", "Avatar");

// THêm dữ liệu riênng
author.title = "Giang viên Số 1";
user.comment = "Like";



console.log(author.avater2);
console.log(user);



