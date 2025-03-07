document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // News rotation
    const newsItems = [
        {
            title: "Succès retentissant au Hackathon National 2023",
            content: "Les étudiants de l'École 241 ont brillé lors du dernier hackathon national, remportant les trois premières places avec leurs projets innovants.",
            image: "./assets/hakathon.jpg"
        },
        {
            title: "Nouveaux partenariats avec des entreprises tech",
            content: "L'École 241 a signé des accords avec 5 nouvelles entreprises tech gabonaises pour offrir des stages et des opportunités d'emploi à nos diplômés.",
            image: "./assets/partenaire.jpg"
        },
        {
            title: "Lancement du programme Intelligence Artificielle",
            content: "En réponse à la demande croissante, l'École 241 lance un nouveau programme de formation en Intelligence Artificielle et Machine Learning.",
            image: "./assets/2017-09-29-09-52-20.jpg"
        },
        {
            title: "Journée portes ouvertes virtuelle",
            content: "Découvrez l'École 241 depuis chez vous ! Participez à notre journée portes ouvertes virtuelle et explorez nos programmes de formation.",
            image: "./assets/out-0.png"
        },
        {
            title: "Conférence sur la transformation digitale au Gabon",
            content: "L'École 241 organise une conférence sur les enjeux et opportunités de la transformation digitale au Gabon, avec des intervenants de renom.",
            image: "./assets/conference.jpg"
        }
    ];

    function updateNews() {
        const newsContainer = document.getElementById('news-container');
        const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
        
        newsContainer.style.opacity = 0;
        
        setTimeout(() => {
            newsContainer.innerHTML = `
                <div class="news-image">
                    <img src="${randomNews.image}" alt="${randomNews.title}">
                </div>
                <div class="news-content">
                    <h2>${randomNews.title}</h2>
                    <p>${randomNews.content}</p>
                    <a href="#" class="cta-button">En savoir plus</a>
                </div>
            `;
            newsContainer.style.opacity = 1;
        }, 500);
    }

    // Initial news update
    updateNews();

    // Update news every 05 seconds
    setInterval(updateNews, 5000);
});