function checkAnswers() {
    const inputs = document.querySelectorAll('.cell input');
    let allCorrect = true;
        inputs.forEach(input => {
        const answer = input.dataset.answer;
        const userAnswer = input.value.toUpperCase();

        if (userAnswer === answer) {
            input.style.backgroundColor = '#C8E6C9'; 
        } else {
            input.style.backgroundColor = '#FFCDD2'; 
            allCorrect = false;
        }
    });

    if (allCorrect) {
        exibirParabens();
    } else {
        alert('Algumas respostas estão incorretas. Tente novamente!');
    }
}

function exibirParabens() {
    
    document.getElementById('parabensDiv').style.display = 'block';
    const duration = 5 * 1000; 
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
