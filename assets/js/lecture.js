let lecture = [
    // Java
    {
        "course_id": 1,
        "lectures": [
            //week 1
            [
                { // video 1
                    "title": "Introduction to Java Programming",
                    "link": `<iframe width="560" height="315" src="https://www.youtube.com/embed/Qgl81fPcLc8?si=yanIQxXxy_dyMUIf?end=93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                    "minutes": "2 min"
                },
                { // video 2
                    "title": "JDK & Installing JDK",
                    "link": `
                    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/Qgl81fPcLc8?si=yanIQxXxy_dyMUIf?start=158&end=404" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    `,
                    "minutes": "4 min"
                },
                { // video 3
                    "title": "IntelliJ IDEA & Configure it",
                    "link": `
                    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/Qgl81fPcLc8?si=yanIQxXxy_dyMUIf?start=629&end=769" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    `,
                    "minutes": "3 min"
                },
                { // video 4
                    "title": "Understanding Java, Compile and Run it",
                    "link": `
                    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/Qgl81fPcLc8?si=yanIQxXxy_dyMUIf?start=1180&end=2055" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    `,
                    "minutes": "14 min"
                }
            ],
            //week 2
            [
                { // video 1
                    "title": "Java Language Fundamentals - Types",
                    "link": `
                    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/Qgl81fPcLc8?si=yanIQxXxy_dyMUIf?start=2089&end=2755" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    `,
                    "minutes": "11 min"
                },
                { // video 2
                    "title": "Primitive Data types",
                    "link": ``,
                    "minutes": ""
                },
                { // video 3
                    "title": "Reference Data types",
                    "link": ``,
                    "minutes": ""
                },
                { // video 4
                    "title": "Different Between Primitive and References Data types",
                    "link": ``,
                    "minutes": ""
                },
            ],
            //week 3
            [
                { // video 1
                    "title": "Java Language Fundamental - Flows of Control",
                    "link": ``,
                    "minutes": ""
                },
                { // video 2
                    "title": "Arithmetic Operations",
                    "link": ``,
                    "minutes": ""
                },
                { // video 3
                    "title": "Comparison Operators",
                    "link": ``,
                    "minutes": ""
                },
                { // video 4
                    "title": "Logical Operators",
                    "link": ``,
                    "minutes": ""
                },
                { // video 5
                    "title": "If Statement",
                    "link": ``,
                    "minutes": ""
                },
                { // video 6
                    "title": "Ternary Operator",
                    "link": ``,
                    "minutes": ""
                },
                { // video 7
                    "title": "Switch Statement",
                    "link": ``,
                    "minutes": ""
                },
                { // video 8
                    "title": "Break and Continue",
                    "link": ``,
                    "minutes": ""
                },
                { // video 9
                    "title": "While Loop",
                    "link": ``,
                    "minutes": ""
                },
                { // video 10
                    "title": "Do while Loop",
                    "link": ``,
                    "minutes": ""
                },
            ],
            // week 4
            [
                { // video 1
                    "title": "Classes and Objects",
                    "link": ``,
                    "minutes": ""
                },
            ],
            // week 5
            [
                { // video 1
                    "title": "Creating Classes and Objects and Using it",
                    "link": ``,
                    "minutes": ""
                },
                { // video 2
                    "title": "Creating Classes",
                    "link": ``,
                    "minutes": ""
                },
                { // video 3
                    "title": "Creating Objects",
                    "link": ``,
                    "minutes": ""
                },
                { // video 4
                    "title": "Priting Object Attributes",
                    "link": ``,
                    "minutes": ""
                },
                { // video 5
                    "title": "Passport Example",
                    "link": ``,
                    "minutes": ""
                },
            ]
        ]
    },
    //Python

]



let content= document.querySelectorAll(".content");
const nav_links = document.querySelectorAll(".nav-link");
const backBtn = document.querySelector(".btn-back");
const swiper_wrapper = document.querySelector(".swiper-wrapper");
const content_container = document.querySelector(".content");


let courseID = 0;
let week = lecture[courseID].lectures;
let week_count = week.length;
console.log(week_count);

// printing week count to lecture page
for(let i=0; i<week_count; i++){
    let item = "";
    if(i == 0){
        item = `
        <button class="category active swiper-slide ${i}" id="${i}">Week ${i}</button>
        `
    }else{
        item = `
        <button class="category swiper-slide ${i}" id="${i}">Week ${i}</button>
        `
    }
    swiper_wrapper.innerHTML += item;
}

// making swiper wrapper clickable
swiper_wrapper.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('.category');
    
    if (clickedElement) {
        // Handle the click event here
        console.log('Card clicked:', clickedElement.querySelector('button'));
    }
});

let category   = document.querySelectorAll(".category");

// for default
content_container.querySelector("h5").textContent = `Week - 0`;
for(let i=0; i<week[0].length; i++){
    content_container.querySelector(".video-wrapper").innerHTML += `
                <div class="row mb-3 video-part d-flex align-items-center justify-content-center" id="${i}">
                    <div class="col-3 col-md-1 text-align-start">
                        <img src="../assets/svg/play-circle.svg" class="play-circle-icon" alt="">
                    </div>
                    <div class="col-7 col-md-9 d-flex align-items-start justify-content-start text-align-start">
                        <h3>${week[0][i].title}</h3>
                    </div>
                    <div class="col-2">
                        <small>${week[0][i].minutes}</small>
                        <i class="fa-solid fa-check-circle d-none"></i>
                    </div>
                </div>
    `;
}

// this is week nav link (working with action)
category.forEach(e => {

    e.addEventListener("click", () => {
        category.forEach(i => {
            i.classList.remove("active");
            content_container.querySelector(".video-wrapper").innerHTML = "";
        })
        e.classList.add("active");

        // printing video content to lecture page
        let week_id = e.id;
        console.log(week_id);
        // print the week id
        content_container.querySelector("h5").textContent = `Week - ${week_id}`;
        // print the lecture
        for(let i=0; i<week[week_id].length; i++){
            content_container.querySelector(".video-wrapper").innerHTML += `
                        <div class="row mb-3 video-part d-flex align-items-center justify-content-center" id="${i}">
                            <div class="col-3 col-md-1 text-align-start">
                                <img src="../assets/svg/play-circle.svg" class="play-circle-icon" alt="">
                            </div>
                            <div class="col-7 col-md-9 d-flex align-items-start justify-content-start text-align-start">
                                <h3>${week[week_id][i].title}</h3>
                            </div>
                            <div class="col-2">
                                <small>${week[week_id][i].minutes}</small>
                                <i class="fa-solid fa-check-circle d-none"></i>
                            </div>
                        </div>
            `;
        }
    })
})

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

//for video choosing function
const chunk_of_video = document.querySelectorAll(".video-part");


    chunk_of_video.forEach(e => {
        e.addEventListener("click", () => {
            e.querySelector(".fa-check-circle").classList.remove("d-none");
            console.log(e.classList)
        })
    })


// For video choosing function
const videoWrapper = content_container.querySelector(".video-wrapper");

videoWrapper.addEventListener("click", (event) => {
    const clickedElement = event.target.closest(".video-part");
    
    if (clickedElement) {
        clickedElement.querySelector(".fa-check-circle").classList.remove("d-none");
        console.log(clickedElement.classList);
    }
});
// By using this approach, you won't need to reattach event listeners every time you switch categories, and the click functionality should work consistently across dynamically loaded video lectures.





