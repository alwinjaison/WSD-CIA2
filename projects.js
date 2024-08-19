const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const xreq = new XMLHttpRequest();
  xreq.open("GET", "https://alwinjaison.github.io/WSD-CIA2/projects.json");

  xreq.onload = () => {
    if (xreq.status >= 200 && xreq.status < 300) {
      const xres = JSON.parse(xreq.responseText);
      renderHTML(xres);
    } else {
      console.error("Request failed with status: " + xreq.status);
    }
  };

  xreq.onerror = () => {
    console.error("Request failed due to a network error.");
  };

  xreq.send();
});

function renderHTML(data) {
  output.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const htmlString = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <p class="card-text">${data[i].description}</p>
          <p class="card-text"><small class="text-muted">Technologies: ${data[i].technologies}</small></p>
        </div>
      </div>
    `;
    output.insertAdjacentHTML("beforeend", htmlString);
  }
}
