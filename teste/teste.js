document.addEventListener('DOMContentLoaded', function(){
    var enviar = document.getElementById('enviar');
    if(enviar){
        enviar.addEventListener('click',function teste(){
           
           var vetor = ['um','dois']
           window.localStorage.setItem("key", vetor)
           let el = document.querySelectorAll('h1')
           
         for (i=0; i<el.length; i++){
            var styles = window.getComputedStyle(el[i]);
             
             var css = Object.keys(styles).reduce(
               (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
             );
           console.log(css.color)
            if(css.color == "rgb(255, 0, 0)" ){
            el[i].style.cssText = 'color: blue;'
            }
         }
         
        })
    }
   
})