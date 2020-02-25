let html = '';
for (i = 1; i < 21; i++) {
    html = html + "*"
}
html = html + '<br>';
for (i = 1; i < 5; i++) {
    html = html + "*";
    for (j = 1; j < 19; j++) {
        html = html + '&nbsp;&nbsp';
    }
    html = html + '*';
    html = html + '<br>';
}
for (i = 1; i < 21; i++) {
    html = html + "*"
}
html = html + '<br>';
document.getElementById('demo').innerHTML = html;
