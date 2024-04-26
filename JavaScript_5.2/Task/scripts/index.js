document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}
