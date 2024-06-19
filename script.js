document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#sidebar a");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    let currentParagraphIndex = 0;
    let targetElements = [];

    function highlightParagraph(index) {
        // Remove highlight from all paragraphs
        document.querySelectorAll("main p").forEach(p => p.classList.remove("highlighted"));

        if (targetElements.length > 0 && index >= 0 && index < targetElements.length) {
            const targetElement = targetElements[index];
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
            targetElement.classList.add("highlighted");
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Get the target class from the link href
            const targetClass = link.getAttribute("href").substring(1);

            // Get all elements with the target class
            targetElements = document.querySelectorAll(`.${targetClass}`);
            currentParagraphIndex = 0;

            if (targetElements.length > 0) {
                highlightParagraph(currentParagraphIndex);
                document.getElementById("navigation-buttons").classList.remove("d-none");
            }
        });
    });

    document.getElementById("next-btn").addEventListener("click", function() {
        if (currentParagraphIndex < targetElements.length - 1) {
            currentParagraphIndex++;
            highlightParagraph(currentParagraphIndex);
        }
    });

    document.getElementById("prev-btn").addEventListener("click", function() {
        if (currentParagraphIndex > 0) {
            currentParagraphIndex--;
            highlightParagraph(currentParagraphIndex);
        }
    });
});
