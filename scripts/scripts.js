// var f = ["🌑", "🌒", "🌓", "🌔", "🌝", "🌖", "🌗", "🌘"];

// function loop() {
//   location.hash = f[Math.floor((Date.now() / 100) % f.length)];

//   setTimeout(loop, 50);
// }

// loop();
if (document.getElementById("submit")) {
  var submit = document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    var artistName = document.getElementById("artist").value;
    var songTitle = document.getElementById("song").value;
    var url = "https://api.lyrics.ovh/v1";
    var newUrl = url + "/" + artistName + "/" + songTitle;
    var results = document.getElementById("results");
    var hero2 = document.getElementById("hero-2");
    fetch(newUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //   made it to the actual data
        var lyrics = data.lyrics.replace(/\n/g, "<br />");
        results.innerHTML = "<h2>Results:</h2>" + "<p>" + lyrics + "</p>";
        hero2.innerHTML;
        window.scrollBy(0, 700);
        console.log(data);
      });
  });
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
