// Security system that allows 3 tries
const prompt = require("prompt-sync")();

let pass = "1234";


// console.log(passcheck);




for(let i=0;i<3;i=i+1)   // 0  1  2  3
{
    let passcheck = prompt("Enter password!!");
    if(pass === passcheck)
   {
       console.log("SUCCESS!!");
       break;
   }
   else
   {
    if(i===2)
    {
        console.log("LOCKED HAHA");
    }
    else
    {
        console.log("Try Again");

    }
       

   }


}



// Part 2
//Coffee machine
//You have a coffee machine that dispenses coffee until it runs out of water.
//The machine starts with a full tank of water, enough to make 5 cups of coffee
//After dispensing each cup, it checks if it still has water
//left to continue or notifies the user if it's empty.

let cupsOfWater = 5;


while(cupsOfWater>0){
    let user = prompt("If you want coffee type yes otherwise type no");
    if(user === "yes")
    {
        if(cupsOfWater===0)
        {
            console.log("Refill!!");
            break;
            

        }
        else
        {

            if(cupsOfWater===1)
            {
                console.log("Dispensing coffee");
                cupsOfWater= cupsOfWater-1;
                console.log("Low in water");

            }
            else
            {
                console.log("Dispensing coffee");
                cupsOfWater= cupsOfWater-1;
            }
            
           
        }
        

    }
    else if(user === "no")
    {
        break;

    }
    

}