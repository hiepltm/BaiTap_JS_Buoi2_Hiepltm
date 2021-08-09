/**
 * Khối 1: Input
 * workDay
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo và khai báo biến: workDay, daySalary, totalSalary
 * B2: Tính tổng lương:
 * totalSalary =  daySalary*workDay
 * B3: Hiển thị thông báo lên UI
 * 
 * 
 * Khối 3: Output
 * totalSalary
 * 
 */



document.getElementById("btnTotalSalary").onclick=function(){
    var daySalary=100000;
    var workDay=document.getElementById("inputWorkDay").value;
    var totalSalary=daySalary*workDay;
        document.getElementById("notifySalary").innerHTML= "Tổng tiền lương của nhân viên là: "+totalSalary;
}
