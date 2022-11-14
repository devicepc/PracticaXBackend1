const btnSi = document.getElementById("btn_si");
let altura = screen.height;

const btnNo = document.getElementById("btn_No");
const modoSexo = document.getElementsByClassName("modo-sexo")[0]
const video = document.getElementById("video");

function moverPositionBtnNO(elem){
    elem.style.position ='absolute';
    elem.style.top = Math.random()*(window.innerHeight - elem.offsetHeight) +'px';
    elem.style.top = Math.random()*(window.innerWidth - elem.offsetWidth) +'px';

}

btnNo.addEventListener('mouseenter', function(e){
    moverPositionBtnNO(e.target);
})

btnSi.addEventListener('click', function(e){
    
    modoSexo.style.display ='block';
    /* const audo = new Audio('music\\cancionModoSexo.mp3');
    audo.play(); 
    video.style.display = 'none';*/
    scroll(0, 0)
  
	});
			
