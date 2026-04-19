// Trailer modal open (event delegation)
document.addEventListener("click", function(e) {
    const card = e.target.closest(".card");
    if (card && card.hasAttribute("data-trailer")) {
        const link = card.getAttribute("data-trailer");
        document.getElementById("trailerModal").style.display = "block";
        document.getElementById("trailerFrame").src = link;
    }
});

// Close trailer
function closeTrailer() {
    document.getElementById("trailerModal").style.display = "none";
    document.getElementById("trailerFrame").src = "";
}

// Search filter
document.getElementById("searchBar").addEventListener("keyup", function () {
    let input = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let titleElement = card.querySelector("h2");
        if (!titleElement) return; // skip if no title
        let title = titleElement.innerText.toLowerCase();
        card.style.display = title.includes(input) ? "" : "none";
    });
});
