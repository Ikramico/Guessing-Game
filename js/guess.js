alert("Hello! This is a demo Guessing Game");

let guess =Math.trunc(30 + Math.random() * 20);
let scu = 20;
let hscr = 0;



function check(){
    let input = document.querySelector(".ino").value;
    
   if (!guess){
       alert("Input a number between 30 to 50");
   }
    else if( guess == input){
        if(scu > 1){
        document.querySelector(".cus").textContent = "You Win!";
        scu--;
        document.querySelector(".core").textContent = scu;
        document.querySelector("body").style.backgroundColor = "rgb(51,153,0)";
        document.querySelector(".key").textContent = guess;

        if(scu > hscr){hscr = scu;
            document.querySelector(".hcore").textContent = hscr;
        }


        }
        else{
            document.querySelector(".cus").textContent = "You lost!";
        document.querySelector(".core").textContent = 0;
        document.querySelector("body").style.backgroundColor = "rgb(230,0,0)";
        document.querySelector(".key").textContent = guess;
        }

    }
    else if( guess < input){

        if( input > 50){
            alert("Input a number between 30 to 50");
        }
        else{
        if(scu > 1){
        document.querySelector(".cus").textContent = "Very High";
        scu--;
        document.querySelector(".core").textContent = scu;
    }
    else{
        document.querySelector(".cus").textContent = "You lost!";
    document.querySelector(".core").textContent = 0;
    document.querySelector(".key").textContent = guess;
    }
}
    document.querySelector("body").style.backgroundColor = "rgb(230,0,0)";


    }
    else if( guess > input){

        if( input < 30){
            alert("Input a number between 30 to 50");
        }
        else{
        
        if(scu > 1){
        document.querySelector(".cus").textContent = "Very Low!";
        scu--;
        document.querySelector(".core").textContent = scu;
    }
    else{
        document.querySelector(".cus").textContent = "You lost!";
    document.querySelector(".core").textContent = 0;
    document.querySelector(".key").textContent = guess;
    }
}
    document.querySelector("body").style.backgroundColor = "rgb(230,0,0)";
    

    }
   
   
}

function reset(){
    guess = Math.trunc(30 + Math.random() * 20);
    document.querySelector(".key").textContent = guess;
    document.querySelector("body").style.backgroundColor = "rgb(95, 158, 160)";
    scu = 20;
    document.querySelector(".core").textContent = scu;
    document.querySelector(".cus").textContent = "Start Guessing....";
    document.querySelector(".ino").value = "";
    document.querySelector(".key").textContent = "?";

}

