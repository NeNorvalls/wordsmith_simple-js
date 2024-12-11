const el = document.querySelector("#words");

// Function to set the text color
function setColor() {
    const input = document.querySelector("input[type='color']");
    el.style.color = input.value;
}

// Function to toggle underline
function toggleUnderline() {
    el.classList.toggle("underline");
}

// Function to toggle italic
function toggleItalic() {
    el.classList.toggle("italic");
}

// Function to toggle bold
function toggleBold() {
    el.classList.toggle("bold");
}

// Function to toggle monospace
function toggleMonospace() {
    el.classList.toggle("mono");
}

// Function to remove formatting
function removeFormat() {
    el.classList.remove("underline", "italic", "bold", "mono");
    el.style.color = "black";
}
