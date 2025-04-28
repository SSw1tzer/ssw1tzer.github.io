function disForm () {
    document.getElementById("volunteerForm").style.display = "block";
}

function toggleTheme() {
    // Get the current theme from the document's root element
    const currentTheme = document.documentElement.getAttribute('data-theme');
  
    // Toggle between light and dark
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }