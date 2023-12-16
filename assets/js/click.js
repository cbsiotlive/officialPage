// Open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close the modal if the overlay is clicked
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



function openPopup() {
    var popup = document.getElementById('popupDiv');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popupDiv');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
