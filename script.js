var button = document.getElementById("enter"),
    input = document.getElementById("userinput"),
    ul = document.querySelector("ul"),
    li = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Delete"));
    newButton.classList.add("del");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(newButton);
    ul.appendChild(li);
    input.value = "";
};

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        createDeleteButton();
    };
};

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
        createDeleteButton();
    };
};

ul.addEventListener("click", e => {
    if (e.target.localName === "button") {
        e.target.parentNode.remove();
    } else if (e.target.localName === "li") {
        e.target.classList.toggle("done");
    };
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);