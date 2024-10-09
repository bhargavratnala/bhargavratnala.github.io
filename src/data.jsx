const home = {
    name: 'Bhargav Ratnala',
    roles: ['Full Stack Developer', 'Competitive Programmer', 'Machine Learning Enthusiast'],
}

const about = {
    content: `I'm a final-year Computer Science student at GMR Institute of Technology, deeply passionate about web development and machine learning (ML).
    I thrive on challenges and approach every project with a collaborative mindset.
    Thank you for visiting my portfolio! Explore my projects and reach out for collaboration or idea-sharing.`,
}

const projects_skills = {
    projects_list: ['acm_codespace', 'prims_algorithm', 'toc_visualizer'],
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
            demo: 'https://www.linkedin.com/posts/bhargavratnala_connections-web-python-activity-7062114638083092480-elML',
            source: 'https://github.com/bhargavratnala/codespace',
            link: 'https://gmritchapter.acm.org/codespace/',
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
            demo: 'https://www.linkedin.com/posts/bhargavratnala_computerscience-algorithm-datavisualization-activity-7198753828802891776-ALU-',
            source: 'https://github.com/bhargavratnala/prims-algorithm',
            link: 'https://bhargavratnala.github.io/prims-algorithm',
        },
        toc_visualizer: {
            name: 'TOC Visualizer',
            short_description: `Visualization of Working of TOC Models`,
            long_description: `
            <h1>Interactive Theory of Computation Web Application</h1>
            <br />
            <p>The Interactive Theory of Computation Web Application is an educational tool designed to make learning complex computational models both engaging and accessible. This web-based platform allows users to explore and experiment with fundamental concepts in the Theory of Computation through interactive simulations and visualizations.</p>
            <br />
            <h2>Key Features:</h2>
            <ul>
                <li><strong>Automata Simulators:</strong> Users can create and test deterministic and non-deterministic finite automata, pushdown automata, and Turing machines. These simulators offer real-time feedback, helping users visualize how different models process inputs and perform computations.</li>
                <br />
                <li><strong>Formal Language Visualizers:</strong> The application enables users to input regular expressions and context-free grammars, with immediate visual representations of their corresponding automata and parsing processes. This aids in understanding the relationship between language definitions and their computational models.</li>
                <br />
                <li><strong>Complexity Theory Insights:</strong> The platform provides interactive examples and explanations of complexity classes such as P, NP, and NP-complete. Users can explore problems within these classes and understand reduction techniques through practical demonstrations.</li>
                <br />
                <li><strong>Educational Resources:</strong> Comprehensive tutorials and practice exercises cover key topics, including definitions, theorems, and proofs. Interactive elements help reinforce learning and offer hands-on experience with theoretical concepts.</li>
            </ul>
            <br />
            <p>Designed with a user-friendly drag-and-drop interface and supported by visualization libraries, the application caters to students, educators, and enthusiasts. It combines modern web technologies to offer a rich, interactive learning experience, aiming to deepen users' understanding of computational theory and its applications.</p>
            <br />
            <p>Check out the live demo and source code below!</p>`,
            thumbnail: '/images/toc_visualizer.png',
            images: ['/images/toc_visualizer.png', '/images/toc_visualizer2.png', '/images/toc_visualizer3.png'],
            techStack: ['html', 'css', 'js', 'canvas'],
            demo: 'https://www.linkedin.com/posts/bhargavratnala_visualization-computerscience-algorithm-activity-7225494083702513664-4HfZ/',
            source: 'https://github.com/bhargavratnala/TOCmodelDemo',
            link: 'https://bhargavratnala.github.io/TOCmodelDemo',
        },
        2048: {
            name: '2048 Game',
            short_description: `2048 Game`,
            long_description: `
            <p>2048 Game is a web application that replicates the popular 2048 puzzle game, where players combine numbered tiles to reach the 2048 tile.</p>
            <br />
            <p>The game features a grid of tiles that can be moved in four directions: up, down, left, and right. When two tiles with the same number collide, they merge into one tile with the sum of their values.</p>
            <br />
            <p>Players aim to reach the 2048 tile by strategically moving the tiles and combining them to create higher-valued tiles.</p>
            <br />
            <p>2048 Game is built using React, a JavaScript library for building user interfaces. The application leverages React's component-based architecture to manage the game state, user interactions, and rendering logic.</p>
            <br />
            <p>I developed this project independently, focusing on creating an engaging and interactive game experience. I aimed to replicate the addictive gameplay of the original 2048 game while adding my unique design elements and features.</p>
            <br />
            <p>Check out the live demo and source code below!</p>`,
            thumbnail: '/images/2048.png',
            images: ['/images/2048.png'],
            techStack: ['HTML', 'JS', 'CSS'],
            demo: 'https://www.linkedin.com/posts/bhargavratnala_webdevelopment-gamedevelopment-html-activity-7227999642024603648-Uxxg',
            source: 'https://github.com/bhargavratnala/2048',
            link: 'https://bhargavratnala.github.io/2048/',
        },
    },
    skills: [
        {
            name: 'Python',
            path: 'python',
            description: 'high-level general-purpose programming language.',
        },
        {
            name: 'JavaScript',
            path : 'js',
            description: 'high-level programming language for web development.',
        },
        {
            name: 'HTML',
            path: 'html',
            description: 'standard markup language for creating web pages.',
        },
        {
            name: 'CSS',
            path: 'css',
            description: 'style sheet language used for describing the look and formatting of a document.',
        },
        {
            name: 'React',
            path: 'react',
            description: 'JavaScript library for building user interfaces.',
        },
        {
            name: 'Django',
            path: 'django',
            description: 'high-level Python web framework.',
        },
        {
            name: 'Laravel',
            path: 'laravel',
            description: 'open-source PHP web framework.',
        },
        {
            name: 'MySQL',
            path: 'mysql',
            description: 'open-source relational database management system.',
        },
        {
            name: 'Git',
            path: 'git',
            description: 'distributed version control system.',
        },
        {
            name: 'C++',
            path: 'cpp',
            description: 'general-purpose programming language.',
        },
        {
            name: 'Java',
            path: 'java',
            description: 'high-level programming language.',
        },
        {
            name: 'TensorFlow',
            path: 'tensorflow',
            description: 'open-source machine learning framework.',
        },
        {
            name: 'Pandas',
            path: 'pandas',
            description: 'open-source data analysis and manipulation tool.',
        },
        {
            name: 'Scikit-learn',
            path: 'scikit-learn',
            description: 'open-source machine learning library.',
        },
        {
            name: 'Numpy',
            path: 'numpy',
            description: 'open-source numerical computing library.',
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
        company: 'Cogent Web Services',
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
        name: 'GMR Institute of Technology',
        location: 'Srikakulam, India',
        degree: 'Undergraduation',
        grade: '8.74',
        description: 'I pursued a B.Tech degree, gaining in-depth technical knowledge, hands-on experience, and problem-solving skills in a dynamic engineering environment.',
        duration: `'2021-present'`,
        image: '/images/gmrit.png',
        link: 'https://www.gmrit.edu.in/'
    },
    {
        title: 'JNV',
        name: 'Jawahar Navodaya Vidyalaya',
        location: 'Srikakulam, India',
        degree: 'Secondary Education',
        description: 'I excelled academically and developed strong leadership skills, critical thinking, and a well-rounded character.',
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
        description: 'I received a holistic education emphasizing academic excellence, leadership, and cultural values in a diverse environment.',
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
            link: 'https://www.instagram.com/__bhargavratnala__/',
            icon: '/images/insta.svg',
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/bhargav.ratanala',
            icon: '/images/fb.svg',
        },
        {
            name: 'Twitter',
            link: 'https://x.com/bhargav_ratnala',
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