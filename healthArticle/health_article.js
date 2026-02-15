// Step 3: Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define JSON file URL
var url = './health_article.json';

// Step 4: Prepare GET request (asynchronous)
xhr.open('GET', url, true);

// Step 5: Set expected response type
xhr.responseType = 'json';

// Step 6 & 7: Define what happens when data loads
xhr.onload = function () {

    // Get articles array from JSON
    var articles = xhr.response.articles;

    // Get div where articles will be displayed
    var articlesDiv = document.getElementById('articles');

    // Loop through each article
    articles.forEach(function(article) {

        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');

        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');

        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
};

// Step 8: Send the request
xhr.send();
