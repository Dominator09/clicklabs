function handler(t){
     setTimeout(function(){
       console.log(t+" ");
     },1000);
}


function synchronise()
{
     for(i=0;i<50;i++)
     {
          handler(i); 
     }
}

synchronise();
