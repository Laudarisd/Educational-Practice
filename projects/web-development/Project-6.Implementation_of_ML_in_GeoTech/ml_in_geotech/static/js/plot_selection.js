document.addEventListener("DOMContentLoaded", function() {
  const plotButton = document.getElementById("plotButton");

  plotButton.addEventListener("click", function() {
    const xColumn = document.getElementById("x_column").value;
    const yColumn = document.getElementById("y_column").value;
    const plotType = document.getElementById("plot_type").value;

    // Send an AJAX request to the server to generate the plot
    const xhr = new XMLHttpRequest();
    // xhr.open("POST", "{% url 'data/plot.png' %}");
    xhr.open("POST", "/data/plot.png");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const plotUrl = xhr.responseText;

          const plotImage = document.createElement("img");
          plotImage.src = plotUrl;
          plotImage.alt = "Plot";

          const plotContainer = document.getElementById("csv_plot");
          plotContainer.innerHTML = "";
          plotContainer.appendChild(plotImage);
        } else {
          console.error("Error generating plot:", xhr.status);
        }
      }
    };

    xhr.send(JSON.stringify({ x_column: xColumn, y_column: yColumn, plot_type: plotType }));
  });
});

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
