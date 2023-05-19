function NewsCount() {
    return Object.keys(localStorage).length;
}

function NewsSave() {
    // Grabbing all values from the news input form
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var bodytextsample = document.getElementById('bodytext').value.substring(0, 50) + "...";

    // Saving to local storage
    var key = NewsCount() + 1;
    localStorage.setItem(key, JSON.stringify({ title: title, author: author, body: bodytextsample }));
}

function loadNewsEntries() {
    const container = document.getElementById('allnews');

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var newsItem = JSON.parse(localStorage.getItem(key));

        const section = document.createElement('div');
        section.setAttribute('class', 'newsitem');
        section.innerHTML = `<h3>${newsItem.title}</h3><br><p>${newsItem.author}<br>${newsItem.body}</p>`;
        container.appendChild(section);
    }
}

function initialize() {
    var saveButton = document.querySelector("#savecreate");
    saveButton.addEventListener("click", NewsSave);
    loadNewsEntries();
}

window.addEventListener("load", initialize);