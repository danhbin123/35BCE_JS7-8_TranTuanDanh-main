var tapHop = [];
function themSo() {
    var so = document.getElementById('nhapSo').value * 1;
    tapHop.push(so);
    document.getElementById('tapHop').innerHTML = tapHop;
}
// Tổng các số dương


function tongSoduong() {
    var sum = 0;
    for (i = 0; i < tapHop.length; i++) {
        if (tapHop[i] > 0) {
            sum += tapHop[i]
        }
    }
    document.getElementById('tong').innerHTML = sum;
}

function soDuong() {
    var count = 0;
    for (i = 0; i < tapHop.length; i++) {
        if (tapHop[i] > 0) {
            count++
        }
    }
    document.getElementById('dem').innerHTML = count;
}

function soNhonhat() {
    var tapHop1 = tapHop.sort(function (a, b) {
        return a - b;
    })
    document.getElementById('min').innerHTML = tapHop1[0]
}

function soDuongNhoNhat() {
    var tapHop2 = [];
    for (i = 0; i < tapHop.length; i++) {
        if (tapHop[i] > 0) {
            tapHop2.push(tapHop[i])
            tapHop2.sort()
            document.getElementById('minDuong').innerHTML = tapHop2[0]
        }
        else {
            document.getElementById('minDuong').innerHTML = "-1"
        }
    }

}

function soChancuoi() {
    var tapHop3 = []
    document.getElementById('soChan').innerHTML = '-1';
    for (i = 0; i < tapHop.length; i++) {
        if (tapHop[i] % 2 == 0) {
            tapHop3.push(tapHop[i])
            tapHop3.reverse()
            document.getElementById('soChan').innerHTML = tapHop3[0];
        }
    }
}

function doiCho() {
    var i = document.getElementById('viTri1').value * 1;
    var j = document.getElementById('viTri2').value * 1;
    if (j >= tapHop.length || j < 0 || i < 0 || i >= tapHop.length) {
        alert('Nhập lại dữ liệu')
    }
    else {
        var temp = tapHop[i]
        tapHop[i] = tapHop[j]
        tapHop[j] = temp;
        document.getElementById('switch').innerHTML = "Tập hợp mới là " + tapHop.join(', ')
    }
}

function sapXep() {
    var tapHop4 = tapHop.sort(function (a, b) {
        return a - b;
    })
    tapHop4.join(', ')
    document.getElementById('sapXeptang').innerHTML = tapHop4;
}

function isPrimeNumber(n) {
    for (j = 2; j < n; j++) {
        if (n % j === 0) {
            return false
        }
    }
    return true;
}

function soNguyenToDauTien() {
    for (i = 0; i < tapHop.length; i++) {
        if (tapHop[i] > 0 && isPrimeNumber(tapHop[i])) {
            document.getElementById('primeNumber').innerHTML = tapHop[i];
            break;
        }
        else {
            document.getElementById('primeNumber').innerHTML = "-1";
        }
    }
}
var tapHopMoi=[]
var tapHopSoThuc=[]
function addNumber() {
    var soThuc = document.getElementById('soThuc').value*1;
    tapHopSoThuc.push(soThuc);
    tapHopMoi=tapHop.concat(tapHopSoThuc)
    document.getElementById('tapHopMoi').innerHTML = tapHopMoi;
}

function isInteger(){
    var count = 0;
    for (i = 0; i < tapHopMoi.length; i++) {
        if (Number.isInteger(tapHopMoi[i])) {
            count++;
        }
    }
    document.getElementById('soPrimeNumber').innerHTML = count;
}

function soSanh(){
    var soLuongDuong=0;
    var soLuongAm=0;
    var content="";
    for(i=0;i<tapHopMoi.length;i++){
        if(tapHopMoi[i]>0){
            soLuongDuong++;
        }
        if(tapHopMoi[i]<0){
            soLuongAm++;
        }
    }
    if(soLuongAm===soLuongDuong){
        content+="Số lượng số Dương = Số lượng số Âm"
    }
    else if(soLuongAm<soLuongDuong){
        content+="Số lượng số Dương > Số lượng số Âm"
    }
    else if(soLuongAm>soLuongDuong){
        content+="Số lượng số Dương < Số lượng số Âm"
    }
    document.getElementById('compare').innerHTML=content;
}