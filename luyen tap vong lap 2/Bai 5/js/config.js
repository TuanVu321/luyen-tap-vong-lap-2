let money = parseInt(prompt('Nhap so tien'));
let i = parseInt(prompt('Nhap lai suat'));
let n = parseInt(prompt('Nhap so thang'));
let sum=1;
let fv;
for(j=1;j<=n;j++){
    sum=sum*(1+i);
}
fv=money*sum;
alert(fv);