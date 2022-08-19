
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open");
});

// smooth scrooling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link){
    link.addEventListener("click", function(e){
        e.preventDefault();

        const href = link.getAttribute("href");

        // scroll to back top
        if(href === "#") window.scrollTo({
            top : 0,
            behavior : "smooth",
        });


        // scroll to other links

        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior : "smooth"});
        }

        // close mobile navigation

        if(link.classList.contains("main-nav-links"))
        headerEl.classList.toggle("nav-open");

    });
});

// sticky mobile navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries){
    const ent = entries[0];

    if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true){
        document.body.classList.remove("sticky");
    }
},

  {
    //   In the viewport

    root: null,
    threshold: 0,
    rootMargin: "-80px",
}
);

obs.observe(sectionHeroEl);