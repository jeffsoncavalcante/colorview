


document.addEventListener('DOMContentLoaded', function () {
    var resultado = document.getElementById('resultado');
  if(resultado){
      resultado.addEventListener('click',function teste(){
        var sim = document.getElementById('sim').checked;
        var nao = document.getElementById('nao').checked;
        var sim1 = document.getElementById('sim1').checked;
        var nao1 = document.getElementById('nao1').checked;
        var sim2 = document.getElementById('sim2').checked;
        var nao2 = document.getElementById('nao2').checked;
        var sim3 = document.getElementById('sim3').checked;
        var nao3 = document.getElementById('nao3').checked;
        var sim4 = document.getElementById('sim4').checked;
        var nao4 = document.getElementById('nao4').checked;
        var sim5 = document.getElementById('sim5').checked;
        var nao5 = document.getElementById('nao5').checked;
        var sim6 = document.getElementById('sim6').checked;
        var nao6 = document.getElementById('nao6').checked;
        var sim7 = document.getElementById('sim7').checked;
        var nao7 = document.getElementById('nao7').checked;
        var sim8 = document.getElementById('sim8').checked;
        var nao8 = document.getElementById('nao8').checked;
        var sim9 = document.getElementById('sim9').checked;
        var nao9 = document.getElementById('nao9').checked;
        var sim10 = document.getElementById('sim10').checked;
        var nao10 = document.getElementById('nao10').checked;
        var sim11 = document.getElementById('sim11').checked;
        var nao11 = document.getElementById('nao11').checked;
        var sim12 = document.getElementById('sim12').checked;
        var nao12 = document.getElementById('nao12').checked
        var sim13 = document.getElementById('sim13').checked;
        var nao13 = document.getElementById('nao13').checked
        var sim14 = document.getElementById('sim14').checked;
        var nao14 = document.getElementById('nao14').checked
        var sim15 = document.getElementById('sim15').checked;
        var nao15 = document.getElementById('nao15').checked
        var sim16 = document.getElementById('sim16').checked;
        var nao16 = document.getElementById('nao16').checked
        var sim17 = document.getElementById('sim17').checked;
        var nao17 = document.getElementById('nao17').checked
        var sim18 = document.getElementById('sim18').checked;
        var nao18 = document.getElementById('nao18').checked
        var sim19 = document.getElementById('sim19').checked;
        var nao19 = document.getElementById('nao19').checked
        var sim20 = document.getElementById('sim20').checked;
        var nao20 = document.getElementById('nao20').checked
        var sim21 = document.getElementById('sim21').checked;
        var nao21 = document.getElementById('nao21').checked
        var sim22 = document.getElementById('sim22').checked;
        var nao22 = document.getElementById('nao22').checked
        var sim23 = document.getElementById('sim23').checked;
        var nao23 = document.getElementById('nao23').checked
        var sim24 = document.getElementById('sim24').checked;
        var nao24 = document.getElementById('nao24').checked
        var sim25 = document.getElementById('sim25').checked;
        var nao25 = document.getElementById('nao25').checked
        var sim26 = document.getElementById('sim26').checked;
        var nao26 = document.getElementById('nao26').checked
        var sim27 = document.getElementById('sim27').checked;
        var nao27 = document.getElementById('nao27').checked
        var sim28 = document.getElementById('sim28').checked;
        var nao28 = document.getElementById('nao28').checked
        var sim29 = document.getElementById('sim29').checked;
        var nao29 = document.getElementById('nao29').checked
        var sim30 = document.getElementById('sim30').checked;
        var nao30 = document.getElementById('nao30').checked
        var sim31 = document.getElementById('sim31').checked;
        var nao31 = document.getElementById('nao31').checked
        var sim32 = document.getElementById('sim32').checked;
        var nao32 = document.getElementById('nao32').checked
        var sim33 = document.getElementById('sim33').checked;
        var nao33 = document.getElementById('nao33').checked
        
        
        var score = 0
        var  x=1
        if(sim==true){
          window.localStorage.setItem('question0', 0)
          
        }
        if(nao==true){
          window.localStorage.setItem('question0', 12)
          score= score + x
        }
  
        if(sim1==true){
          window.localStorage.setItem('question1', 0)
          
        }
        if(nao1==true){
          window.localStorage.setItem('question1', 8)
          score= score + x
        }
  
        if(sim2==true){
          window.localStorage.setItem('question2', 0)
          
        }
        if(nao2==true){
          window.localStorage.setItem('question2', 29)
          score= score + x
        }
        if(sim3==true){
          window.localStorage.setItem('question3', 0)
          
        }
        if(nao3==true){
          window.localStorage.setItem('question3', 5)
          score= score + x
        }
        if(sim4==true){
          window.localStorage.setItem('question4', 0)
          
        }
        if(nao4==true){
          window.localStorage.setItem('question4', 3)
          score= score + x
        }
        if(sim5==true){
          window.localStorage.setItem('question5', 0)
          
        }
        if(nao5==true){
          window.localStorage.setItem('question5', 15)
          score= score + x
        }
        if(sim6==true){
          window.localStorage.setItem('question6', 0)
          
        }
        if(nao6==true){
          window.localStorage.setItem('question6', 74)
          score= score + x
        }
        if(sim7==true){
          window.localStorage.setItem('question7', 0)
          
        }
        if(nao7==true){
          window.localStorage.setItem('question7', 6)
          score= score + x
        }
        if(sim8==true){
          window.localStorage.setItem('question8', 0)
          
        }
        if(nao8==true){
          window.localStorage.setItem('question8', 7)
          score= score + x
        }
        if(sim9==true){
          window.localStorage.setItem('question9', 0)
          
        }
        if(nao9==true){
          window.localStorage.setItem('question9', 16)
          score= score + x
        }
        if(sim10==true){
          window.localStorage.setItem('question10', 0)
          
        }
        if(nao10==true){
          window.localStorage.setItem('question10', 26)
          score= score + x
        }
        if(sim11==true){
          window.localStorage.setItem('question11', 0)
          
        }
        if(nao11==true){
          window.localStorage.setItem('question11', 42)
          score= score + x
        }
        if(sim12==true){
          window.localStorage.setItem('question12', 1)
          score= score + x
        }
        if(nao12==true){
          window.localStorage.setItem('question12', 0)
          
        }
        if(sim13==true){
          window.localStorage.setItem('question13', 0)
          
        }
        if(nao13==true){
          window.localStorage.setItem('question13', 97)
          score= score + x
        }
        if(sim14==true){
          window.localStorage.setItem('question14', 0)
          
        }
        if(nao14==true){
          window.localStorage.setItem('question14', 3)
          score= score + x
        }
        if(sim15==true){
          window.localStorage.setItem('question15', 1)
          score= score + x
        }
        if(nao15==true){
          window.localStorage.setItem('question15', 0)
          
        }
        if(sim16==true){
          window.localStorage.setItem('question16', 0)
          
        }
        if(nao16==true){
          window.localStorage.setItem('question16', 57)
          score= score + x
        }
        if(sim17==true){
          window.localStorage.setItem('question17', 0)
          
        }
        if(nao17==true){
          window.localStorage.setItem('question17', 16)
          score= score + x
        }
        if(sim18==true){
          window.localStorage.setItem('question18', 0)
          
        }
        if(nao18==true){
          window.localStorage.setItem('question18', 5)
          score= score + x
        }
        if(sim19==true){
          window.localStorage.setItem('question19', 1)
          score= score + x
        }
        if(nao19==true){
          window.localStorage.setItem('question19', 0)
          
        }
        if(sim20==true){
          window.localStorage.setItem('question20', 0)
          
        }
        if(nao20==true){
          window.localStorage.setItem('question20', 2)
          score= score + x
        }
        if(sim21==true){
          window.localStorage.setItem('question21', 0)
          
        }
        if(nao21==true){
          window.localStorage.setItem('question21', 74)
          score= score + x
        }
        if(sim22==true){
          window.localStorage.setItem('question22', 0)
  
        }
        if(nao22==true){
          window.localStorage.setItem('question22', 57)
          score= score + x
        }
        if(sim23==true){
          window.localStorage.setItem('question23', 1)
          score= score + x
        }
        if(nao23==true){
          window.localStorage.setItem('question23', 0)
          
        }
        if(sim24==true){
          window.localStorage.setItem('question24', 0)
  
        }
        if(nao24==true){
          window.localStorage.setItem('question24', 42)
          score= score + x
        }
        if(sim25==true){
          window.localStorage.setItem('question25', 0)
  
        }
        if(nao25==true){
          window.localStorage.setItem('question25', 73)
          score= score + x
        }
        if(sim26==true){
          window.localStorage.setItem('question26', 1)
          score= score + x
        }
        if(nao26==true){
          window.localStorage.setItem('question26', 0)
          
        }
        if(sim27==true){
          window.localStorage.setItem('question27', 0)
  
        }
        if(nao27==true){
          window.localStorage.setItem('question27', 45)
          score= score + x
        }
        if(sim28==true){
          window.localStorage.setItem('question28', 0)
  
        }
        if(nao28==true){
          window.localStorage.setItem('question28', 96)
          score= score + x
        }
        if(sim29==true){
          window.localStorage.setItem('question29', 0)
  
        }
        if(nao29==true){
          window.localStorage.setItem('question29', 35)
          score= score + x
        }
        if(sim30==true){
          window.localStorage.setItem('question30', 1)
          score= score + x
        }
        if(nao30==true){
          window.localStorage.setItem('question30', 0)
          
        }
        if(sim31==true){
          window.localStorage.setItem('question31', 0)
  
        }
        if(nao31==true){
          window.localStorage.setItem('question31', 97)
          score= score + x
        }
        if(sim32==true){
          window.localStorage.setItem('question32', 1)
          score= score + x
        }
        if(nao32==true){
          window.localStorage.setItem('question32', 0)
          
        }
        if(sim33==true){
          window.localStorage.setItem('question33', 1)
          score= score + x
        }
        if(nao33==true){
          window.localStorage.setItem('question33', 0)
          
        }
  
        if(score >7){
          alert("daltonico pois errou " +  
          
          score   +   " perguntas" )
          window.localStorage.setItem('daltonico','sim')
        }
        else{
          window.localStorage.setItem('daltonico','nao')
          alert("não daltonico")
        }
  
        
      })
    }
  
    
  });
  
  
  