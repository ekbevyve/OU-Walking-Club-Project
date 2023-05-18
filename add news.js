/**
 * Function to save news entries and add them to the page
 */
function NewsSave() {
    //grabbing all values from the news input form
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var bodytextsample = document.getElementById('bodytext').value.substring(0,50)+"...";

    //appending it to page
    const container = document.getElementById('allnews');
    const section = document.createElement('div');
    section.setAttribute('class','newsitem');
    section.innerHTML = ` <h3 class="news"> ${title} </h3> <br> <p class="news"> ${author} \n ${bodytextsample} </p>`;
    container.appendChild(section)

    //saving to local storage
    var newsEntries = localStorage.getItem('newsEntries');
    if (newsEntries) {
        newsEntries = JSON.parse(newsEntries);
    } else {
        newsEntries = [];
    }
    newsEntries.push({ title: title, author: author, body: bodytextsample });
    localStorage.setItem('newsEntries', JSON.stringify(newsEntries));

}

/**
 * Function to load news entries from local storage
 */
function loadNewsEntries() {
    const container = document.getElementById('allnews');
    var newsEntries = localStorage.getItem('newsEntries');
    if (newsEntries) {
        newsEntries = JSON.parse(newsEntries);
        for (var i = 0; i < newsEntries.length; i++) {
            const container = document.getElementById('allnews');
            const section = document.createElement('div');
            section.setAttribute('class','newsitem');
            section.innerHTML = ` <h3> ${newsEntries[i].title} </h3> <br> <p> ${newsEntries[i].author} \n ${newsEntries[i].body} </p>`;
            container.appendChild(section)
        }
    }
}


/**
 * Function to connect event listeners
 */
function initialize() {
    var saveButton = document.querySelector("#savecreate");
    saveButton.addEventListener("click", NewsSave);
    loadNewsEntries();
}

window.addEventListener("load", initialize)