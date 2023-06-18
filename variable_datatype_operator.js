// bài 1


function part1(){  let  physics = +prompt("Nhập điểm vật lý");
let chemistry = +prompt("nhập điểm hóa học");
let biology = +prompt("nhập điểm sinh học")

let total = physics+chemistry+biology;
let average = total/3;

alert(`Điểm tổng là ${total} 
Điểm trung bình là ${average}`);}

function part2(){
    let celcius = +prompt("nhập giá trị độ C");
    let fahrenheit = celcius*1.8+32;
    alert(`${celcius} độ C tương đương với ${fahrenheit} độ F`)
}

const pi = 3.14159265359;
function part3(){
let r = +prompt("nhập bán kính đường tròn")
let area = r*r*pi
alert(`diện tích hình tròn là ${area}`)
}
function part4(){
    r = +prompt("nhập bán kính đường tròn")
let circuit = r*2*pi;
alert(`chu vi đường tròn là ${circuit}`)
}