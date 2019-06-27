var winner;


var makePolitician = function(name, partyColor)
{

var politician = {}; 
  politician.name=name;
  politician.elecResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.totalTally = function()
  {
    for (var i = 0; i < this.elecResults.length; i++)

      {
        
        this.totalVotes = this.totalVotes + this.elecResults[i];
      }

  };
  
  return politician;

};



var polit1 = makePolitician("Tasha",[132, 17, 11] );

var polit2 = makePolitician("Jennifer",[345, 141, 136] );


polit1.elecResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
polit2.elecResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

polit1.elecResults[9] = 1;
polit1.elecResults[4] = 17;
polit1.elecResults[43] = 11;



polit2.elecResults[9] = 28;
polit2.elecResults[9] = 38;
polit2.elecResults[9] = 27;

/*Get results to show up on map*/

var setStateResults = function(state){
  
  theStates[state].winner = null;
  
  if (polit1.elecResults[state] > polit2.elecResults[state]){
      theStates[state].winner = polit1;
    console.log(winner + " is the winner of this state!");
  }
    else if (polit2.elecResults[state] > polit1.elecResults[state]){
      theStates[state].winner = polit2;
      console.log(winner + " is the winner of this state!")
    }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null){
   theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidateName1.innerText = polit1.name;
candidateName2.innerText = polit2.name;

candidateResults1.innerText = polit1.elecResults[state];
candidateResults2.innerText = polit2.elecResults[state];

if (theStates[state].winner === null)
{
  winner.innerText = "DRAW";
} else {
  winner.innerText = theStates[state].winner.name;
};

  }


/*End of section*/



polit1.totalTally();
polit2.totalTally();

/*
console.log(polit1.totalVotes);
console.log(polit2.totalVotes);
*/

if (polit1.totalVotes > polit2.totalVotes) 
{
  winner = polit1.name;
  console.log("The winner is " + winner);
} 
else if (polit1.totalVotes < polit2.totalVotes)
{
  winner = polit2.name;
  console.log("The winner is " + winner);
}
else {
  console.log("ITS A DRAW!");
}

/*
console.log("Tasha's color is " + polit1.partyColor);
console.log("Jennifer's color is " + polit2.partyColor);
*/

var countryResults = document.getElementById("countryResults");
var row = countryResults.children[0].children[0];
row.children[0].innerText = polit1.name;
row.children[1].innerText = polit1.totalVotes;
row.children[2].innerText = polit2.name;
row.children[3].innerText = polit2.totalVotes;
row.children[5].innerText = winner;

var stateResults = document.getElementById("stateResults");
var header = stateResults.children[0]; 
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var body = stateResults.children[1];
var candidateName1 = body.children[0].children[0];
var candidateResults1 = body.children[0].children[1];
var candidateName2 = body.children[1].children[0];
var candidateResults2 = body.children[1].children[1];
var winner = body.children[2].children[1]

