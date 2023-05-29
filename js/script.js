document.getElementById("showCommentsButton").addEventListener("click", function() {
    var commentsdiv = document.getElementById("commentsdiv");
    if (commentsdiv.style.display === "none") {
      commentsdiv.style.display = "block";
    } else {
      commentsdiv.style.display = "none";
    }
  });

  var likeButton = document.getElementById("likeButton");
var isClicked = false;

likeButton.addEventListener("click", function() {
  if (isClicked) {
    likeButton.classList.remove("btn-danger");
    likeButton.classList.add("btn-outline-danger");
    isClicked = false;
  } else {
    likeButton.classList.remove("btn-outline-danger");
    likeButton.classList.add("btn-danger");
    isClicked = true;
  }
});
  
  