function handler(t){
    console.log(t+" ");
}


function synchronise()
{
     for(i=0;i<50;i++)
     {
       setTimeout(handler,1000,i);
     }
}

synchronise();
