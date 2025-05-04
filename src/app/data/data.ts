
export const navs = [

    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true,
    },

    {
        id: 2,
        name: 'About',
        target: 'about',
        active: false,
    },

    {
        id: 3,
        name: 'Menu',
        target: 'menu',
        active: false,
    },

    {
        id: 4,
        name: 'Courses',
        target: 'specials',
        active: false,
    },

    {
        id: 5,
        name: 'Why Us',
        target: 'events',
        active: false,
    },

    {
        id: 6,
        name: 'Team',
        target: 'chefs',
        active: false,
    },

    {
        id: 7,
        name: 'Gallery',
        target: 'gallery',
        active: false,
    },

    {
        id: 8,
        name: 'Contact',
        target: 'contact',
        active: false,
    },
];

export const whyUs = [
    {
        id: 1,
        title: 'Empower Through Education',
        content: 'We equip individuals with practical skills in cryptocurrency, digital marketing, AI, and more—ensuring they’re ready to lead in today’s fast-paced digital world. '
    },

    {
        id: 2,
        title: 'Inspire With Digital Confidence',
        content: `Our platform simplifies complex topics, helping learners gain clarity, overcome fear, and take confident steps toward their personal or professional goals. `
    },

    {
        id: 3,
        title: 'Build a Thriving Community',
        content: 'We foster a culture of growth, collaboration, and innovation—connecting learners and experts to support one another in their digital journey. '
    },
];


export const menu = [
    {
        id: 1,
        name: 'Crypto Trading for Beginners',
        price: 1.0,
        preview: '/assets/images/menu/events-bg.jpg',
        ingredients: 'Bitcoin, Ethereum, Trading Basics',
        category: 'crypto',
        description: `This course introduces you to the world of crypto trading. Learn how to open accounts, use exchanges, manage risk, and grow your portfolio step by step.`
   },

    {
        id: 2,
        name: 'Blockchain Explained',
        price: 2.0,
        preview: '/assets/images/menu/menu02.jpg',
        ingredients: 'Blockchain, Decentralization, Smart Contracts',
        category: 'crypto',
        description: `Understand how blockchain works and why it's the backbone of the crypto industry. We break it down in simple terms, even if you're a complete beginner.`
    },

    {
        id: 3,
        name: 'Advanced Crypto Strategies',
        price: 3.0,
        preview: '/assets/images/menu/menu03.jpg',
        ingredients: 'Technical Analysis, DeFi, Portfolio Management',
        category: 'crypto',
        description: `Take your crypto game to the next level with trading signals, advanced charts, and decentralized finance. Perfect for learners ready to scale up.`
    },
      
    
    {
        id: 4,
        name: 'Facebook & Instagram Ads',
        price: 4.0,
        preview: '/assets/images/menu/menu04.jpg',
        ingredients: 'Ad Manager, Targeting, Conversion',
        category: 'marketing',
        description: `Learn how to set up profitable Facebook and Instagram ad campaigns, target the right audience, and generate real business results. No experience required.`
      },
      {
        id: 5,
        name: 'Email Marketing Mastery',
        price: 5.0,
        preview: '/assets/images/menu/menu05.jpg',
        ingredients: 'Mailchimp, Automation, Funnels',
        category: 'marketing',
        description: `Build effective email campaigns that drive clicks and sales. You’ll learn how to grow your list, write strong emails, and automate follow-ups using tools like Mailchimp.`
      },
      {
        id: 6,
        name: 'SEO & Content Strategy',
        price: 6.0,
        preview: '/assets/images/menu/menu06.jpg',
        ingredients: 'Keywords, Google Ranking, Blog Optimization',
        category: 'marketing',
        description: `This course shows you how to rank on Google and drive organic traffic using smart SEO and content marketing strategies. Ideal for business owners and freelancers.`
      },
      

      {
        id: 7,
        name: 'React.js Masterclass',
        price: 7.0,
        preview: '/assets/images/menu/menu07.jpg',
        ingredients: 'React, Components, Hooks, Routing',
        category: 'web-dev',
        description: `Welcome to the full React.js course. You’ll learn everything from components to advanced hooks. By the end, you’ll be project-ready and gain certification to boost your career.`
      },
      {
        id: 8,
        name: 'Full Stack with Node.js',
        price: 8.0,
        preview: '/assets/images/menu/menu09.jpg',
        ingredients: 'Node.js, Express, MongoDB, APIs',
        category: 'web-dev',
        description: `Learn backend development using Node.js, Express, and MongoDB. This course helps you build full stack apps and integrate with frontend frameworks like React.`
      },
      {
        id: 9,
        name: 'HTML & CSS Crash Course',
        price: 9.0,
        preview: '/assets/images/menu/menu08.jpg',
        ingredients: 'HTML5, CSS3, Flexbox, Responsive Design',
        category: 'web-dev',
        description: `Master the foundation of web development with HTML and CSS. You'll build real-world layouts and fully responsive websites with ease.`
      }
      
]

export const filters = [
    {
        id: 1,
        name: 'All',
        category: 'all',
        active: true,
    },

    {
        id: 2,
        name: 'WEB-3 (Blockchain)',
        category: 'crypto',
        active: false,
    },

    {
        id: 3,
        name: 'Digital Marketing',
        category: 'marketing',
        active: false,
    },

    {
        id: 4,
        name: 'Web Development',
        category: 'web-dev',
        active: false,
    },
];


export const specials = [
    {
        id: 1,
        image: './assets/images/specials/specials01.jpg',
        title: '01 Master Cryptocurrency',
        subtitle: 'From Basics to Profitable Strategies',
        content: ' Learn how crypto works, how to trade smartly, secure your assets, and stay ahead with industry trends—no prior experience needed.',
        active: true,
    },

    {
        id: 2,
        image: './assets/images/specials/specials02.jpg',
        title: '02 Dominate Digital Marketing',
        subtitle: 'Grow Brands, Drive Results',
        content: ' Discover how to run effective online ads, build strong brand presence, and use tools like SEO, email marketing, and analytics to scale any business.',
        active: false,
    },

    {
        id: 3,
        image: './assets/images/specials/specials03.jpg',
        title: '03 Build with Web Development',
        subtitle: 'Code Your Future',
        content: ' From creating stunning websites to dynamic apps, we guide you through HTML, CSS, JavaScript, and frameworks to turn ideas into reality.',
        active: false,
    },

    {
        id: 4,
        image: './assets/images/specials/specials04.png',
        title: '04 Launch with E-Commerce & Dropshipping',
        subtitle: 'Start Smart, Sell Global',
        content: 'Learn how to set up online stores, find winning products, and build automated dropshipping businesses that sell while you sleep.',
        active: false,
    },

    {
        id: 5,
        image: './assets/images/specials/specials05.jpg',
        title: '05 Grow with AI & Social Media',
        subtitle: 'Tools to Stay Ahead',
        content: ' Understand how to use AI for content creation, automation, and decision-making—plus how to grow and monetize your presence on platforms like TikTok, Instagram, and YouTube.',
        active: false,
    },

]

export const specialsFilters = [
    {
        id: 1,
        name: 'first',
        active: true
    },

    {
        id: 2,
        name: 'second',
        active: false
    },

    {
        id: 3,
        name: 'third',
        active: false
    },

    {
        id: 4,
        name: 'fourth',
        active: false
    },

    {
        id: 5,
        name: 'fifth',
        active: false
    },
]


export const events = [
    {
        id: 1,
        image: './assets/images/events/event-01.jpg',
        title: 'Learn with Purpose',
        price: 1,
        content: `Get practical digital skills through hands-on lessons in crypto, coding, and marketing. `,
        details: [
            `Build and launch real-world projects while learning.`,
            'Receive expert guidance every step of the way.',
            'Grow from beginner to job- or client-ready fast.',
        ],
        summary: `We turn learners into doers. Your success starts here `
    },
    {
        id: 2,
        image: './assets/images/events/event-02.png',
        title: 'Proof of Skill',
        price: 2,
        content: `Earn certificates that show you’ve gained real, verified skills.`,
        details: [
            'Showcase certificates on LinkedIn and your CV. ',
            'Build trust with clients and employers instantly. ',
            'Back up your skills with verified achievements. ',
        ],
        summary: `Show them what you've earned. Your growth deserves recognition. `
    },
    {
        id: 3,
        image: './assets/images/events/event-03.png',
        title: 'From Learning to Earning',
        price: 3,
        content: `We’ll show you how to turn your skills into income.`,
        details: [
            'Learn proven strategies to land your first clients.',
            'Build a strong online presence for your services. ',
            'Turn your new skills into real income streams. ',
        ],
        summary: `We teach more than skills — we teach you how to monetize and earn with them. `
    },
]

export const testimonials = [
    {
        id: 1,
        content: `“Skyline Digital made learning crypto so easy and practical. I went from zero knowledge to confidently trading and managing my own wallet in just a few weeks. The support and mentorship were top-notch!” `,
        avatar: './assets/images/testimonials/profile.jpg',
        client: 'Ekwalla M., Douala',
        position: 'Cryptocurrency Student',
    },
    {
        id: 2,
        content: `“Thanks to Skyline Digital’s hands-on web development training, I built my first website within the first month! The step-by-step lessons and real projects gave me the confidence to start freelancing. thanks”`,
        avatar: './assets/images/testimonials/profile.jpg',
        client: 'Ngassa R., Yaoundé',
        position: 'Web Development Trainee',
    },
    {
        id: 3,
        content: `“Skyline Digital helped boost our brand’s visibility on Facebook and Instagram. Their ad strategies were powerful—we saw real results in less than 10 days. I highly recommend their marketing services!”.`,
        avatar: './assets/images/testimonials/profile.jpg',
        client: 'Fatima B., Business Owner, Buea',
        position: 'Social Media Marketing Client',
    },
    {
        id: 4,
        content: `“The dropshipping and e-commerce course opened my eyes to global business opportunities. I launched my own online store while still in training. This platform is a game-changer for young entrepreneurs.”`,
        avatar: './assets/images/testimonials/profile.jpg',
        client: 'Jean-Claude T., University Student',
        position: 'E-commerce Student',
    },
    {
        id: 5,
        content: `“I joined Skyline Digital to explore AI and ended up learning much more—tools, strategies, and platforms I had never imagined. The lessons are future-focused and easy to follow. thank you very much S.D”`,
        avatar: './assets/images/testimonials/profile.jpg',
        client: 'Sylvie A., Douala',
        position: 'AI & Digital Skills Learner',
    },
]

export const gallery = [
    {
        id: 1,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 2,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 3,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 4,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 5,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 6,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 7,
        image: '/assets/images/gallery/gallery.jpg',
    },
    {
        id: 8,
        image: '/assets/images/gallery/gallery.jpg',
    },
    
    
]


export const chefs = [
    {
        id: 1,
        name: 'Mr Zingo Leonel',
        photo: './assets/images/chefs/zingo.jpg',
        position: 'CO-Founder',
        delay: '100',
    },
    {
        id: 2,
        name: 'Mr Nell Tony',
        photo: './assets/images/chefs/chefs.jpg',
        position: 'CEO-Founder',
        delay: '200',
    },
    {
        id: 3,
        name: 'Mr Kan Cendre',
        photo: './assets/images/chefs/ngum.jpg',
        position: 'CO-Founder',
        delay: '300',
    },
]