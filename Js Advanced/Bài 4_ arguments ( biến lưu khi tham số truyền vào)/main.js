// arguments -->  Biến lưu tham số truyền vào


function Sun() {
    let Tong = 0;
    for (let i = 0; i < arguments.length; i++){
        Tong += arguments[i];
    }
    console.log(Tong);
}
Sun(10, 20, 40,50);
