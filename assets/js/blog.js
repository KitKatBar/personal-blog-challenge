const mainEl = document.querySelector('main');
const back = document.querySelector('#back');
const blogList = document.querySelector('#blog-list');

let blogs = [];

function renderBlogs() {
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];

        const li = document.createElement('li');
        const article = document.createElement('article');
        const username = document.createElement('h3');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const button = document.createElement('button');

        username.textContent = `- Posted by ${blog.username}`;
        title.textContent = blog.title;
        content.textContent = blog.content;
        button.textContent = 'X';

        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(username);
        article.appendChild(button);
        li.appendChild(article);

        li.classList.add('blog-container');
        li.setAttribute('data-index', i);
        blogList.appendChild(li);
    }
}

function deleteBlog(event) {
    const blog = event.target;

    if(blog.matches('button') === true) {
        const index = blog.parentElement.parentElement.getAttribute('data-index');

        if (blogs.length === 1) {
            blogs.splice(index, 1);
            localStorage.removeItem('blogs');

            location.reload();
        }

        else {
            blogs.splice(index, 1);
            localStorage.setItem('blogs', JSON.stringify(blogs));

            location.reload();
        }
    }
}

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }

    else {
        emptyDisplay();
        return;
    }

    renderBlogs();
}

function emptyDisplay() {
    const tag = document.createElement('h2');
    tag.textContent = "No blogs to display ...\n\nHit the back button and enter a blog to start your journey!";
    mainEl.appendChild(tag);
}

function redirect() {
    location.href = "./index.html";
}

back.addEventListener('click', redirect);
blogList.addEventListener('click', deleteBlog);

init();
