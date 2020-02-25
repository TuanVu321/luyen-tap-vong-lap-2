let number = parseInt(prompt('Nhap vao so nguyen duong'));
let sum = 1;
if (number == 0) {
    alert('giai thua cua so vua nhap la: 1');
} else {
    if (number < 0) {
        alert("so vua nhap khong phai so nguyen duong");
    } else {
        for (i = 1; i <= number; i++) {
            sum = sum * i;
        }
        alert('giai thua cua so vua nhap la: ' + sum);

    }
}
