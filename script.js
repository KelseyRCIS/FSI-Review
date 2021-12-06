// # The story
// - adding the voting functionality for the upcoming Pet of the Month.

// # Tasks
// - [x] Add "Vote" buttons to each pet on the page
// - [x] When a pet gets a vote, store their score in the leaderboard
// - [x] Use localStorage to store votes between page visits

// ## Bonus Task
// - [x] Add another button for calculating the favorite pet
// - [x] Style the favorite pet's section so they stand out, when button is clicked

// let doggo = 0
// let catto = 0
// let fish = 0

// let btn = document.createElement("button");
// btn.innerHTML = "Vote for Doggo";
// document.body.appendChild(btn);
// document.getElementById('doggo-votes').addEventListener("click", function(e) {
//     if (doggo>0) {
//     btn++;
//     document.getElementById('doggo-votes').textContent=doggo;
//     }
// //document.body.class.appendChild(btn);
//})

// Assign pet variables by pet ID and store variable values in localStorage
let dogVotesTd = document.querySelector("#doggo-votes");
let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesTd.textContent = dogVotes;
}

let catVotesTd = document.querySelector("#catto-votes");
let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesTd.textContent = catVotes;
}

let fishVotesTd = document.querySelector("#fish-votes");
let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes)  {
    fishVotesTd.textContent = fishVotes;
}

// Select All animal sections by class using "."
let animals = document.querySelectorAll(".animal")

// Create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesTd.textContent);
    dogVotesCount = dogVotesCount +1;
    dogVotesTd.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
});
animals[0].append(dogVoteBtn)

// Create cat vote button
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"
catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesTd.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesTd.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount)
});
animals[1].append(catVoteBtn)

// Create fish vote button
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Goldfish"
fishVoteBtn.addEventListener('click', function(e) {
    let fishVotesCount = parseInt(fishVotesTd.textContent);
    fishVotesCount = fishVotesCount +1;
    fishVotesTd.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishvotesCount)
});
animals[2].append(fishVoteBtn)

// Calculate favorite votes clicked
let votingContainer = document.querySelector("#voting-container");
let favoriteButton = document.createElement("button");
favoriteButton.textContent = "Most Loved Pet"
favoriteButton.addEventListener('click', function(e) {
    // Which pet is most popular?
    let dVotes = parseInt(dogVotesTd.textContent)
    let cVotes = parseInt(catVotesTd.textContent)
    let fVotes = parseInt(fishVotesTd.textContent)
    let votes = [
        {id: 'doggo', votes: dVotes},
        {id: 'catto', votes: cVotes},
        {id: 'fish', votes:fVotes}
    ]
    // Compare votes, starting at dog votes
    let highestVotes = votes[0]
    for (let index = 0; index < votes.length; index++) {
        if(votes[index].votes > highestVotes.votes) {
            highestVotes = votes[index]
        }
    }

    // Reset the background color for the last animal winner to prevent double winners
    for (let index = 0; index < animals.length; index++) {
        animals[index].style.backgroundColor = "white"
    }

    // Change background color for the winning pet to yellow 
    let favoriteAnimal = document.querySelector("#"+highestVotes.id)
    favoriteAnimal.style.backgroundColor = "yellow"
})
votingContainer.append(favoriteButton)