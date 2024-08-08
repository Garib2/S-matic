document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  fetch('{{ "/search.json" | relative_url }}')
    .then(response => response.json())
    .then(pages => {
      searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.length === 0) {
          return;
        }

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
