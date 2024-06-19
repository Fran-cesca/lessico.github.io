document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll("#sidebar a");
    const sidebarHeader = document.querySelector("#sidebar .sidebar-header");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetClass = this.getAttribute("href").substring(1); // Remove the '#' from href
            highlightAndScrollTo(targetClass);
        });
    });

    // Event listener for scrolling to top on sidebar header click
    sidebarHeader.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    function highlightAndScrollTo(targetClass) {
        // Remove highlight from all paragraphs
        const allParagraphs = document.querySelectorAll("p");
        allParagraphs.forEach(paragraph => {
            paragraph.classList.remove("highlighted");
        });

        // Highlight the targeted paragraph
        const targetParagraph = document.querySelector("." + targetClass);
        if (targetParagraph) {
            targetParagraph.classList.add("highlighted");

            // Scroll to the targeted paragraph
            targetParagraph.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});
