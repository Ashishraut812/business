document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
            navbar.style.backgroundColor = '#0f172a';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // 2. Interactive Business Quiz Logic
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('quiz-result');
    const diagnosisTitle = document.getElementById('diagnosis-title');
    const diagnosisText = document.getElementById('diagnosis-text');

    calculateBtn.addEventListener('click', () => {
        const checkedCount = document.querySelectorAll('.quiz-check:checked').length;

        let title = "";
        let description = "";

        if (checkedCount === 0) {
            title = "Optimized Architect";
            description = "Excellent work. You have systematically insulated yourself from structural daily bottlenecks. Your next step is accelerating strategic investment and scale.";
        } else if (checkedCount <= 2) {
            title = "Emerging Leader";
            description = "You've decoupled minor operations, but key dependencies rest squarely on your shoulders. You are vulnerable to sudden operational pipeline cracks if you step away.";
        } else {
            title = "100% Trapped Operator";
            description = "Warning: You do not own a scalable business engine—you own an exhausting 14-hour job. If you stop logging on, execution drops. Let's fix this system limitation immediately.";
        }

        // Show layout block with content mapping
        diagnosisTitle.textContent = title;
        diagnosisText.textContent = description;
        resultBox.style.display = "block";

        // Smooth view alignment
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
