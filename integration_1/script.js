document.addEventListener('DOMContentLoaded', () => {
    const notionToken = 'secret_RoCPLL1Su2JXGIbmlnXBg5txPd6terYDcyINDWxRb6G';  // Replace with your Notion API token
    const databaseId = '9ffe9ae64fc54b12af656db06f503035?v';  // Replace with your Notion Database ID
    const contentDiv = document.getElementById('content');
  
    // Fetch data from Notion
    async function fetchData() {
      try {
        const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${notionToken}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    // Display data on the webpage
    function displayData(items) {
      contentDiv.innerHTML = '';
      items.forEach(item => {
        const title = item.properties.Name.title[0]?.text.content || 'No title';
        const description = item.properties.Description.rich_text[0]?.text.content || 'No description';
        const content = document.createElement('div');
        content.classList.add('col-md-4', 'mb-4');
        content.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
            </div>
          </div>
        `;
        contentDiv.appendChild(content);
      });
    }
  
    fetchData();
  });
  