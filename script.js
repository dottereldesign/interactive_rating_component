function submitFeedback() {
  var ratings = document.getElementsByName("rating");
  var selectedRating;
  for (var rating of ratings) {
    if (rating.checked) {
      selectedRating = rating.value;
      break;
    }
  }
  if (selectedRating) {
    // Update the content of the selectedRating span
    document.getElementById(
      "selectedRating"
    ).textContent = `You selected ${selectedRating} out of 5`;

    // Hide the survey card and show the feedback card
    document.getElementById("surveyCard").style.display = "none";
    document.getElementById("feedbackCard").style.display = "flex";
  } else {
    alert("Please select a rating before submitting.");
  }
}
