

        // 1. Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // 2. Animations on Scroll
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            scrollObserver.observe(el);
        });

        // 3.  Form Submission
        const form = document.getElementById('my-form');
        const btn = document.getElementById('submit-btn');

        if(form) {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                btn.innerText = '...';
                btn.disabled = true;

                const formData = new FormData(form);
                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }   
                    });
                    if (response.ok) {
                        alert('მადლობა! შეტყობინება წარმატებით გაიგზავნა.');
                        form.reset();
                    } else {
                        alert('შეცდომაა!');
                    }
                } catch (error) {
                    alert('კავშირის შეცდომა.');
                } finally {
                    btn.innerText = currentLang === 'ka' ? 'გაგზავნა' : 'Send';
                    btn.disabled = false;
                }
            });
        }

        // 1. Multi-language Logic
            const translations = {
    "ka": {// --- INDEX.HTML ტექსტები ---
        "name": "ლუკა გვარამაძე",
        "under-name": "ციფრული პროექტების ენთუზიასტი • ვებ & ტექნიკური მიმართულება",
        "abt": "ჩემს შესახებ",
        "skills": "უნარები",
        "projects": "პროექტები",
        "contact": "კონტაქტი",
        "abt-text": "მოგესალმებით! მე ვარ პროაქტიული და განვითარებაზე ორიენტირებული პროფესიონალი თბილისიდან, რომელიც დაინტერესებულია ვებ ტექნოლოგიებით, ციფრული პროდუქტებითა და თანამედროვე ონლაინ გადაწყვეტილებებით. გაიზიარებთ ჩემს ნამუშევრებს, ფიქრებსა და შესაძლებლობებს, რომლებზეც აქტიურად ვმუშაობ ამ პლატფორმაზე.",
        "abt-text-second": "მიყვარს პრაქტიკული გამოცდილება, ვსწავლობ პრაქტიკით. მუდმივად ვმუშაობ ჩემი ტექნიკური და შემოქმედებითი შესაძლებლობების გაუმჯობესებაზე, რათა შევიმუშაო ძირითადი, მომხმარებელზე ორიენტირებული და ეფექტური გადაწყვეტილებები. მზად ვარ მივიღო ახალი გამოწვევები და ვითანამშრომლო.",
        "my-skills": "ჩემი უნარები",
        "front-end": "HTML, CSS, საბაზისო JavaScript, რესპონსიული დიზაინი, UI/UX აზროვნება",
        "back-end": "სერვერებთან მუშაობის საბაზისო ცოდნა, ლოგიკა, API-ს გაგება, სისტემური აზროვნება",
        "monacemebi": "🗄️ მონაცემთა ბაზები",
        "instruments": "🛠️ ინსტრუმენტები",
        "instruments-text": "Git / GitHub, VS Code, Figma, სხვადასხვა ონლაინ პლატფორმები და ხელსაწყოები",
        "language": "უცხო ენები",
        "english": "ინგლისური (C1)",
        "russian": "რუსული (B2)",
        "my-projects": "ჩემი პროექტები",
        "my-portfolio": "ჩემი პორტფოლიო",
        "my-porfolio-text": "ჩემი ნამუშევრები თავმოყრილია აქ",
        "education": "განათლება",
        "education-text": "მე მჯერა, რომ ტექნოლოგიებში სწავლა უწყვეტი პროცესია. აქ შეგიძლიათ იხილოთ ჩემი განვლილი და მიმდინარე სასწავლო კურსები.",
        "Creativity": "კრეატიული ექსპერიმენტები",
        "Creativity-text": "თავისუფალ დროს კრეატივთან ერთად შექმნილი ჩემი ნამუშევრები.",
        "link": "ნახე მეტი →",
        "contact-text": "სახელი",
        "mail": "ელ-ფოსტა",
        "message": "შეტყობინება",
        "send": "გაგზავნა",
        "ending": "© 2025 ლუკა გვარამაძე. შექმნილია საკუთარი იდეითა და მიზნებით.",
       /// --- project1.html.text ---

        "archive-title": "ჩემი ნამუშევრების კრებული",
        "archive-desc": "აქ თავმოყრილია ყველა ის ციფრული პროდუქტი, ვებ-გვერდი და ექსპერიმენტი, რომლებზეც აქტიურად ვმუშაობდი.",

        "project1-title": "ჩემი პორტფოლიო",
        "project1-desc": "ჩემი პორტფოლიოს ვებ ვერსია არის ჩემი ერთერთი კრეატიული და ამავდროულად შრომატევადი ნამუშევარი",
        "project1-link": "იხილეთ მთავარი გვერდი →",

        "project2-title": "ჩემი პირველი საიტი",
        "project2-desc": "ჩემი პირველი და ახლანდელი საიტები სრულიად განსხვავებულია, ჩემი პირველი საიტის ნახვა შეგიძლიათ GitHub-ზე, ეს საიტი იყო ჩემი ფინალური გამოცდა html css ის კურსის დასრულებისას",
        "project2-link": "ლინკი აქ →",

        "back-button": "← მთავარ გვერდზე დაბრუნება",

        "footer-text": "© 2025 ლუკა გვარამაძე. შექმნილია საკუთარი იდეითა და მიზნებით.",
        "social-github": "GitHub",
        "social-linkedin": "LinkedIn",


        // --- PROJECT 2 ტექსტები ---
        "nav-home": "მთავარი",
        "nav-projects": "პროექტები",
        "status": "მიმდინარე",
        "university": "საქართველოს ტექნიკური უნივერსიტეტი (GTU)",
        "faculty": "🎓 **ფაკულტეტი:** ინფორმატიკისა და მართვის სისტემები",
        "edu-desc": "აქტიურად ვეუფლები კომპიუტერულ მეცნიერებებს, ალგორითმებსა და პროგრამირების საფუძვლებს.",
        "cert-title": "📜 სერტიფიკატები და კურსები",
        "cert1-title": "Industry of Digital Academy",
        "cert1-desc": "HTML, CSS & Basic JS",
        "cert2-title": "Artificial Intelligence",
        "cert2-desc": "თავისუფალ დროს ვსწავლობ ხელოვნურ ინტელექტს",
        "cert3-title": "UI/UX Design Essentials",
        "cert3-desc": "Figma & Prototyping",
        "view": "ნახვა",
        "view-ai": "ნახე AI კონცეფცია",
        /// --- ai-page-text ---
        "ai-text" : "ეს გვერდი თავად ხელოვნურ ინტელექტს შევაქმნევინე, მინიმალური ძალისხმევით, მხოლოდ მარტივი პრომპტით",
        "go-back" : "უკან დაბრუნება",
        /// --- ui-ux-design-text ---
       "ui-ux" : "ბუნებრივი ინგრედიენტებით შექმნილი ფორმულა, რომელიც თქვენს თმას აბრეშუმისებრ ბზინვარებასა და სიჯანსაღეს ანიჭებს." ,
        "ui-ux-more" : "აღმოაჩინეთ მეტი",
        /// --- project.3 --- 
        "manifest-body": "ჩემს ნაშრომში <b>იდეა და კოდი ერთად მუშაობს.</b> ვიზუალს წინასწარ წარმოვიდგენ და მის მიხედვით ვქმნი კოდს. ყურადღებას ვაქცევ დეტალებს და იმ გამოცდილებას, რომელსაც მომხმარებელი რეალურად იღებს. კოდს აღვიქვამ როგორც ლამაზ ვიზუალს, რომელიც მარტივად აღიქმება, და ამავდროულად როგორც მრავალფუნქციურ ინსტრუმენტს, რომელიც შთაბეჭდილებას ტოვებს და ინტერესს აღძრავს.",
        "grid1-h": "Clean <br> Architecture",
        "grid1-p": "ლოგიკა, რომელიც არ იბნევა.",
        "grid2-h": "Fluid <br> Design",
        "grid2-p": "ანიმაცია, რომელიც სუნთქავს.",
        "grid3-h": "Pixel <br> Focus",
        "grid3-p": "ყოველი დეტალი თავის ადგილზეა.",
        "hire-btn": "მოდი ვითანამშრომლოთ",

    },
    "en": { // --- index.html.text
        "name": "Luka Gvaramadze",
        "under-name": "Digital Projects Enthusiast • Web & Tech Development",
        "abt": "About Me",
        "skills": "Skills",
        "projects": "Projects",
        "contact": "Contact",
        "abt-text": "Welcome! I am a proactive and growth-oriented professional from Tbilisi, passionate about web technologies, digital products, and modern online solutions. Explore my works, insights, and the capabilities I am actively developing on this platform.",
        "abt-text-second": "I thrive on hands-on experience and believe in learning by doing. I am constantly refining my technical and creative skills to deliver essential, user-centric, and efficient solutions. I am open to new challenges and collaborations.",
        "my-skills": "Core Competencies",
        "front-end": "HTML, CSS, Basic JavaScript, Responsive Design, UI/UX Thinking",
        "back-end": "Foundational server-side knowledge, Logic, API integration, Systems thinking",
        "monacemebi": "🗄️ Databases",
        "instruments": "🛠️ Tools",
        "instruments-text": "Git / GitHub, VS Code, Figma, and various digital platforms",
        "language": "Languages",
        "english": "English (C1)",
        "russian": "Russian (B2)",
        "my-projects": "My Projects",
        "my-portfolio": "My Portfolio",
        "my-porfolio-text": "A curated collection of my work",
        "education": "Education",
        "education-text": "I believe that learning in technology is a continuous journey. Here you can explore my past and ongoing educational courses.",
        "Creativity": "Creative Experiments",
        "Creativity-text": "A showcase of creative works developed in my free time.",
        "link": "See more →",
        "contact-text": "Name",
        "mail": "Email",
        "message": "Message",
        "send": "Send",
        "ending": "© 2025 Luka Gvaramadze. Crafted with personal vision and purpose.",
        // --- project1.html.text --- //

        "archive-title": "Collection of My Works",
        "archive-desc": "This page brings together all the digital products, websites, and experiments I have actively worked on.",

        "project1-title": "My Portfolio",
        "project1-desc": "The web version of my portfolio is one of my most creative and, at the same time, most time-intensive projects.",
        "project1-link": "View the main page →",

        "project2-title": "My First Website",
        "project2-desc": "My first and current websites are completely different. You can view my very first website on GitHub — it was my final exam project upon completing an HTML and CSS course.",
        "project2-link": "Link here →",

        "back-button": "← Back to Home",

        "footer-text": "© 2025 Luka Gvaramadze. Created with my own ideas and goals.",
        "social-github": "GitHub",
        "social-linkedin": "LinkedIn",
        // --- project2.html.text ---//
        "nav-home": "Home",
        "nav-projects": "Projects",
        "status": "Currently Enrolled",
        "university": "Georgian Technical University (GTU)",
        "faculty": "🎓 **Faculty:** Informatics and Control Systems",
        "edu-desc": "Actively mastering computer science principles, complex algorithms, and fundamental programming methodologies.",
        "cert-title": "📜 Certifications & Professional Development",
        "cert1-title": "Industry of Digital Academy",
        "cert1-desc": "HTML, CSS & Foundational JavaScript",
        "cert2-title": "Artificial Intelligence",
        "cert2-desc": "Dedicate leisure time to the advanced study of Artificial Intelligence and Machine Learning concepts.",
        "cert3-title": "UI/UX Design Essentials",
        "cert3-desc": "Advanced Figma & Interactive Prototyping",
        "view": "View Credentials",
        "view-ai": "Explore AI Concept",
        /// --- ai-page-text ---
        "ai-text": "this page was created by artificial inteligence by minimum effort of mine using simple prompts",
        "go-back": "go back",
        /// --- ui-ux-design ----
        "ui-ux" :"A naturally crafted formula that leaves your hair silky-smooth, radiant, and healthy.",
        "ui-ux-more" : "find out more",
        //project3.html.text---/
        "manifest-body": "In my practice, <b>conceptual vision and technical execution converge.</b> I orchestrate the visual narrative before transposing it into code, ensuring every structural element serves the end-user experience. I perceive code not merely as a functional utility, but as a sophisticated visual medium—intuitive, aesthetically compelling, and engineered to provoke intellectual curiosity.",
        "grid1-h": "Streamlined <br> Architecture",
        "grid1-p": "Unwavering, coherent logic.",
        "grid2-h": "Fluid <br> Dynamics",
        "grid2-p": "Motion that breathes and resonates.",
        "grid3-h": "Precision <br> Focus",
        "grid3-p": "Meticulous attention to every pixel.",
        "hire-btn": "Let's Collaborate",
        


    }
};
          
let currentLang = localStorage.getItem('selectedLang') || 'ka';


document.addEventListener('DOMContentLoaded', () => {
    updateUI(); 
    applyTranslations(); 
});

function toggleLanguage() {
    console.log("ღილაკს დაეჭირა!");
    
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    
    localStorage.setItem('selectedLang', currentLang);
    
    updateUI();
    applyTranslations();
}

function updateUI() {
    const kaSpan = document.getElementById('lang-ka');
    const enSpan = document.getElementById('lang-en');

    if (kaSpan && enSpan) {
        if (currentLang === 'ka') {
            kaSpan.classList.add('active');
            enSpan.classList.remove('active');
        } else {
            enSpan.classList.add('active');
            kaSpan.classList.remove('active');
        }
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
    

