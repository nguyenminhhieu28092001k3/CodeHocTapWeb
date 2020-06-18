$(document).ready(function () {

    // Phần bắt đầu
    $('#Main_Star').show();
    $('#Main_form').hide();
    $('#star').click(function () {
        $('#Main_Star').hide();
        $('#Main_form').show(500);
    });


    // Phần Form
    $('#btnNoiDia').click(function(){
        $('#btnNoiDia').addClass('flights-check');   // thêm class check
        $('#btnQuocTe').removeClass('flights-check'); // bỏ class check 
        $('#NgayVe').attr('style','display:none;');   // ẩn lựa chọn  ngày về 
        $('.container__main-carrier').show(100); // Hiện thanh chọn loại hãng máy bay
    });
    $('#btnQuocTe').click(function(){
        $('#btnQuocTe').addClass('flights-check');
        $('#btnNoiDia').removeClass('flights-check');
        $('#NgayVe').attr('style','');
        $('.container__main-carrier').hide(100);
    });
    $('#MotChieu').click(function () {
        $('#NgayVe').attr('style','display:none;');
    });
    $('#KhuHoi').click(function () {
        $('#NgayVe').attr('style','');
    });



    

});