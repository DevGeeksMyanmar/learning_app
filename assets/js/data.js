let courses = [
    {'id': 1, 'name': 'Core Java', 'short_desc': 'Complete Java Full Course', 'price': 89, 'image': '../assets/pic/Java-BCG-Banner.png'},
    {'id': 2, 'name': 'Python Beginner', 'short_desc': 'Python Course for Beginner', 'price': 'Free', 'image': '../assets/pic/FREE-Python-Course-For-Beginners.png'},
    {'id': 3, 'name': 'JavaScript Course', 'short_desc': 'JavaScript Full Course', 'price': 69, 'image': '../assets/pic/JavaScript-BCG-Banner-icons.png'},
    {'id': 4, 'name': 'PHP Tutorial', 'short_desc': 'PHP programming Language', 'price': 89, 'image': '../assets/pic/skill-guide-php.png'},
    {'id': 5, 'name': 'Web Development', 'short_desc': 'Web Development Bootcamp', 'price': 199, 'image': '../assets/pic/BCG-Web-Development-NEW-Banner.png'},
];

let l_courses = [
    {'id': 1, 'name': 'Core Java', 'short_desc': 'Complete Java Full Course', 'price': 89, 'image': '../assets/pic/Java-BCG-Banner.png'},
    {'id': 2, 'name': 'Python Beginner', 'short_desc': 'Python Course for Beginner', 'price': 'Free', 'image': '../assets/pic/FREE-Python-Course-For-Beginners.png'},
    {'id': 3, 'name': 'JavaScript Course', 'short_desc': 'JavaScript Full Course', 'price': 69, 'image': '../assets/pic/JavaScript-BCG-Banner-icons.png'},
    {'id': 4, 'name': 'PHP Tutorial', 'short_desc': 'PHP programming Language', 'price': 89, 'image': '../assets/pic/skill-guide-php.png'},
    {'id': 5, 'name': 'Web Development', 'short_desc': 'Web Development Bootcamp', 'price': 199, 'image': '../assets/pic/BCG-Web-Development-NEW-Banner.png'},
];


const popular_course_wrapper = document.querySelector('.popular-course-wrapper');
const latest_course_wrapper = document.querySelector(".latest-course-wrapper");
const nav_links = document.querySelectorAll(".nav-link");




// uploaded popular course
const uplode_pp_course = (items) => {
    const pp_courses = items.map(e => {
        return `
            <a href="" class="p-card position-relative swiper-slide d-flex flex-column align-items-center justify-content-start p-2">
                <div class="card-img mb-2" 
                style="background: url(${e.image});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;"></div>

                <div class="w-100 card-content d-flex align-items-center justify-content-between">
                    <div class="content d-flex flex-column align-items-start justify-content-center">
                        <h5>${e.name}</h5>
                        <span>${e.short_desc}</span>
                    </div>
                    <div class="price">
                        <span>$${e.price}.0</span>
                    </div>
                </div>

                <!-- badge  -->
                <div class="badge"><img src="../assets/svg/star-solid.svg" alt=""></div>
            </a>
        `
    })
    .join(" ");
    popular_course_wrapper.innerHTML = pp_courses;
}
uplode_pp_course(courses);


// upload latest course
const upload_latest_course = (items) => {
    const upload_course = items.map(e => {
        return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <a href="" class="p-card position-relative swiper-slide d-flex flex-column align-items-center justify-content-start p-2">
                <div class="card-img mb-2" 
                    style="background: url(${e.image});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;"></div>
                <div class="w-100 card-content d-flex align-items-center justify-content-between">
                    <div class="content d-flex flex-column align-items-start justify-content-center">
                        <h5>${e.name}</h5>
                        <span>${e.short_desc}</span>
                    </div>
                <div class="price">
                    <span>$${e.price}.0</span>
                </div>
            </div>

            <!-- badge  -->
            <div class="latest-badge">Latest</div>
        </a>
    </div>
        `;
    })
    .join(" ");
    latest_course_wrapper.innerHTML = upload_course;
}
upload_latest_course(l_courses);

// navbar link
nav_links.forEach(e => {
    e.addEventListener("click", () => {
        // remove the active class
        nav_links.forEach(e2 => {
            e2.classList.remove("active");
        })
        // add the active class 
        e.classList.add('active');
    })
})