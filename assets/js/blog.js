// Targetting different elements in the page
const mainEl = document.querySelector('main');
const back = document.querySelector('#back');
const blogList = document.querySelector('#blog-list');

// Declare an empty blog array
let blogs = [];

// Initialize function
function init() {
    // Check if there are already pre-existing blogs in local storage
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    // If the key with the blogs already exists, set blogs to what is stored so it doesn't overwrite
    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }

    // Do an empty display
    else {
        emptyDisplay();
        return;
    }

    renderBlogs();
}

// Empty display text for when there are no blogs
function emptyDisplay() {
    const tag = document.createElement('h2');
    tag.textContent = "No blogs to display ...\n\nHit the back button and enter a blog to start your journey!";
    mainEl.appendChild(tag);
}

// Load all the blogs into the page
function renderBlogs() {
    // Iterate over each blog in the array
    for (let i = 0; i < blogs.length; i++) {
        // Grab the current blog at the index
        const blog = blogs[i];

        // Elements for arranging our blogs
        const li = document.createElement('li');
        const article = document.createElement('article');

        // Elements for each value and arranging them in order of how they are displayed
        const title = document.createElement('h2');
        title.textContent = blog.title;

        const content = document.createElement('p');
        content.textContent = blog.content;

        const username = document.createElement('h3');
        username.textContent = `- Posted by ${blog.username}`;
    
        const button = document.createElement('button');
        button.textContent = 'X';

        // Append it to the article in order of how they are displayed on the page
        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(username);
        article.appendChild(button);

        // Append the blog to a list
        li.appendChild(article);

        // Add the class which formats how the blog is displayed
        li.classList.add('blog-container');

        // Set the key for the blog to be used for deletion later
        li.setAttribute('data-index', i);

        // Append the blog to the master list
        blogList.appendChild(li);
    }
}

function deleteBlog(event) {
    // Detects which X button was clicked on which blog
    const blog = event.target;

    if(blog.matches('button') === true) {
        // Checks the index of the blog in which the X was clicked
        const index = blog.parentElement.parentElement.getAttribute('data-index');

        // If there is only one blog, then remove the key and reload the page to show the empty display
        if (blogs.length === 1) {
            blogs.splice(index, 1);
            localStorage.removeItem('blogs');

            location.reload();
        }

        // Else remove the blog at the index, update the local storage key and reload the page
        else {
            blogs.splice(index, 1);
            localStorage.setItem('blogs', JSON.stringify(blogs));

            location.reload();
        }
    }
}

// Redirect if back button is clicked
function redirect() {
    location.href = "./index.html";
}

// Back button is clicked
back.addEventListener('click', redirect);
// Delete button is clicked
blogList.addEventListener('click', deleteBlog);

// Initialize
init();
