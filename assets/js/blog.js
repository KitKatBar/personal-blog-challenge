const blogList = document.querySelector('#blog-list');

let blogs = [];

function renderBlogs() {
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];

        // const li = document.querySelector('#single-blog');
        // const username = document.querySelector('#blog-username');
        // const title = document.querySelector('#blog-title');
        // const content = document.querySelector('#blog-content');

        // username.textContent = blog.username;
        // title.textContent = blog.title;
        // content.textContent = blog.content;

        // li.appendChild(username);
        // li.appendChild(title);
        // li.appendChild(content);

        const li = document.createElement('li');
        const username = document.createElement('h2');
        const title = document.createElement('h3');
        const content = document.createElement('p');

        username.textContent = blog.username;
        title.textContent = blog.title;
        content.textContent = blog.content;

        li.appendChild(username);
        li.appendChild(title);
        li.appendChild(content);
        
        //const li = document.createElement('li');
        //li.textContent = blog;
        //li.setAttribute('data-index', i);

        //const button = document.createElement('button');
        //button.textContent = 'Complete ✔️';

        //li.appendChild(button);
        blogList.appendChild(li);
    }
}

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }

    renderBlogs();
}

init();
