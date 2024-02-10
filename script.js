function randomLetter() {
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters[Math.floor(Math.random() * 25)];
}
var audio = new Audio('scream.mp3');


function loadRandomLetter() {
    const letter = document.querySelector(".random-letter");
    letter.textContent = randomLetter();
}

window.addEventListener("load", (event) => {
    const letter = document.querySelector(".random-letter");
    letter.textContent = randomLetter();
    letter = letter.draggable();
});
var draggableDiv = document.getElementById('draggableDiv');
var dropArea = document.getElementById('dropArea');
var dropAreaBin = document.getElementById('dropAreaBin');




draggableDiv.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', e.target.textContent);

});


dropArea.addEventListener('dragover', function(e) {
     e.preventDefault(); 
});
dropAreaBin.addEventListener('dragover', function(e) {
    e.preventDefault(); 
    });


dropArea.addEventListener('drop', function(e) {
    e.preventDefault(); 
    var data = e.dataTransfer.getData('text');
    dropArea.value += data; 
    loadRandomLetter();
});

dropAreaBin.addEventListener('drop', function(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');

    loadRandomLetter();
    audio.play();
});

function displayName() {

    alert('hi john');
}
document.querySelector('button').addEventListener('mouseover', () => {
    document.querySelector('button').style.right += 40;
})