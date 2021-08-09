/**
 * Khoi 1: Input
 * num
 * 
 * Khoi 2: Cac buoc xu ly
 * B1: Tao va gan gia tri cho bien: num, ten, unit, sum
 * B2: Tinh
 * ten = Math.floor(num/10)
 * unit = num%10
 * sum = ten +unit
 * B3: Hiển thị thông báo lên UI
 * 
 * Khoi 3: Output
 * sum
 */


document.getElementById("btnSum").onclick=function(){
    var num = parseFloat(document.getElementById("inputNumber").value);
    var ten = Math.floor(num/10);
    var unit = num%10;
    var sum= ten+ unit;
    document.getElementById("notifySum").innerHTML="Tổng 2 ký số là: " +sum;
}