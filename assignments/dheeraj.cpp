#include<stdio.h>

using namespace std;

int main()
{
  char *str ="Wheather is good today";
  char *mark[10];
  int i=1;
  mark[0]=str;

   while(str!='\0')
   {
        if(str==' ')
         { 
            str++;
            mark[i]=str;
            i++;
         }
       else{
        str++;
        }

       
    }
  
  for(int k=i;k>=0;k--)
   {
        while(mark[k]!=' ' || mark[k]!='\0')
        {
           printf("%c",mark[k]);
           mark[k]++;
        }
          
       printf(" ");

   }

return 0;
}
