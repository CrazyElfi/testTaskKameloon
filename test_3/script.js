var elem = document.getElementById('content');

for(var i = 1; i < 100; i++) {
    var div = document.createElement('div');
    div.id = 'myId:'+ i;

    var text = i + ')';

    if(!(i%3)){
        text += ' A/B';
    }
    if(!(i%5)){
        text += ' Testing';
    }
    if(!(i%3) && !(i%5)) {
        text +=' A/B Testing';
    }
    div.innerText = text;
    elem.append(div)

}