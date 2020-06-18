var button = document.getElementById('btn');

var mouse = {
    name: 'Mickey',
    sayhello: function () {
        alert("my name is: " + this.name);
    }
}
// bind(mouse) để truyền tham số vào this.name 
button.addEventListener('click', mouse.sayhello.bind(mouse));
