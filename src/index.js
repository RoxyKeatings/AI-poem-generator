function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "🖋️",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let inputInstructionsElement = document.querySelector("#input-instructions");
  let apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
  let prompt = `User's instructions : Generate an eloquent poem about ${inputInstructionsElement.value}`;
  let context =
    " You are a intellectual poet, please provide a poem of only four lines of context, and be sure to write the poem based off the users instructions. Provide the layout of the poem so that it displays each sentence of the poem onto a seperate line using basic HTML format, you must write clearly and eloquently. At the end of the poem on a seperate line add <strong> - AI Anonymous Poet Society. All text should be displayed in Anta font";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating your poem about ${inputInstructionsElement.value} ...........</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
