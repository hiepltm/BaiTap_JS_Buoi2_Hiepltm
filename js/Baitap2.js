/**
 * Khối 1: Input
 * num1
 * num2
 * num3
 * num4
 * num5
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo và gán giá trị: num1, num2, num3, num4, num5, averageValue
 * B2: Tính giá trị trung bình: averageValue=(num1+num2+num3+num4+num5)/5
 * B3: Hiển thị thông báo lên UI
 * 
 * Khối 3: Output
 * avarageValue
 */


document.getElementById("btnAverage").onclick=function(){
    var num1=parseFloat(document.getElementById("inputNum1").value);
    var num2=parseFloat(document.getElementById("inputNum2").value);
    var num3=parseFloat(document.getElementById("inputNum3").value);
    var num4=parseFloat(document.getElementById("inputNum4").value);
    var num5=parseFloat(document.getElementById("inputNum5").value);
    var averageValue=(num1+num2+num3+num4+num5)/5;
    document.getElementById("notifyAverage").innerHTML= "Giá trị trung bình là: " + averageValue
}