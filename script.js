const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");

menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    menuLinks.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (
        menuLinks.classList.contains("active") &&
        !menuLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        menuLinks.classList.remove("active");
    }
});

const shareButton = document.querySelector("#shareButton");
const shareMessage = document.querySelector("#shareMessage");

if (shareButton) {

    shareButton.addEventListener("click", async () => {

        const shareData = {
            title: document.title,
            text: document.querySelector('meta[property="og:description"]')?.content || "",
            url: window.location.href
        };

        try {

            if (navigator.share) {

                await navigator.share(shareData);

            } else {

                await navigator.clipboard.writeText(window.location.href);

                shareMessage.textContent = "link copiado ✦";

                setTimeout(() => {
                    shareMessage.textContent = "";
                }, 2500);

            }

        } catch (error) {

            if (error.name !== "AbortError") {

                await navigator.clipboard.writeText(window.location.href);

                shareMessage.textContent = "link copiado ✦";

                setTimeout(() => {
                    shareMessage.textContent = "";
                }, 2500);

            }

        }

    });

}