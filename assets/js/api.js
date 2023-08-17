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

let course_detail = [
    // java course details
    {
        "id": 1,
        "course_name": "Core Java",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
        "prices": 89,
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
        "course_name": "Core Java",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
        "prices": 199,
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

    // javaScripts course details
    {
        "id": 3,
        "course_name": "Core Java",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
        "prices": 199,
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

    // php course details
    {
        "id": 4,
        "course_name": "Core Java",
        "course_label": "Complete java full course",
        "course_image": "../assets/pic/Java-BCG-Banner.png",
        "prices": 199,
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

    // web development course details
    {
        "id": 5,
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