//chrome.runtime.sendMessage(document.getElementById('ativar').value)  
 
document.addEventListener('DOMContentLoaded', function(){
    var ativar = document.getElementById('ativar');
    if(ativar){
        ativar.addEventListener('click',function(){
            var teste = window.localStorage.getItem('teste')
            if(teste = 'teste'){
                chrome.runtime.sendMessage('ativo')
            }
            
            
        })
    }
        
        
   
})