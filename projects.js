const btn = document.getElementById("btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const xreq = new XMLHttpRequest();
  xreq.open("GET", "https://alwinjaison.github.io/WSD-CIA2/projects.json");
  xreq.onload = () => {
    const xres = JSON.parse(xreq.responseText);
    renderHTML(xres);
  };
  xreq.send();
});
function renderHTML(projects) {
  for (i = 0; i < projects.length; i++) {
    const htmlString =
      "<p>" +
      projects[i].title +
      " <br> " +
      projects[i].description +
      " <br> " +
      projects[i].technologies +
      "</p>";
    animal.insertAdjacentHTML("beforeend", htmlString);
  }
}
