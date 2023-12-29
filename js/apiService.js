const category = [
  "general",
  "business",
  "entertainment",
  "health",
  "sports",
  "technology",
  "science",
];
let str = ``;

const fetchNews = async () => {
  for (var i = 0; i < category.length; i++) {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "pageSize=10&" +
      "category=" +
      category[i] +
      "&apiKey=43a9cf2287f74a3c8b922c7b2830174f";
    var req = new Request(url);
    //   console.log("fetching news.....");
    let a = await fetch(req);
    let response = await a.json();
    console.log(response);
    for (var item of response.articles) {
      const apiPublishedAt = item.publishedAt;

      // Parse the API timestamp
      const parsedDate = new Date(apiPublishedAt);

      // Format the date as "YYYY-MM-DD" (e.g., "2023-12-27")
      const formattedDate = parsedDate.toISOString().split("T")[0];
      str =
        str +
        `<div class="post-box ${category[i]}">
<img src="${item.urlToImage}" alt="" class="post-img" />
<h2 class="category">${category[i]}</h2>
<a href="${item.url}" target="_blank" class="post-title">${item.title}</a>
<span class="post-date">${formattedDate}</span>
<p class="post-description">${item.description}</p>
<div class="profile">
  <span class="profile-name"> ${item.author} </span>
</div>
</div>`;
    }

    document.querySelector(".post").innerHTML = str;
  }
};
fetchNews();
search.addEventListener("click", (e) => {
  e.preventDefault();
  let query = searchInput.value;
  searchNews(query);
});
