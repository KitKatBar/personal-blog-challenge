const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

let blogs = [];

function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }
}

submit.addEventListener('click', function() {
    const blog = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));

    console.log(blogs);
});

init();
