function mathIt()
{
  var x = prompt("Please enter a value:");
  if(isNaN(x))
  {
    console.log("try another NUMBER!")
  }
  if(x<1)
  {
    console.log("try another nubmer")
  }
    while(x!=1)
      {
       if(x%3==0)
       {
         console.log(x+"+0");
         x/= 3;
       }
        else if((x+1)%3==0)
        {
         console.log(x+"+1");
         x++;
         x/=3;
        }
        else if((x-1)%3==0)
        {
         console.log(x + "-1");
         x--;
         x/=3;
        }

     }
  console.log(x);
}