
function synchronise()
{
     for(i=0;i<50;i++)
     {
       setTimeout(function(){
          console.log(i+" ");
       },1000);
     }
}

synchronise();
