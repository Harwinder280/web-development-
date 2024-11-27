// JavaScript for search bar functionality
function searchFunction(event) {
  event.preventDefault(); // Prevent the form from submitting
  const query = document.getElementById("search-query").value;
  if (query.trim() !== "") {
      alert(`You searched for: "${query}"`);
  } else {
      alert("Please enter a search query!");
  }
}
