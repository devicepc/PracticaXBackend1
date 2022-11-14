var html = document.querySelector('.html');
var css = document.querySelector('.css');

var git = document.querySelector('.git');

var js = document.querySelector('.js');


    var elems = [html, css,  git,  js];

    var counter = 0;

    function removeClass () {

        if (counter < elems.length) {
            elems[counter].classList.remove('hidden');
            counter++;
            setTimeout(removeClass, 1000)
        } else {
           addClass();
        }
    }

    function addClass () {
      for(var i = 0; i < elems.length; i++) {
        elems[i].classList.add('hidden');
      }
    }

removeClass();

setInterval(function(){
  
  counter = 0;
  removeClass();
  
}, 6600)


