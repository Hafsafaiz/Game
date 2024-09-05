let userscore = 0;
let compscore = 0;
    //accesing method from html
const choices = document.querySelectorAll(".choice");
const Msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
 const Options = ["rock","paper", "scissor"];
 const randomIdx = Math.floor(Math.random () *3);
 return Options[randomIdx];

};
   const drawgame = () => {
    console.log("game awas draw");
    Msg.innerText = "game draw!";
   }
     const showWinner = (userwin) => {
      if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win!");
        Msg.innerText = "you win!";
          }else{
            compscore++;
            compscorePara.innerText = compscore;
        
        Msg.innerText = "you loose!";
      }
     }
const playGame = (userchoice) => {
    console.log("user Choice = ",userchoice)
    const compChoice = gencompChoice();
    console.log("comp Choice= ",compChoice);

    if(userchoice === compChoice){
        //draw game
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper" ? false:true;
        }else if (userchoice === "paper"){
            userwin = compChoice === "scissor" ? false:true;
        }else{
         userwin = compChoice === "rock" ? false:true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
     playGame(userchoice);
    });
});