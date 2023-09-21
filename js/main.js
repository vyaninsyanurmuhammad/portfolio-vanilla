console.clear();
const featuresEl = document.querySelector(".container");

featuresEl.addEventListener("pointermove", (ev) => {

    const rect = featuresEl.getBoundingClientRect();
    featuresEl.style.setProperty("--x", ev.clientX - rect.left);
    featuresEl.style.setProperty("--y", ev.clientY - rect.top);

});