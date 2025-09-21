document.addEventListener('DOMContentLoaded', () => {

    // --- Data for Skills and Projects ---
    const skills = [
        "C++", "Python", "JavaScript", "Data Structures & Algorithms", "System Design", "Deep Learning",
        "Generative AI", "LLM Fine-Tuning", "MLOps", "Transformers", "LangChain",
        "Distributed Systems", "Microservices", "REST APIs", "AWS", "GCP", "Docker", "Kubernetes",
        "SQL", "NoSQL", "CI/CD"
    ];

    const projects = [
        {
            name: "InfraSketch",
            description: "A real-time, collaborative web application for designing and documenting complex system architectures with an AI-powered diagram generation feature.",
            tech: ["React", "TypeScript", "Node.js", "Framer Motion", "Supabase"],
            github: "https://github.com/S1u2m3e4e5t6/InfraSketch",
            live: "https://infrasketch-collabor-wbvs.bolt.host/"
        },
        {
            name: "LexiVoice AI",
            description: "Engineered a custom 15M-parameter Transformer SLM, reducing inference latency by 45% to enable real-time AI legal support for over 10K users.",
            tech: ["Python", "Transformers", "CUDA", "NLP", "Generative AI"],
            github: "https://github.com/S1u2m3e4e5t6/LexiVoice-AI",
            live: "https://s1u2m3e4e5t6.github.io/LexiVoice-AI/"
        },
        {
            name: "SLM from Scratch",
            description: "Built a lightweight 15M-parameter Transformer with custom tokenization and quantization, optimized for low-resource edge hardware deployment.",
            tech: ["Python", "Transformers", "Model Optimization"],
            github: "https://github.com/S1u2m3e4e5t6/SLM",
            live: "https://colab.research.google.com/drive/1lILaoz8jH0rCmSCh66LvuQieZZAcxGtX?usp=sharing#scrollTo=wYXv3Q7bxGxK"
        },
        {
            name: "AI Coder Buddy",
            description: "Developed an AI agent using LangChain that automatically plans and generates multi-file applications, decreasing development cycle time by 30%.",
            tech: ["Python", "LangChain", "LangGraph", "Groq API", "AI Agents"],
            github: "https://github.com/S1u2m3e4e5t6/AI-Coder-Buddy",
            live: null
        },
        {
            name: "Credit Risk Model",
            description: "Developed interpretable ML models that improved prediction accuracy by 20% and reduced evaluation time by 60% for NBFC clients.",
            tech: ["Python", "Scikit-learn", "Streamlit", "MLOps"],
            github: "https://github.com/S1u2m3e4e5t6/Credit-Risk-Modelling-Classification-",
            live: null
        },
        {
            name: "Insights LM",
            description: "Engineered a secure, open-source, self-hosted clone of Google Notebook LM with a serverless RAG pipeline for citation-backed AI responses.",
            tech: ["Python", "RAG", "Supabase", "N8N", "System Design"],
            github: "https://github.com/S1u2m3e4e5t6/notebook-lm",
            live: null
        },
        {
            name: "Toxic Message Detector",
            description: "Trained a text classification model with TF-IDF on 100K+ comments, achieving 95% accuracy in detecting harmful online content.",
            tech: ["Scikit-learn", "Pandas", "NLTK", "TF-IDF"],
            github: "https://github.com/S1u2m3e4e5t6/Toxic-Comment-Classification-Web-App",
            live: null
        },
        {
            name: "Multi-Modal Crew AI",
            description: "Designed a multi-agent framework that automates market research and reporting by 70% using specialized 'Researcher' and 'Writer' agents.",
            tech: ["Python", "Gemini API", "LangChain", "Streamlit"],
            github: "https://github.com/S1u2m3e4e5t6/CrewAI-Multi-Agent-System-Prototype",
            live: null
        }
    ];

    // --- Populate Skills ---
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillBubble = document.createElement('div');
        skillBubble.classList.add('skill-bubble');
        skillBubble.textContent = skill;
        skillsContainer.appendChild(skillBubble);
    });

    // --- Populate Projects ---
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        let liveLink = project.live 
            ? `<a href="${project.live}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
            : '';
        
        if (project.live && project.live.includes('colab.research.google.com')) {
             liveLink = `<a href="${project.live}" target="_blank"><i class="fas fa-robot"></i> View Colab</a>`;
        }


        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                ${liveLink}
            </div>
        `;
        projectGrid.appendChild(card);
    });


    // --- 3D Card Tilt Effect ---
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20; // Slower rotation
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

});