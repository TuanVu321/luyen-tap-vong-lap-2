let html = '';
for (i = 1; i < 6; i++) {
    for (j = 1; j <= i; j++) {
       html =html+ '*';
    }
    html = html + '<br>';
}
document.getElementById('demo').innerHTML=html;

let html1 = '';
for (i = 6; i > 1; i--) {
    for (j = 1; j < i; j++) {
        html1 = html1 + '*';
    }
    html1 = html1 + '<br>';
}
document.getElementById('demo1').innerHTML = html1;

let html2 = '';
for (i = 1; i < 6; i++) {
    for (j = 4; j >= i; j--) {
        html2 =html2+ '&nbsp;&nbsp';
    }
    for(j=1;j<=i;j++){
        html2=html2+ '*'
    }
    html2 = html2 + '<br>';
}
document.getElementById('demo2').innerHTML=html2;

let html3 = '';
for (i = 1; i < 6; i++) {
    for (j = 1; j <i; j++) {
        html3 =html3+ '&nbsp;&nbsp';
    }
    for(j=6;i<j;j--){
        html3=html3+ '*'
    }
    html3 = html3 + '<br>';
}
document.getElementById('demo3').innerHTML=html3;

