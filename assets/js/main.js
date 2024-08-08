document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let pages = [];

  fetch('{{ "/S-matic/search.json" | relative_url }}')
    .then(response => response.json())
    .then(data => {
      pages = data;
    });

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length === 0) {
      return;
    }

    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));

    filteredPages.forEach(page => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = page.url;
      a.textContent = page.title;
      li.appendChild(a);
      searchResults.appendChild(li);
    });

    if (filteredPages.length === 0) {
      const noResults = document.createElement('li');
      noResults.textContent = 'No results found';
      searchResults.appendChild(noResults);
    }
  });
});
