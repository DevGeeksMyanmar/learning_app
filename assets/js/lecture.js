let category   = document.querySelectorAll(".category");
let content= document.querySelectorAll(".content");
const nav_links = document.querySelectorAll(".nav-link");
const backBtn = document.querySelector(".btn-back");

// this is week nav link
category.forEach((c, index)=>{
    c.addEventListener("click",()=>{
        content.forEach((content)=>{
            content.classList.remove("active");
        });
        category.forEach((category)=>{
            category.classList.remove("active");
           
        });
        content[index].classList.add("active");
        category[index].classList.add("active");
    });
});

// aside nav links 
nav_links.forEach(e => {
    e.addEventListener("click", () => {
        // remove the active class
        nav_links.forEach(e2 => {
            e2.classList.remove("active");
        })
        e.classList.add('active');
    })
})

// function of back btn
backBtn.addEventListener("click", () => {
    window.location = "./dashboard.html";
})
