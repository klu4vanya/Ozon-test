let state = {
    value: 0,
    isAnim: false,
    isHide: checked
}
function startAnimation() {
    progressState.isAnim = true;
    let animChecked = document.getElementById("animCheck")
    animChecked.addEventListener("change", function () {
        if (this.checked) {
            document.getElementsByClassName("progress")[0].style.animation = "rotate 2s linear infinite"
            progressVal.style.animation = "un-rotate 2s linear infinite"
        }
    });
}
function stopAnimation() {
    progressState.isAnim = true;
    let animChecked = document.getElementById("animCheck")
    animChecked.addEventListener("change", function () {
        if (!this.checked) {
            document.getElementsByClassName("progress")[0].style.animation = "none"
            progressVal.style.animation = "none"
        }
    });
}
function setValue(newValue) {
    let circularProgress = document.querySelector(".progress");
    let progressVal = document.querySelector(".progress-value");
    let progressStartVal = 0;
    let speed = 20;
    let progress;
    if (isNaN(newValue)) {
        newValue = 0
    }
    if (newValue > 100 || newValue < 0) {
        alert("Неправильное значение");
    } else {
        clearInterval(progress);

        progressVal.textContent = `${newValue}%`;
        progressStartVal = 0;

        progress = setInterval(() => {

            circularProgress.style.background = `conic-gradient(blue ${progressStartVal * 3.6}deg, #ededed 0deg)`;
            if (progressStartVal == newValue) {
                clearInterval(progress);
            }
            progressStartVal++;
        }, speed);
    }
}
function isHide() {
    let hideChecked = document.getElementById("hideCheck")
    hideChecked.addEventListener("change", function () {
        if (this.checked) {
            document.getElementsByClassName("progress")[0].style.visibility = "hidden"
        }
    });
}
function isNotHide() {
    let hideChecked = document.getElementById("hideCheck")
    hideChecked.addEventListener("change", function () {
        if (!this.checked) {
            document.getElementsByClassName("progress")[0].style.visibility = "visible"
        }
    });
}
export {startAnimation, stopAnimation, setValue, isHide, isNotHide}