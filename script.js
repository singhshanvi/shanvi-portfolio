window.onload = function () {
    console.log("Portfolio Loaded Successfully");
};

document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

let text = "Data Science & AI Enthusiast";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".tagline").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

document.querySelector(".tagline").innerHTML = "";
typing();