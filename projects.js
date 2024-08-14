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
function renderHTML(data) {
  for (i = 0; i < data.length; i++) {
    const htmlString =
      "<p>" +
      data[i].title +
      " <br> " +
      data[i].description +
      " <br> " +
      data[i].technologies +
      "</p>";
    animal.insertAdjacentHTML("beforeend", htmlString);
  }
}
