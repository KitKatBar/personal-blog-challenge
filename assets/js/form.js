const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');
const error = document.getElementById('error');

let blogs = [];

function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function formSubmit(event) {
    event.preventDefault();

    if (!username.value || !title.value || !content.value) {
        error.textContent = 'Please fill out the form!';

        return;
    }

    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs === null) {
        blogs = [];
    }

    const blog = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));

    console.log(blogs);

    redirect();
}

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }
}

function redirect() {
    location.href = "./blog.html";
}

submit.addEventListener('click', formSubmit);

init();
