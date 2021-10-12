document.addEventListener('DOMContentLoaded', function(){
    var ativar = document.getElementById('ativar');
    if(ativar){
        ativar.addEventListener('click',function(){
            var daltonico = window.localStorage.getItem('daltonico')
            if(daltonico == 'sim'){
                window.localStorage.setItem('ativo','sim')
                chrome.runtime.reload();
            }if(daltonico=='nao'){
                window.localStorage.setItem('ativo','nao')
                alert('Nao daltonico')
                chrome.runtime.reload();
                
            }if(daltonico==null){
                alert('Teste Nao Realizado, por favor, realize o teste')
            }
            
            
        })
    }
        
        
   
})