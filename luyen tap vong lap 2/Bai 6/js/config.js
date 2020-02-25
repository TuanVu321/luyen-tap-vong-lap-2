let htlm = '';
let html3 = '';
for (i = 1; i < 6; i++) {
    for (j = 4; j >= i; j--) {
        htlm = htlm + '&nbsp;&nbsp';
    }
    for (j = 1; j <= i; j++) {
        htlm = htlm + '**'
    }
    htlm = htlm + '<br>';
}
let x = document.getElementsByClassName('demo');
x[0].innerHTML = htlm;
x[1].innerHTML = htlm;


for (i = 1; i < 18; i++) {
    for (j = 1; j <i; j++) {
        html3 =html3+ '&nbsp';
    }
    for(j=21;i<j;j--){
        html3=html3+ '*'
    }
    html3 = html3 + '<br>';
}
document.getElementById('demo1').innerHTML=html3;