function checkQuiz() {

    let score = 0;

    // Ερώτηση 1
    const answer1 = document.querySelector('input[name="q1"]:checked');

    if (answer1 && answer1.value === "sensors") {
        score++;
    }


    // Ερώτηση 2
    const answer2 = document.querySelector('input[name="q2"]:checked');

    if (answer2 && answer2.value === "motors") {
        score++;
    }


    // Εμφάνιση αποτελέσματος
    const result = document.getElementById("quiz-result");

    if (score === 2) {

        result.innerHTML = "🎉 Μπράβο! Απάντησες σωστά και στις 2 ερωτήσεις!";

    } else if (score === 1) {

        result.innerHTML = "👍 Πολύ καλά! Έχεις 1 σωστή απάντηση στις 2.";

    } else {

        result.innerHTML = "💡 Δεν πειράζει! Διάβασε ξανά το μάθημα και προσπάθησε ξανά.";

    }
}