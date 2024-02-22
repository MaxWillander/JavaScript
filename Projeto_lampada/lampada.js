const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLamBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn (){
    if(!isLamBroken()){
        lamp.src='./img/ligada.png';
    }
}
function lampOff (){
    if(!isLamBroken()){
        lamp.src='./img/desligada.jpg';
    }
}

function lampBroken (){
    lamp.src='./img/quebrada2.jpg';
}

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }
    else
    {
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);