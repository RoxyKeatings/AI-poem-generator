function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["this is where the poems will be seen by users "],
    autoStart: true,
    pauseFor: 30000,
    delay: 30,
    cursor: "🖋️",
  });
}
let poemFormElement = document.querySelector("#poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
