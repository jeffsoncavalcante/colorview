document.addEventListener('DOMContentLoaded', function(){
    var ativar = document.getElementById('ativar');
    if(ativar){
        ativar.addEventListener('click',function teste(){
         console.log("aqui")
            var vetor = window.localStorage.getItem("key")

            if(vetor=true){
                let el = document.querySelectorAll('h2')
            document.body.style.background = '#666'
            
            var data ={
                "cores" : {
                    "47,79,79":{
                        "cor":"verde"
                    },"0,250,154":{
                        "cor":"verde"
                    },"0,255,127":{
                        "cor":"verde"
                    },"152,251,152":{
                        "cor":"verde"
                    },"144,238,144":{
                        "cor":"verde"
                    },"143,188,143":{
                        "cor":"verde"
                    },"60,179,113":{
                        "cor":"verde"
                    },"46,139,87":{
                        "cor":"verde"
                    },"0,100,0":{
                        "cor":"verde"
                    },"0,128,0":{
                        "cor":"verde"
                    },"34,139,34":{
                        "cor":"verde"
                    },"50,205,50":{
                        "cor":"verde"
                    },"0,255,0":{
                        "cor":"verde"
                    },"124,252,0":{
                        "cor":"verde"
                    },"127,255,0":{
                        "cor":"verde"
                    },"173,255,47":{
                        "cor":"verde"
                    },"154,205,50":{
                        "cor":"verde"
                    },"107,142,35":{
                        "cor":"verde"
                    },"85,107,47":{
                        "cor":"verde"
                    },"128,128,0":{
                        "cor":"verde"
                    },"106,90,205":{
                        "cor":"azul"
                    },
                    "72,61,139":{
                        "cor":"azul"
                    },
                    "0,0,139":{
                        "cor":"azul"
                    },
                    "0,0,205":{
                        "cor":"azul"
                    },
                    "0,0,255":{
                        "cor":"azul"
                    },
                    "100,149,237":{
                        "cor":"azul"
                    },
                    "65,105,225":{
                        "cor":"azul"
                    },
                    "30,144,255":{
                        "cor":"azul"
                    },
                    "0,191,255":{
                        "cor":"azul"
                    },
                    "135,206,250":{
                        "cor":"azul"
                    },
                    "135,206,235":{
                        "cor":"azul"
                    },
                    "173,216,230":{
                        "cor":"azul"
                    },
                    "70,130,180":{
                        "cor":"azul"
                    },
                    "176,196,222":{
                        "cor":"azul"
                    },
                    "112,128,144":{
                        "cor":"azul"
                    },
                    "119,136,153":{
                        "cor":"azul"
                    },
                    "0,255,255":{
                        "cor":"azul"
                    },
                    "0,206,209":{
                        "cor":"azul"
                    },
                    "64,224,208":{
                        "cor":"azul"
                    },
                    "72,209,204":{
                        "cor":"azul"
                    },
                    "32,178,170":{
                        "cor":"azul"
                    },
                    "0,139,139":{
                        "cor":"azul"
                    },
                    "0,128,128":{
                        "cor":"azul"
                    },
                    "127,255,212":{
                        "cor":"azul"
                    },
                    "102,205,170":{
                        "cor":"azul"
                    },
                    "95,158,160":{
                        "cor":"azul"
                    },"128,0,0":{
                        "cor":"vermelho"
                    },
                    
                    "139,0,0":{
                        "cor":"vermelho"
                    },
                    
                    "178,34,34":{
                        "cor":"vermelho"
                    },
                    
                    "165,42,42":{
                        "cor":"vermelho"
                    },
                    
                    "250,128,114":{
                        "cor":"vermelho"
                    },
                    
                    "233,150,122":{
                        "cor":"vermelho"
                    },
                    
                    "255,160,122":{
                        "cor":"vermelho"
                    },
                    
                    "255,127,80":{
                        "cor":"vermelho"
                    },
                    
                    "255,99,71":{
                        "cor":"vermelho"
                    },
                    
                    "220,20,60":{
                        "cor":"vermelho"
                    },
                    
                    "240,128,128":{
                        "cor":"vermelho"
                    }                      
                }    
            }
            console.log(data)
            for (i=0; i<el.length; i++){
                var styles = window.getComputedStyle(el[i]);
                
                var css = Object.keys(styles).reduce(
                    (obj, prop) => (prop.match(/\D/) && (obj[prop] = styles[prop]), obj), {}
                    );
                    var semrgb = css.color.split('rgb(')
                    var rgbsemparenteses = semrgb[1].split(')')
                    var rgb = rgbsemparenteses[0].split(',')
                    var red = rgb[0]
                    var green = rgb[1].split(' ')
                    var blue = rgb[2].split(' ')
                    var rgbcomp = red+green+blue
                    console.log(rgbcomp)
                    console.log(data)
                    cores2 = data.cores[rgbcomp].cor
                    if(cores2=='vermelho'){
                        el[i].style.cssText = 'color: white; -webkit-text-stroke: #000; -webkit-text-stroke-width: 1px;'
                    }if(cores2=='verde'){
                        el[i].style.cssText = 'color: white; -webkit-text-stroke: #ffee00; -webkit-text-stroke-width: 1px;'
                    }if(cores2=='azul'){
                        el[i].style.cssText = 'color: white; -webkit-text-stroke: #0000ff; -webkit-text-stroke-width: 1px;'
                    }
                    
                    
                }
            }
            
                
            })
        }
        
   
})