// Targetting each of the elements in the form
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');
const error = document.getElementById('error');

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
}

// Stores the blogs into the key
function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Form submission when button is clicked
function formSubmit(event) {
    // Prevent page reloading if form is incorrectly filled out
    event.preventDefault();

    // Checks if the form is filled out and displays a text error if it is not
    if (!username.value || !title.value || !content.value) {
        error.textContent = 'Please fill out the form!';

        // Timer for making the error message disappear
        setTimeout(function () {
            error.textContent = '\u00a0';
        }, 2000);

        return;
    }

    // Blog object
    const blog = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    // Push the blog into the array
    blogs.push(blog);
    
    storeBlogs();

    redirect();
}

// Redirect if form is filled out correctly
function redirect() {
    location.href = "./blog.html";
}

// Submit button is clicked
submit.addEventListener('click', formSubmit);

// Initialize
init();
