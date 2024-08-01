const home = {
    name: 'Bhargav Ratnala',
    roles: ['Full Stack Developer', 'Competitive Programmer', 'Machine Learning Enthusiast'],
}

const about = {
    content: `I'm a third-year Computer Science student at GMR Institute of Technology, deeply passionate about web development and machine learning (ML).
    I thrive on challenges and approach every project with a collaborative mindset.
    Thank you for visiting my portfolio! Explore my projects and reach out for collaboration or idea-sharing.`,
}

const projects_skills = {
    projects_list: ['acm_codespace', 'prims_algorithm'],
    projects: {
        acm_codespace: {
            name: 'ACM Codespace',
            short_description: 'Full Stack application for competitive programmers',
            long_description: `
            <p>ACM Codespace is a full-stack web application designed to help competitive programmers improve their problem-solving skills. The platform offers a wide range of problems, from beginner to advanced levels.</p>
            <br />
            <p>Users can create an account, solve problems, and track their progress over time.</p>
            <br />
            <p>Coders can also participate in contests, view their rankings, and compare their performance with other users.</p>
            <br />
            <p>ACM Codespace is built using Django, a high-level Python web framework, and MySQL, a popular open-source relational database management system. The front-end of the application is developed using HTML, CSS, and JavaScript.</p>
            <br />
            <p>I involved in the development of the front-end of the application, including the user interface design and user experience. I also contributed to the back-end development, focusing on the database design and implementation.</p>
            <br />
            <p><a style="color: blue;" href="https://akramshaik22.github.io" target="_blank" rel="noopener noreferrer">Akram Shaik</a> and I collaborated on this project, leveraging our combined skills in web development and problem-solving to create a platform that we hope will benefit the competitive programming community.</p>
            <br />
            <p>Check out the live demo and source code below!</p>
            `,
            thumbnail: '/images/acm_codespace.png',
            images: ['/images/acm_codespace.png'],
            techStack: ['Django', 'MySQL', 'HTML', 'CSS', 'JS', 'Python'],
            demo: 'https://www.linkedin.com/posts/bhargav-ratnala-b996b722b_portfolio-design-development-activity-7090639547461419008-5876?utm_source=share&utm_medium=member_desktop',
            source: 'https://github.com/bhargavratnala/codespace',
            link: 'https://bhargavratnala.github.io',
        },
        prims_algorithm: {
            name: 'Prims Algorithm',
            short_description: `Visualization of Prim's Algorithm for Minimum Spanning Tree`,
            long_description: `
            <p>Prims Algorithm is a web application that visualizes the process of finding the minimum spanning tree of a graph using Prim's algorithm.</p>
            <br />
            <p>The application allows users to input a graph, specify the starting vertex, and view the step-by-step process of the algorithm.</p>
            <br />
            <p>Users can see the edges being selected and the minimum spanning tree being constructed in real-time, making it easier to understand the algorithm's working.</p>
            <br />
            <p>Prims Algorithm is built using HTML, CSS, and JavaScript, with a focus on interactive visualization and user experience.</p>
            <br />
            <p>I developed this project independently, leveraging my skills in front-end web development and algorithms. I aimed to create an educational tool that would help students and enthusiasts learn about Prim's algorithm in a fun and engaging way.</p>
            <br />
            <p>Check out the live demo and source code below!</p>`,
            thumbnail: '/images/prims_algo.png',
            images: ['/images/prims_algo.png'],
            techStack: ['html', 'css', 'js', 'canvas'],
            demo: 'https://www.linkedin.com/posts/bhargav-ratnala-b996b722b_connections-html-css-activity-7198753828802891776-8px2?utm_source=share&utm_medium=member_desktop',
            source: 'https://github.com/bhargavratnala/prims-algorithm',
            link: 'https://bhargavratnala.github.io/prims-algorithm',
        },
    },
    skills: [
        {
            name: 'Python',
            image: '/images/python.svg',
            description: 'high-level general-purpose programming language.',
        },
    ],
}

const experience = [
    {
        company: 'Topnotch',
        role: 'Web Developer',
        location: 'Hyderabad',
        duration: '1 months',
        image: '/images/topnotch.png',
        link: 'http://www.topnottchsofttsol.com/#/home'
    },
    {
        company: 'Congent Web Services',
        role: 'Backend Developer',
        location: 'Online',
        duration: '3 months',
        image: '/images/cws_logo.png',
        link: 'https://cwservices.co.in/'
    }
]

const education = [
    {
        title: 'GMRIT',
        name: 'GMER Institute of Technology',
        location: 'Srikakulam, India',
        degree: 'Undergraduation',
        grade: '8.74',
        description: 'Project 1 long description',
        duration: `'2021-present'`,
        image: '/images/gmrit.png',
        link: 'https://www.gmrit.org/'
    },
    {
        title: 'JNV',
        name: 'Jawahar Navodaya Vidyalaya',
        location: 'Srikakulam, India',
        degree: 'Secondary Education',
        description: 'Project 2 long description',
        grade: '91.2%',
        board: 'CBSE',
        duration: `'2019-2021'`,
        image: '/images/jnv.png',
        link: 'https://navodaya.gov.in/nvs/nvs-school/SRIKAKULAM/en/about_us/About-JNV/'
    },
    {
        title: 'JNV',
        name: 'Jawahar Navodaya Vidyalaya',
        location: 'Srikakulam, India',
        degree: 'Primary Education',
        description: 'Project 2 long description',
        grade: '82.6%',
        board: 'CBSE',
        duration: `'2014-2019'`,
        image: '/images/jnv.png',
        link: 'https://navodaya.gov.in/nvs/nvs-school/SRIKAKULAM/en/about_us/About-JNV/'
    }
]

const contact = {
    description: `<p>Thank you for taking the time to explore my portfolio! Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.</p>
    <br />
    <p>Feel free to reach out using the contact form below or connect with me through my social media channels. I make it a priority to respond to all inquiries promptly, so you can expect to hear back from me soon.</p>`,
    socials: [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/bhargavratnala/',
            icon: '/images/insta.svg',
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/bhargavratnala/',
            icon: '/images/fb.svg',
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/bhargavratnala/',
            icon: '/images/twitter.svg',
        },
        {
            name: 'Gmail',
            link: 'mailto:bhargavratnala2004@gmail.com',
            icon: '/images/gmail.svg',
        },
    ]
}

export { home, about, projects_skills, experience, education, contact };