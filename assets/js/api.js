let courses = [
    {'id': 1, 'name': 'Core Java', 'short_desc': 'Complete Java Full Course', 'price': 89.0, 'image': '../assets/pic/Java-BCG-Banner.png'},
    {'id': 2, 'name': 'Python Beginner', 'short_desc': 'Python Course for Beginner', 'price': 'Free', 'image': '../assets/pic/FREE-Python-Course-For-Beginners.png'},
    {'id': 3, 'name': 'JavaScript Course', 'short_desc': 'JavaScript Full Course', 'price': 69.0, 'image': '../assets/pic/JavaScript-BCG-Banner-icons.png'},
    {'id': 4, 'name': 'PHP Tutorial', 'short_desc': 'PHP programming Language', 'price': 89.0, 'image': '../assets/pic/skill-guide-php.png'},
    {'id': 5, 'name': 'Web Development', 'short_desc': 'Web Development Bootcamp', 'price': 199.0, 'image': '../assets/pic/BCG-Web-Development-NEW-Banner.png'},
];

let l_courses = [
    {'id': 1, 'name': 'Core Java', 'short_desc': 'Complete Java Full Course', 'price': 89.0, 'image': '../assets/pic/Java-BCG-Banner.png'},
    {'id': 2, 'name': 'Python Beginner', 'short_desc': 'Python Course for Beginner', 'price': 'Free', 'image': '../assets/pic/FREE-Python-Course-For-Beginners.png'},
    {'id': 3, 'name': 'JavaScript Course', 'short_desc': 'JavaScript Full Course', 'price': 69.0, 'image': '../assets/pic/JavaScript-BCG-Banner-icons.png'},
    {'id': 4, 'name': 'PHP Tutorial', 'short_desc': 'PHP programming Language', 'price': 89.0, 'image': '../assets/pic/skill-guide-php.png'},
    {'id': 5, 'name': 'Web Development', 'short_desc': 'Web Development Bootcamp', 'price': 199.0, 'image': '../assets/pic/BCG-Web-Development-NEW-Banner.png'},
];

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
            "Introduction to Java Programming",
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
        "course_image": "../assets/pic/Java-BCG-Banner.png",
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
        "id": 5.0,
        "course_name": "Web Development",
        "course_label": "HTML, CSS, and Javascript for Web Developers",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
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

export { courses, l_courses, course_detail } ;