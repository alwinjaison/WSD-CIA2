const btn = document.getElementById("btn");
const animal = document.getElementById("output");
btn.addEventListener("click", () => {
  const xreq = new XMLHttpRequest();
  xreq.open("GET", "");
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
