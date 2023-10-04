function updateProgressBar(completeness) {
    const progressBar = document.querySelector('.progress-fill');
    progressBar.style.width = completeness + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    const totalRequiredCredits = 60;
    let obtainedCredits = 20;

    let completenessPercentage = (obtainedCredits / totalRequiredCredits) * 100;
    completenessPercentage = Math.min(completenessPercentage, 100);

    setTimeout(() => {
        updateProgressBar(completenessPercentage);
    }, 100);
});