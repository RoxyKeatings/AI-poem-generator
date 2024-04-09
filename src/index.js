function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Nature's first green is gold",
    autoStart: true,
    pauseFor: 30000,
    delay: 30,
    cursor: "🖋️",
  });
}
let poemFormElement = document.querySelector("#poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
