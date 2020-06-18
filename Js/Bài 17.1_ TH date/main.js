
var Date = new Date();
// Goi ngay Tháng năm
 function Dates() {
    var isDay = document.getElementById("Date_ID");
    isDay.innerHTML = Date.getDate()+ "/ " +( Date.getMonth() + 1)  +"/ " + Date.getFullYear() + ".";

}


//hỏi Giờ
function Hours() {
    var isDay = document.getElementById("Hours_ID");
    isDay.innerHTML = Date.getHours()+ " h_" + Date.getMinutes() +" m_ " + Date.getSeconds() + " s.";

}