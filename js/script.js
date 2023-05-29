document.getElementById("showCommentsButton").addEventListener("click", function() {
    var commentsdiv = document.getElementById("commentsdiv");
    if (commentsdiv.style.display === "none") {
      commentsdiv.style.display = "block";
    } else {
      commentsdiv.style.display = "none";
    }
  });