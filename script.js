


  
   /*  start searching button  */
const button = document.getElementById('interactiveButton');

button.addEventListener('mouseover', function() {
  button.style.backgroundColor = '#2ecc71'; // Change background color on hover
});

button.addEventListener('mouseout', function() {
  button.style.backgroundColor = '#3498db'; // Revert to original color
});




/*search bar */



const searchInput = document.getElementById('searchInput');

// Add interaction when typing in the search bar
searchInput.addEventListener('input', function() {
  if (searchInput.value !== '') {
    searchInput.style.backgroundColor = '#dcedc8'; // Change background when text is typed
  } else {
    searchInput.style.backgroundColor = '#e3f2fd'; // Revert to original color when empty
  }
});
