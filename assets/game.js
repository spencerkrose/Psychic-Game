<script type="text/javascript">
    var questions = [
        { q: "Is it fun?", a: "f" },
        { q: "Is it cool?", a: "t" },
        { q: "Is class over?", a: "f" }
    ];
    var score = 0;
    var questionCounter = 0;
    // document.getElementById("question").innerHTML = "<h1>hello</h1>";
    // document.getElementById("score").textContent = "<h1>hello</h1>";
    // for (var i = 0; i < questions.length; i++) {
    //     document.getElementById("question").innerHTML = "Question: " + (questions[i].q);
    // }

    function displayQuestions() {
        if (questionCounter < questions.length) {

            document.getElementById("question").innerHTML = "Question: " + (questions[questionCounter].q);
        }
        else {
            document.getElementById("question").innerHTML = "Game over";
        }
    }
    displayQuestions();

    document.onkeyup = function (event) {

        if (questionCounter === questions.length) {
            return;
        }

        if (event.key === "t" || event.key === 'f') {
            if (event.key === questions[questionCounter].a) {
                alert("correct");
                score++;
                document.getElementById("score").textContent = "Score : " + score;

            }
            else {
                alert("wrong")
            }

        }

        questionCounter++;
        displayQuestions();
    }
</script>