let circularProgress = document.querySelector(".progress");
let progressVal = document.querySelector(".progress-value");
let progressStartVal = 0;
let speed = 20;
let progress;

document.getElementById("value-number").addEventListener("input", function () {
    let inputValue = parseInt(this.value);
    if (isNaN(inputValue)) {
        inputValue = 0
    }
    if (inputValue > 100 || inputValue < 0) {
        alert("Неправильное значение");
    } else {
        clearInterval(progress);

        progressVal.textContent = `${inputValue}%`;
        progressStartVal = 0;

        progress = setInterval(() => {

            circularProgress.style.background = `conic-gradient(blue ${progressStartVal * 3.6}deg, #ededed 0deg)`;
            if (progressStartVal == inputValue) {
                clearInterval(progress);
            }
            progressStartVal++;
        }, speed);
    }
});
let hideChecked = document.getElementById("hideCheck")
hideChecked.addEventListener("change", function () {
    if (this.checked) {
        document.getElementsByClassName("progress")[0].style.visibility = "hidden"
    } else {
        document.getElementsByClassName("progress")[0].style.visibility = "visible"
    }
});
let animChecked = document.getElementById("animCheck")
animChecked.addEventListener("change", function () {
    if (this.checked) {
        document.getElementsByClassName("progress")[0].style.animation = "rotate 2s linear infinite"
        progressVal.style.animation = "un-rotate 2s linear infinite"
    } else {
        document.getElementsByClassName("progress")[0].style.animation = "none"
        progressVal.style.animation = "none"
    }
});