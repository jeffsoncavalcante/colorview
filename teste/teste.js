document.addEventListener('DOMContentLoaded', function(){
    var enviar = document.getElementById('enviar');
    if(enviar){
        enviar.addEventListener('click',function teste(){
           
           var vetor = ['um','dois']
           window.localStorage.setItem("key", vetor)
           console.log(document.head.style)
           document.body.style.background = "#ccc";
        })
    }
   
})