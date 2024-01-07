function submitFeedback() {
  var ratings = document.getElementsByName("rating");
  var selectedRating;
  for (var rating of ratings) {
    if (rating.checked) {
      selectedRating = rating.value;
      break;
    }
  }
  alert("You have submitted a rating of: " + selectedRating);
}
