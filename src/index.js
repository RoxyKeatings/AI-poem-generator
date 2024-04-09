function displayPoem(response) {
  console.log("poem generated");
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
  let prompt = `Generate an eloquent poem about ${inputInstructionsElement.value}`;
  let context =
    " You are a intellectual poet, please provide 4 lines of context, separate each line of the poem onto its own individual line in basic HTML format, write the poem based off the users instructions, write clearly and eloquently, and end each poem with - AI Anonymous Poet Society";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem");
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
