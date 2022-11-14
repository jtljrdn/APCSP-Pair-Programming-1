let favorites = [];
let count = 0;

// functions
function fillDropdown() {
  // programmatically fills the dropdown
  words.forEach(function (item) {
    let op = document.createElement("option");
    op.value = item.word;
    op.innerHTML = cap(item.word);
    wordSelect.appendChild(op);
  });
}

function showWord(event, wordChoice) {
  // shows the vocab word, definition, image
  playSound('sounds/sweep.wav')
  event.preventDefault();
  console.log("Show Def Clicked");
  if (wordChoice != "") {
    resetWord();
    for (let x = 0; x < words.length; x++) {
      const word = words[x];
      if (word.word == wordChoice) {
        console.log(word);
        vocabDisplay.style.display = "inline-block";
        vocabWord.innerHTML = cap(word.word);
        vocabDef.innerHTML = word.def;
        vocabPic.src = `pics/${word.pic}`;
        btn.innerHTML = "Add to Favorites";
        btn.onclick = function () {
          addFav(word);
        };
      }
    }
  } else {
    alert("Please choose a vocabulary word.");
  }
}

function addFav(word) {
  // adds the word to favorites when clicked
  for (let x = 0; x < words.length; x++) {
    const favWord = words[x];
    if (favWord == word) {
      word.favorite = true;
      fillFavs(word);
    }
  }
}

function fillFavs(word) {
  // fills the favorites list on the page
  favorites.push(word);
  console.log(favorites);
  let h3 = document.createElement("h3");
  let li = document.createElement("li");
  if (count == 0) {
    h3.innerHTML = "Favorites";
    favoritesList.appendChild(h3);
  }
  favorites.forEach(function (item) {
    li.innerHTML = `<p>${cap(item.word)}</p>`;
    favoritesList.appendChild(li);
  });
  count++;
}

function resetWord() {
  // resets everything
  wordSelect.value = "";
  vocabDisplay.style.display = "";
  vocabDef.innerHTML = "";
  vocabPic.src = "";
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playSound(file){
  let myAudio = new Audio(file);
  myAudio.play(file);
}

// on load func calls
fillDropdown();
