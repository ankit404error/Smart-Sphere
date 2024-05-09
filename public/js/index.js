//Searching
function search() {
    let filter = document.getElementById('searchInput').value.toUpperCase();
    let items = document.querySelectorAll('.product-categories');
    for (let i = 0; i < items.length; i++) {
        let h3 = items[i].getElementsByTagName('h3')[0];
        let value = h3.innerHTML || h3.innerText || h3.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    search();
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});

