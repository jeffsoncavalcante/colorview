
document.addEventListener('DOMContentLoaded', function(){
    var enviar = document.getElementById('enviar');
    if(enviar){
        enviar.addEventListener('click',function teste(){
            console.log("aqui")
            var vetor = true
            window.localStorage.setItem("key", vetor)
        })
    }

        
    })