let arr = []
function common() {
    let n = +prompt("Nhap vao so phan tu cua mang: ")
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhap vao gia tri thu: " + (i + 1))
    }
}

function bai1() {
    common()
    let count = 0
    let list = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 === 0) {
            count += 1
            list += "Phan tu thu " + i + " : " + arr[i] + "<br>"
        }
    }
    document.getElementById("result").innerHTML = "Co tat ca " + count + " so chan trong mang."
    document.getElementById("list").innerHTML = list
}

function bai2() {
    common()
    console.log(("Mang ban vua nhap la: " + arr))
    let count = 0
    let data = +prompt("Nhap vao phan tu muon kiem tra: ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            count += 1
        }
    }
    document.getElementById("result").innerHTML = "Co " + count + " phan tu '" + data + "' trong mang."
}

function bai3() {
    common()
    let j, sum = 0
    let list = ""
    for (let i = 0; i < arr.length; i++) {
        for (j=2;j<arr[i];j++) {
            if (arr[i]%j===0) {
                break
            }
        }
        if (j===arr[i]) {
            sum += arr[i]
            list += arr[i] + "<br>"
        }
    }
    document.getElementById("result").innerHTML = "Tong cac so nguyen to trong mang la: " + sum
    document.getElementById("list").innerHTML = "Danh sach cac so nguyen to trong mang:<br>" + list
}

function bai4() {
    let i, sum = 0
    let n = 2
    while (n<500) {
        for (i=2;i<n;i++) {
            if (n%i===0) {
                n++
                break
            }
        }
        if (i===n) {
           sum += n
           n++
        }
    }
    document.getElementById("result").innerHTML = "Tong cac so nguyen to nho hon 500 la: " + sum
}