
let $team1score=document.getElementbyId("team1-score");
let $team2score=document.getElementbyId("team2-score");
let $team1wickets=document.getElementbyId("team1-wickets");
let $team2wickets=document.getElementbyId("team2-wickets");
let $team1balls=document.querySelectorAll("#team1-superover>ball");
let $team2balls=document.querySelectorAll("team2-superover>.ball");


let possibleoutcomesArr=[0,2,3,4,6,"W"];
let turn="IND";
let team1score=0;
let team2score=0;
let team1wickets=0;
let team2wickets=0;
let ballFacedbyTeam1=0;
let ballFacedbyTeam2=0;
let j=0;
let i=o;
let strikeAudio=new Audio("");
let gameoverAudio= new Audio("")


function play(){

    let randomNO=Math.random()*possibleoutcomesArr.length;
    let outcome=possibleoutcomesArr[randomNO];

    if(turn==1){

        ballFacedbyTeam1++;
        $team1balls[i].innerText=outcome;

        if(outcome=="W"){
            team1wickets++;
            $team1wickets.textContent=team1wickets;
        }
        else{
            team1score==team1score+outcome;
            $team1score.textContent=team1score;
        }

        i++;

        if(ballFacedbyTeam1==6 || teamWickets==2){
            turn=2;
        }
    }

    else if(turn==2){
        ballFacedbyTeam2++;
        $team1balls[j].innerText=outcome;

        if(outcome=="W"){
            team2wickets++;
            $team2wickets.textContent=team2wickets;
        }
        else{
            team2score==team2score+outcome;
            $team2score.textContent=team2score;
        }

        j++;

        if(ballFacedbyTeam2==6 || team2Wickets==2 || team2score>){
            gameOver();
        }

    }

}


function gameOver(){

    if (teamscore>team2score){
        alert("India wins...!!!")
    }
    else if(team1score<team2score){
        alert("Pakistan wins")
    }
    else{
        alert("Draw")
    }


}


function reset(){
    window.location.reload();
}