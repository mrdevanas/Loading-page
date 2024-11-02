let f = 1
let g =   setInterval(() => {   
          f++    
          document.getElementById('h').innerHTML=f +'%'
  if( f== 100){
      clearInterval(g)
      document.getElementById('divl').style.display = 'none'
      
                  document.getElementById('vr').style.display = 'block'

     
if( document.getElementById('vr').style.display = 'block')
{setTimeout(() => {
   document.getElementById('vr').style.display = 'none'
}, 2000);}

  } 
  }, 50);