function toggleImage(id) {
    const chart = document.getElementById(id);
    
    // This checks if the image is currently showing
    if (chart.style.display === "block") {
        chart.style.display = "none";
    } else {
        // Optional: Hide all other images first if you only want one visible at a time
        hideAllImages(); 
        chart.style.display = "block";
    }
}

function hideAllImages() {
    const images = document.querySelectorAll('.hidden-chart');
    images.forEach(img => img.style.display = 'none');
}
