document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: 'Introduction to Ethical Hacking',
            content: 'Learn the basics of ethical hacking and its importance in today\'s digital world.'
        },
        {
            title: 'Top 10 Cybersecurity Tips',
            content: 'Discover the top 10 tips to keep your online presence secure.'
        }
    ];

    const blogContainer = document.querySelector('.blog-posts');
    const searchInput = document.getElementById('search');

    function renderPosts(posts) {
        blogContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            blogContainer.appendChild(postElement);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
        renderPosts(filteredPosts);
    });

    renderPosts(blogPosts);
});
