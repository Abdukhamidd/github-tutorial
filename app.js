document.getElementById("myForm").addEventListener("submit", saveForm);

function saveForm(e) {
  e.preventDefault();
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteUrl").value;
  const bookmark = {
    name: siteName,
    url: siteUrl,
  };
  if (localStorage.getItem("bookmarks") === null) {
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}


function fetchLoacalStroage() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarksResults = document.getElementById("bookmarksResults");

  bookmarks.forEach((bookmark) => {
    bookmarksResults.innerHTML += `
    <div class=well>
    <h3>${bookmark.name}</h3>
    <a class="btn btn-default" href="${bookmark.url}">Visit</a>
    <a class="delete btn btn-danger">delete</a>
    </div>
    `;
  });
}
