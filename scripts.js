document.addEventListener('DOMContentLoaded', function(){
    var ativar = document.getElementById('ativar');
    if(ativar){
        ativar.addEventListener('click',function teste(){
            alert(window.localStorage.getItem("key"))
        })
    }
   
})