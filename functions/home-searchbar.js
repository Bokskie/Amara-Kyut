document.addEventListener('DOMContentLoaded', function() {


    function filterMenuItems(query) {
        var menuItems = document.querySelectorAll('.menu-content-box');
        
        menuItems.forEach(function(item) {
            var headerName = item.querySelector('.menu-content-header-name').textContent.toLowerCase();
            if (headerName.includes(query.toLowerCase())) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    }


    var searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        var query = this.value;
        filterMenuItems(query);
    });
});
