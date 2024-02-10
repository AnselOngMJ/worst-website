function randomLetter() {
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters[Math.floor(Math.random() * 25)];
}

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



// Add data to the drag event
draggableDiv.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);

});

// Prevent the default handling of the element
dropArea.addEventListener('dragover', function(e) {
    e.preventDefault(); // Necessary to allow the drop
});
dropAreaBin.addEventListener('dragover', function(e) {
    e.preventDefault(); // Necessary to allow the drop
});

// Handle the drop action
dropArea.addEventListener('drop', function(e) {
    e.preventDefault(); // Prevent default action (open as link for some elements)
    var data = e.dataTransfer.getData('text');
    dropArea.value += data; // Append the text data into the textarea
    loadRandomLetter();
});

dropAreaBin.addEventListener('drop', function(e) {
    e.preventDefault(); // Prevent default action (open as link for some elements)
    var data = e.dataTransfer.getData('text');

    loadRandomLetter();
});

function displayName() {
    // document.querySelector("#name").textContent = 
    // alert(`hi ${document.querySelector("textarea").value}`);
    alert('hi john');
}
document.querySelector('button').addEventListener('mouseover', () => {
    document.querySelector('button').style.right += 40;
})