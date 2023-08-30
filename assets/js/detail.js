let course_detail = [
    // java course details
    {
        "id": 1,
        "course_name": "Core Java",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
        "prices": 89.0,
        "descp": `
            Learn the Skills Needed to be a Java Programmer.
            Quickly master the Java Programming language
            and the packages that constitute its rich
            set of core libraries.
        `,
        "learn": [
            "Learn the basic syntax and function of the java programming language",
            "Apply object-oriented programming technique to building classes, creating objects, and understanding how solutions are packaged in java",
            "Learn how to implement inheritance and polymorphism in java",
            "Use selected parts of the vast Java SE class library to enhance your java programming technique"
        ],
        "modules": [
            "Introduction to Java Programming", // week 1
            "Java Languages Fundamental - Types",
            "Java Languages Fundamental - Flows of Control",
            "Classes and Objects",
            "Creating Classes, Objects and using it"
        ],
        "instructors": [
            {
                "name": "instructor 1",
                "image": ""
            },
            {
                "name" : "instructor 2",
                "image": ""
            }
        ]
    },

    // python course details
    {
        "id": 2,
        "course_name": "Python Course",
        "course_label": "Crash Course on Python",
        "course_image": "../assets/pic/FREE-Python-Course-For-Beginners.png",
        "prices": 199.0,
        "descp": `
                This course is designed to teach you 
                the foundations in order to write simple 
                programs in Python using the most common 
                structures. No previous exposure to 
                programming is needed. By the end of 
                this course, you'll understand the 
                benefits of programming in IT roles; 
                be able to write simple programs using 
                Python.
        `,
        "learn": [
            "What Python is and why Python is relevant to automation",
            "How to use the basic Python structures: strings, lists, and dictionaries",
            "How to write short Python scripts to perform automated actions",
            "How to create your own Python objects"
        ],
        "modules": [
            "Hello Python",
            "Basic Python Syntax",
            "Loops",
            "Strings, Lists and Dictionaries",
            "Object Oriented Programming (Optional)",
            "Final Project"
        ],
        "instructors": [
            {
                "name": "Paul Resnick",
                "image": ""
            },
            {
                "name" : "Steve Oney",
                "image": ""
            }
        ]
    },

    // javaScripts course details
    {
        "id": 3,
        "course_name": "JavaScript Course",
        "course_label": "JavaScript, jQuery, and JSON",
        "course_image": "../assets/pic/JavaScript-BCG-Banner-icons.png",
        "prices": 89.0,
        "descp": `
                In this course, we'll look at the 
                JavaScript language, and how it supports 
                the Object-Oriented pattern, with a focus 
                on the unique aspect of how JavaScript 
                approaches OO. We'll explore a brief 
                introduction to the jQuery library, 
                which is widely used to do in-browser 
                manipulation of the Document Object 
                Model (DOM) and event handling. 
                You'll also learn more about JavaScript 
                Object Notation (JSON), which is commonly 
                used as a syntax to exchange data between 
                code running on the server (i.e. in PHP) 
                and code running in the browser 
                (JavaScript/jQuery).
        `,
        "learn": [
            "Learn new concepts from industry experts",
            "Gain a foundational understanding of a subject or tool",
            "Develop job-relevant skills with hands-on projects",
            "Earn a shareable career certificate"
        ],
        "modules": [
            "Introduction to JavaScript",
            "JavaScript Objects",
            "Using JQuery",
            "JSON - JavaScript Object Notation"
        ],
        "instructors": [
            {
                "name": "Charles Russell Severance",
                "image": ""
            }
        ]
    },

    // php course details
    {
        "id": 4,
        "course_name": "PHP Programming",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/skill-guide-php.png",
        "prices": 89.0,
        "descp": `
                In this course, you'll explore the basic 
                structure of a web application, and how 
                a web browser interacts with a web server. 
                You'll be introduced to the 
                request/response cycle, including 
                GET/POST/Redirect. You'll also gain 
                an introductory understanding of Hypertext 
                Markup Language (HTML), as well as the 
                basic syntax and data structures of the 
                PHP language, variables, logic, iteration, 
                arrays, error handling, and superglobal 
                variables, among other elements. 
                An introduction to Cascading Style Sheets 
                (CSS) will allow you to style markup for 
                webpages. Lastly, you'll gain the skills 
                and knowledge to install and use an 
                integrated PHP/MySQL environment 
                like XAMPP or MAMP.
        `,
        "learn": [
            "Learn new concepts from industry experts",
            "Gain a foundational understanding of a subject or tool",
            "Develop job-relevant skills with hands-on projects",
            "Earn a shareable career certificate"
        ],
        "modules": [
            "Introduction to PHP",
            "Fundamentals of PHP - Data Types",
            "PHP Arrays",
            "PHP Objects",
            "Connecting PHP and MySQL",
            "PHP Cookies and Sessions",
            "PHP Redirect, Routing, and Authentication",
            "Building a CRUD Application"
        ],
        "instructors": [
            {
                "name": "Charles Russell Severance",
                "image": ""
            },
            {
                "name" : "instructor 2",
                "image": ""
            }
        ]
    },

    // web development course details
    {
        "id": 5,
        "course_name": "Web Development",
        "course_label": "HTML, CSS, and Javascript for Web Developers",
        "course_image": "../assets/pic/BCG-Web-Development-NEW-Banner.png",
        "prices": 199,
        "descp": `
            we will learn the basic tools that every web page coder
            needs to know. We will start from the ground up by learning
            how to implement modern web pages with HTML and CSS. 
        `,
        "learn": [
            "modern Web Development fundamentals as well as advanced topics.",
            "Develop professional skills that position you at the top of the candidate list.",
            "give you the foundation and logic for communicating with programming languages.",
            "Build web developer skills."
        ],
        "modules": [
            "Introduction to HTML5",
            "Introduction to CSS3",
            "Coding with Simple Project",
            "Introduction to JavaScript",
            "Using JavaScript to build Web Application"
        ],
        "instructors": [
            {
                "name": "Yaakov Chaikin",
                "image": ""
            }
        ]
    }
];


const course_detail_container = document.querySelector(".course-details");

// get the idd from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let idd = urlParams.get('idd');
let id = parseInt(idd);
id -= 1
console.log('Received ID:', id);

course_detail_container.innerHTML = `
            <!-- course details  -->
            <div class="col-12 image-wrap p-3 border-bottom">
                <!-- image  -->
                <div class="img" style="background: url(${course_detail[id].course_image});
                                        background-position: center;
                                        background-size: cover;
                                        background-repeat: no-repeat;"></div>
            </div>

            <!-- course content wrap  -->
            <div class="col-12 course-content-wrap p-3">

                <div class="row d-flex align-items-start justify-content-center  course-content-details">
                    <div class="col-6 d-flex flex-column justify-content-start title">
                        <h4>${course_detail[id].course_name}</h4>
                        <span>${course_detail[id].course_label}</span>
                    </div>
                    <div class="col-6 d-flex flex-column justify-content-end align-items-end price">
                        <h5>Price: <span>${course_detail[id].prices}$</span></h5>
                    </div>
                </div>

                <div class="mb-5"></div>
                <!-- description  -->
                <div class="row d-flex align-items-start course-content-description">
                    <div class="col-12">
                        <h4>Description</h4>
                        <p>
                            ${course_detail[id].descp}
                        </p>
                    </div>
                </div>

                <div class="mb-3"></div>
                <!-- what will you learn  -->
                <div class="row d-flex align-items-start course-content-what">
                    <div class="col-12">
                        <h4 class="mb-3">What will you learn?</h4>
                        <div class="what-will-we-learn">
                        
                        </div>
                    </div>
                </div>

                <div class="mb-3"></div>
                <!-- Details to know  -->
                <div class="row d-flex align-items-start course-content-what">
                    <div class="col-12">

                        <h4 class="mb-3">Details to Know</h4>
                        <div class="row">
                            <div class="col-6">
                                <h4><i class="fa-solid fa-list-check"></i></h4>
                                <span>Quizzes & Assessments</span>
                            </div>
                            <div class="col-6">
                                <h4><i class="fa-solid fa-message"></i></h4>
                                <span>English, Spanish, +6</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mb-5"></div>
                <!-- modules in this course  -->
                <div class="row d-flex align-items-start course-content-what">
                    <div class="col-12">
                        <h4 class="mb-4">Modules in this course!</h4>
                        
                        <div class="row course-models-wrapper-container"></div>
                        
                    
                    </div>
                </div>

                <div class="mb-5"></div>
                <!-- modules in this course  -->
                <div class="row d-flex align-items-start course-content-what">
                    <div class="col-12">
                        <h4 class="mb-4">Instructors</h4>
                        
                        <div class="row mb-2 course-modules-wrapper2">
                            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
                                <div class="insturct-img mb-3"></div>
                                <h5>Sayr. Pyae</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="mb-3"></div>

                <a href="./payment.html?id=${id+1}" class="enroll me-3 text-decoration-none ">Enroll Now</a>
                <button class="back">Back</button>

                <div class="mb-5"></div>
                <div class="mb-5"></div>
                <div class="mb-5"></div>
            </div>
`;


// print out the what we learn topic
const what_will_we_learn = document.querySelector(".what-will-we-learn");
let what_will_learn = course_detail[id].learn;
for(let j=0; j<what_will_learn.length; j++)
{
    what_will_we_learn.innerHTML +=
        `
        <div class="row mb-2">
            <div class="col-1 check-icon"><i class="fa-solid fa-check"></i></div>
            <div class="col-11 what-will-learn">
                <span>${course_detail[id].learn[j]}</span>
            </div>
        </div>
        `;
}

// print out the modules of coures
const modules_of_course = document.querySelector(".course-models-wrapper-container");
let modules_course = course_detail[id].modules;
let count = 0;
for(let j=0; j<modules_course.length; j++){
    modules_of_course.innerHTML += `
    
        <div class="col-2 col-md-1 list-number">
            <span class="me-2">${count++}</span>
        </div>
        <div class="col-10 col-md-11 what-will-learn2">
            <span>${course_detail[id].modules[j]}</span>
        </div>
    
    `;
}

// back button function
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
    window.location = "./dashboard.html";
})

// set id to 0
id = 0