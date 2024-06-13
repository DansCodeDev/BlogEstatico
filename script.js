document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            title: "El Rey Olvidado",
            excerpt: "Cuenta la leyenda, un verdadero rey, perdido entre la indiscrecion de su familia",
            image: "images/post1.png",
            link: "posts/post1.html"
        },
        {
            title: "Título del Post 2",
            excerpt: "Resumen del post 2...",
            image: "images/post2.jpeg",
            link: "posts/post2.html"
        },
        {
            title: "Título del Post 3",
            excerpt: "Resumen del post 3...",
            image: "images/post3.jpeg",
            link: "posts/post3.html"
        }
        // Agrega más posts según sea necesario
    ];

    const postsPerPage = 3;
    let currentPage = 1;

    function displayPosts(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const paginatedPosts = posts.slice(start, end);

        const postsContainer = document.getElementById("posts");
        postsContainer.innerHTML = "";

        paginatedPosts.forEach(post => {
            const postElement = document.createElement("article");

            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="content">
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.link}">Leer más</a>
                </div>
            `;

            postsContainer.appendChild(postElement);
        });
    }

    function setupPagination() {
        const totalPages = Math.ceil(posts.length / postsPerPage);
        const paginationContainer = document.getElementById("pagination");

        paginationContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.href = "#";
            pageLink.innerText = i;
            pageLink.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                displayPosts(currentPage);
            });

            paginationContainer.appendChild(pageLink);
        }
    }

    displayPosts(currentPage);
    setupPagination();
});


document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function toggleFooter() {
        if (main.offsetHeight < window.innerHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    toggleFooter(); // Llamar a la función al cargar la página
    window.addEventListener('resize', toggleFooter); // Llamar a la función cuando se redimensiona la ventana
});
