$(document).ready(function(){
    // nav-link active js 
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("nav-active");
        $(this).addClass("nav-active");
    })

    // for nav bar hamburger 
    $('.btn-open-menu').click(function(){
        $("nav ul").css("right","0px");
    })

    $('.btn-close-menu').click(function(){
        $("nav ul").css("right","-200px");
    })

    //show popular courses 
    courses.forEach(function(c){
    $(".popular-course-wrapper").append(`
    <a href="" class="p-card position-relative swiper-slide d-flex flex-column align-items-center justify-content-start p-2">
        <div class="popular-img-container">
            <div class="card-img mb-2" 
            style="background: url(${c.image});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;"></div>
        </div>

        <div class="w-100 card-content d-flex align-items-center justify-content-between">
            <div class="content d-flex flex-column align-items-start justify-content-center">
                <h5>${c.name}</h5>
                <span>${c.short_desc}</span>
            </div>
            <div class="price">
                <span>$${c.price}</span>
            </div>
        </div>

        
    </a>
`);
    })

})


let courses = [
    {
    'id': 1,
    'name': 'Core Java',
    'short_desc': 'Complete Java Full Course',
    'price': 89.0,
    'image': './assets/pic/Java-BCG-Banner.png'
    },
    {
    'id': 2,
    'name': 'Python Beginner',
    'short_desc': 'Python Course for Beginner',
    'price': 'Free',
    'image': './assets/pic/FREE-Python-Course-For-Beginners.png'
    },
    {
    'id': 3,
    'name': 'JavaScript Course',
    'short_desc': 'JavaScript Full Course',
    'price': 69.0,
    'image': './assets/pic/JavaScript-BCG-Banner-icons.png'
    },
    {
    'id': 4,
    'name': 'PHP Tutorial',
    'short_desc': 'PHP programming Language',
    'price': 89.0,
    'image': './assets/pic/skill-guide-php.png'
    },
    {
    'id': 5,
    'name': 'Web Development',
    'short_desc': 'Web Development Bootcamp',
    'price': 199.0,
    'image': './assets/pic/BCG-Web-Development-NEW-Banner.png'
    },
];

