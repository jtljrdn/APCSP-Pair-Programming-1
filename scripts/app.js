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
        favBtn.innerHTML = "Add to Favorites";
        favBtn.onclick = function () {
          addFav(word.word);
          word.favorite = true;
        };
      }
    }
  } else {
    alert("Please choose a vocabulary word.");
  }
}

function addFav(word) {
  console.log(word)
  // adds the word to favorites when clicked
  for (let x = 0; x < words.length; x++) {
    const favWord = words[x];
    if (favWord.word == word) {
      favorites.push(word);
      fillFavs();
    }
  }
}

function fillFavs() {
  // fills the favorites list on the page

  console.log(favorites);
  // let h3 = document.createElement('h3')
  // h3.innerHTML = 'Favorites List'
  // favoritesList.appendChild(h3);
  favHead.style.display = 'block'
  let li = document.createElement("li");
  favorites.forEach(function (item) {
    li.innerHTML = `<p id="fav${count}">${cap(item)} <button type='button' onclick="removeFav(\'${item}\')">&#10005;</button></p>`;
    favoritesList.appendChild(li);
  });
  count++;
}

function removeFav(fav){
  for (let x = 0; x < favorites.length; x++) {
    let favIndex = favorites[x]
    if (fav == favIndex){
      console.log(favIndex)
      favorites.splice(favIndex, 1)
      removeFavs();
      fillFavs();
    }
  }
}

function removeFavs() {
  favoritesList.innerHTML = '';
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
