const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        // Check if the clicked question is already open
        const isOpen = question.classList.contains('is-open');

        // Close all open questions (resets both the text panel AND arrows)
        document.querySelectorAll('.question.is-open').forEach((openQuestion) => {
            openQuestion.classList.remove('is-open');
        });

        // If the clicked item wasn't open, open it now
        if (!isOpen) {
            question.classList.add('is-open');
        }
    });
});