document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Glassmorph Effect
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

    // 2. Custom Business Artist Diagnosis Calculator
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('quiz-result');
    const diagnosisTitle = document.getElementById('diagnosis-title');
    const diagnosisText = document.getElementById('diagnosis-text');

    calculateBtn.addEventListener('click', () => {
        const checkedCount = document.querySelectorAll('.quiz-check:checked').length;

        let title = "";
        let description = "";

        if (checkedCount === 0) {
            title = "Masterful Business Artist";
            description = "Incredible. You have successfully separated your presence from basic operations. Your systems are clean, and your canvas is configured for pure strategic growth.";
        } else if (checkedCount <= 2) {
            title = "The Emerging Architect";
            description = "You have established some structural patterns, but your systems still contain fragile data leaks or dependencies. You are vulnerable to sudden operational stalls if you disconnect.";
        } else {
            title = "100% Trapped Operator";
            description = "Critical Warning: You are currently trapped inside a highly chaotic, exhausting job. You have duplicate copy-paste workflows, human router communication traps, and near-zero metric transparency. We need to implement the Scale & Sculpt method immediately.";
        }

        diagnosisTitle.textContent = title;
        diagnosisText.textContent = description;
        resultBox.style.display = "block";

        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
