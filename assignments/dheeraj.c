#include<stdio.h>

int main()
{
  char *str ="Wheather is good today";
  char *mark[10];
  int i=1,k;
  mark[0]=str;

   while(*str!='\0' || str!=NULL)
   {
        if(*str==' ')
         { 
            str++;
            mark[i]=str;
            i++;
         }
       else{
        str++;
        }

       
    }
 /* 
  for(k=i;k>=0;k--)
   {
        while(*mark[k]!=' ' || *mark[k]!='\0')
        {
           printf("%c",*mark[k]);
           mark[k]++;
        }
          
       printf(" ");

   }
*/
return 0;
}
