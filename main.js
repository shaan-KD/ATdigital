document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const plus = item.querySelector(".plus");
        const answer = item.querySelector(".faq-answer");

        plus.addEventListener("click", () => {
            if (answer.style.display === "block") {
                answer.style.display = "none";
                plus.style.transform = "rotate(0deg)";
            } else {
                answer.style.display = "block";
                plus.style.transform = "rotate(45deg)";
            }
        });
    });
});
