document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    if (query.length === 0) {
      searchResults.innerHTML = '';
      return;
    }

    fetch('/search.json')
      .then(response => response.json())
      .then(pages => {
        searchResults.innerHTML = '';
        pages.forEach(page => {
          if (page.title.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.url;
            a.textContent = page.title;
            li.appendChild(a);
            searchResults.appendChild(li);
          }
        });
      });
  });
});
