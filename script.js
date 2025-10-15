function clickAnswer(){
    const answer = document.getElementById("answer")
    const submit = document.getElementById("submit")
    const cont = document.getElementById("all-questions")
    function  highlightAnswer() {
            var answerDiv = $(this)
            answerDiv.siblings().addClass("muted")
            answerDiv.siblings().removeClass("selected")
            answerDiv.siblings().addClass("selected")
            answerDiv.siblings().removeClass("muted")
    }

        function SubmitAnswer(){
            var aCount = $(".selected[data-value='A']").length
            var bCount = $(".selected[data-value='B']").length
            var cCount = $(".selected[data-value='C']").length
            var dCount = $(".selected[data-value='D']").length

    }

}
window.onload = function() {
    const check = document.getElementById("check")
    const button = document.getElementById("PressButton")
    button.onclick = function () {
        check.style.display = "block"

    }
}
