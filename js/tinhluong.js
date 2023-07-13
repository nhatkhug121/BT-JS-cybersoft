/*
b1 input: 
    enter soNgay
b2
    - tạo biến luong và ngaycong rồi gán giá trị 
    - tạo biên tongLuong thực hiên phép tính tongLuong = luong * ngaycong
b3 output: 
    print tongLuong
*/
function tinhLuong() {
  var luong = document.getElementById("luong").value;
  var ngaycong = document.getElementById("ngaycong").value;
  var tongLuong = luong * ngaycong;

  console.log(tongLuong);
  document.getElementById("txtResult3").innerHTML =
    "Tổng lương của bạn: " + tongLuong.toLocaleString();
}

document.getElementById("btnLuong").onclick = tinhLuong;

/*
b1 input: 
    enter 5 value
b2
    - tạo 5 biến giá trị rồi gán giá trị cho từng biến
    - tính tổng 5 biến chia cho 5
b3 output: 
    print total average
 */

function tinhTB() {
  var gt1 = document.getElementById("GT1").value;
  var gt2 = document.getElementById("GT2").value;
  var gt3 = document.getElementById("GT3").value;
  var gt4 = document.getElementById("GT4").value;
  var gt5 = document.getElementById("GT5").value;

  var tongTB =
    (Number(gt1) + Number(gt2) + Number(gt3) + Number(gt4) + Number(gt5)) / 5;

  document.getElementById("txtResult4").innerHTML =
    "Tổng Trung Bình = " + tongTB;
}
document.getElementById("btnTB").onclick = tinhTB;

/*
b1 input: 
    enter money 
b2
    - tạo biến tienDo và gán giá trị
    - tạo biến tienViet thực hiện phép tính TienViet = TienDo * 23500
b3 output: 
    print change USD to VND
 */

function doiTien() {
  var tienDo = document.getElementById("USD").value;
  var tienViet = tienDo * 23500;

  document.getElementById("txtResult5").innerHTML =
    "Tổng Tiền Của Bạn là: " + tienViet.toLocaleString() + "VND";
}
document.getElementById("btndoiTien").onclick = doiTien;

/*
b1 input: 
    enter length and width

b2
    - tạo 2 biến chiều dài và rộng và gán giá trị 
    - tạo biến diện tích, sử dụng công thức tính diện tích s = cD * cR
    - tạo biến chu vi, sử dụng công thức tính chu vi C = (cD + cR) * 2
b3 output: 
    print perimeter and area
 */

function tinhCVS() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;

  var dienTich = chieuDai * chieuRong;
  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

  document.getElementById("txtResult6").innerHTML =
    "Diện Tích = " + dienTich + "<br> Chu Vi = " + chuVi;
  console.log(dienTich);
  console.log(chuVi);
}

document.getElementById("btnS").onclick = tinhCVS;

/*
b1 input: 
    enter number kySo
b2
    - tạo 2 biến cho 2 ký số và gán giá trị
    - tạo biên tổng
    - sử dụng phép chia lấy phần nguyên vào biến kyso1 và phép chia lấy dư vào kyso2
    - gán giá trị 2 phép tính vào 2 ký số rồi thực hiện phép tính tổng 2 ký số
b3 output: 
    sum first number kySo and second
 */

function tinhKS() {
  var kySo = document.getElementById("kySo").value;
  var kySo1 = Math.floor(kySo / 10);
  var kySo2 = kySo % 10;
  var tongKS = kySo1 + kySo2;

  document.getElementById("txtResult7").innerHTML = "Tổng là: " + tongKS;
  console.log(tongKS);
}

document.getElementById("btnSo").onclick = tinhKS;
