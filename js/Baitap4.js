/**
 * Khoi 1: Input
 * length
 * width
 * 
 * Khoi 2: Cac buoc xu ly
 * B1: Tao va gan gia tri cho bien: length, width, s, c
 * B2: Tinh:
 * stretch=length*width
 * circumference=(length+width)*2
 * B3: Hiển thị thông báo lên UI

 * Khoi 3: Output
 * stretch
 * circumference
 */


document.getElementById("btnCalc").onclick=function(){
    var length=parseFloat(document.getElementById("inputLength").value);
    var width=parseFloat(document.getElementById("inputWidth").value);
    var stretch=length*width;
    var circumference=(length+width)*2;
    document.getElementById("notifyResult").innerHTML= "Diện tích là: "+stretch+"<br> Chu vi là: "+circumference;
}