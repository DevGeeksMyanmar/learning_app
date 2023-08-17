let category   = document.querySelectorAll(".category");
let content= document.querySelectorAll(".content");


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
