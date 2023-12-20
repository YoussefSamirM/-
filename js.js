document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 10;

    for (let i = 1; i <= totalQuestions; i++) {
        const currentQuestion = document.getElementById(`q${i}`);
        const selectedAnswer = currentQuestion.querySelector(`input[name=q${i}]:checked`);
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            // قم بوضع الإجابات الصحيحة لكل سؤال هنا
            switch (i) {
                case 1:
                    if (userAnswer === 'باريس') {
                        score++;
                        currentQuestion.style.display = 'none';
                        document.getElementById(`q${i + 1}`).style.display = 'block';
                    }
                    break;
                // أضف باقي الأسئلة هنا باستخدام الطريقة ذاتها
                case 10:
                    if (userAnswer === 'أزرق') {
                        score++;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    if (score === totalQuestions) {
        const results = document.getElementById('results');
        results.innerHTML = `نتيجتك: ${score} من ${totalQuestions}`;
        results.style.display = 'block';
    }
});