/**
 * Khoi 1: Input
 * usdAmount
 * 
 * Khoi 2: Cac buoc xu ly
 * B1: Tao va gan gia tri cho bien: usdAmount, rate, vndAmount
 * B2: Tinh so tien vnd: vndAmount = usdAmount*rate
 * B3: Hiển thị thông báo lên UI
 * 
 * 
 * Khoi 3: Output
 * vndAmount
 */


document.getElementById("btnVnd").onclick=function(){
    var usdAmount=parseFloat(document.getElementById("inputUsd").value);
    var rate=23500;
    var vndAmount=usdAmount*rate;
    document.getElementById("notifyVnd").innerHTML="Số tiền sau quy đổi VND là: " + vndAmount;
}