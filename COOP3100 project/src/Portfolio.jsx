import React from "react";

// ---- Quick setup notes ----
// 1) Add Tailwind to your project (if not already): https://tailwindcss.com/docs/guides/create-react-app or Next.js guide.
// 2) Drop your resume PDF in /public/resume.pdf and update RESUME_URL below.
// 3) Replace HEADSHOT_URL with a professional headshot (put file in /public and reference it).
// 4) Replace ABOUT_VIDEO_URL with your About Me video link (YouTube/Vimeo) or swap the <iframe> block.
// 5) Deploy on Vercel/Netlify/GitHub Pages.

const RESUME_URL = "/resume/Andrew_Resume.pdf"; // Resume in public/resume folder
const HEADSHOT_URL = "/photos/headshot.jpg"; // place headshot at public/photos/headshot.jpg
const ABOUT_VIDEO_URL = "https://www.youtube.com/embed/gPBcYSvU0hw"; // replace with your actual About Me video URL

const projects = [
    {
      title: "Toronto House Price Predictor",
      subtitle: "Interactive ML price estimation app",
      period: "2024",
      description:
        "Developed an app predicting Toronto house prices with ~85% accuracy using a Random Forest model, allowing users to explore predictions by neighborhood and building type.",
      role: "Machine Learning & Full-Stack Developer",
      skills: [
        "Python",
        "Flask",
        "Pandas",
        "Scikit-learn",
        "React",
        "Azure Databricks",
      ],
      outcomes: [
        "User-friendly interface for real-estate decision support",
        "Model trained and optimized using real housing market data",
      ],
      links: [
        { label: "Demo", href: "https://toronto-house-prices-predection-app-95qo.vercel.app/" },
        { label: "GitHub", href: "https://github.com/AndrewidRizk/Toronto-House-Prices-Predection-App" },
      ],
      media: [{ type: "image", src: "/photos/Toronto.jpg", alt: "Toronto House Price Predictor" }],
    },
    {
      title: "Object Detector",
      subtitle: "Custom Faster R-CNN detection pipeline",
      period: "2024",
      description:
        "Programmed a custom object detection model using Faster R-CNN achieving ~70% accuracy on the COCO dataset to detect and classify objects in complex images; deployed via AKS with assets on AWS S3.",
      role: "ML Engineer",
      skills: [
        "Python",
        "PyTorch",
        "Torchvision",
        "Matplotlib",
        "AWS S3",
        "Azure AKS",
        "Kubernetes",
      ],
      outcomes: [
        "Containerized inference service for real-time detection",
        "Reproducible training and evaluation workflow",
      ],
      links: [
        { label: "Demo", href: "https://visionmaster.duckdns.org/" },
        { label: "GitHub", href: "https://github.com/AndrewidRizk/Object-Detection-ML" },
      ],
      media: [{ type: "image", src: "/photos/VisionMaster.jpg", alt: "Object Detector (VisionMaster)" }],
    },
    {
      title: "YU Classroom Finder (StudySpots)",
      subtitle: "Find available study spaces at YorkU",
      period: "2024 — Present",
      description:
        "Team project serving 5,000+ students with live availability of classrooms for studying, leveraging official resources.",
      role: "Full-stack Engineer (team of 3)",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Python",
        "MySQL",
        "Docker",
        "AWS EC2",
      ],
      outcomes: [
        "Production deployment with active student use",
        "API integrations and caching for performance",
        "Clean UI with mobile-first responsive design",
      ],
      links: [
        { label: "Live Demo", href: "https://spots.yorku.dev/" },
        { label: "GitHub", href: "https://github.com/AndrewidRizk/StudySpots" },
      ],
      media: [{ type: "image", src: "/photos/spots.jpg", alt: "StudySpots" }],
    },
    {
      title: "Home Server Environment",
      subtitle: "Self-hosted CI/CD and services",
      period: "2024",
      description:
        "Repurposed laptops into Linux servers, exposed services securely, and automated builds to learn infra at home.",
      role: "DevOps / Platform tinkerer",
      skills: ["UNIX/Linux", "TCL", "Shell", "AWS Lambda", "Jenkins", "SSL/TLS"],
      outcomes: [
        "Hosted APIs & databases with secure TLS",
        "CI/CD pipelines for personal projects",
        "Ports & reverse proxy configuration",
      ],
      links: [],
      media: [],
    },
    {
      title: "Kernel Scheduler (Simulator)",
      subtitle: "OS-level CPU scheduling algorithms",
      period: "2023",
      description:
        "Implemented multi-algorithm CPU scheduling (SJF, EDF, FCFS, RR, Priority) to simulate kernel job control.",
      role: "Systems programmer (solo)",
      skills: ["C", "Data Structures", "Algorithms"],
      outcomes: [
        "Correctness and fairness across workloads",
        "CLI with clear metrics and logs",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/AndrewidRizk/Kernel-Scheduler" },
      ],
      media: [],
    },
  ];
  

const experiences = [
  {
    company: "CIBC Bank",
    title: "Data Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Built scalable ETL pipelines over large transactional datasets in Databricks/PySpark.",
      "Applied ML techniques for fraud detection; delivered insights via Power BI dashboards.",
      "Improved fraud detection accuracy by ~30% via a full‑stack data platform (React, Python, PySpark).",
    ],
  },
  {
    company: "Expitch (Part‑time)",
    title: "ML Software Engineer Intern",
    period: "Jul 2025 – Present",
    bullets: [
      "Developed multi‑agent LLM pipeline for collaboration/debate/refinement via advanced prompting.",
      "Designed secure auth & tokenization with React, Node.js, MongoDB; integrated Auth0 SSO & API key mgmt.",
    ],
  },
  {
    company: "Lassonde School of Engineering (with Huawei)",
    title: "ML Research Intern",
    period: "May 2025 – Sep 2025",
    bullets: [
      "Production‑grade DL/NLP pipelines to convert Android/iOS apps to Huawei native OS apps.",
      "Multi‑stage RAG (LangChain) using Python & MCP; fine‑tuned LLMs with PyTorch for platform migration.",
    ],
  },
  {
    company: "Regional Municipality of York",
    title: "Software Engineer Intern",
    period: "Sep 2023 – Sep 2024",
    bullets: [
      "+80% testing efficiency via 20+ Python/Pytest/Selenium scripts integrated into Jenkins CI/CD.",
      "Linear‑programming operator scheduler in Java/Spring Boot; ~45% time efficiency improvement.",
      "Multithreaded log processing into a Flask UI; 50% faster error identification across departments.",
    ],
  },
];

const skills = {
  languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "NoSQL",
    "C",
    "C++",
    "PHP",
    "Bash",
    "Perl",
    "Swift",
    "HTML",
    "CSS",
    "UML",
  ],
  tools: [
    "Git",
    "Jira",
    "Confluence",
    "React",
    "Spring Boot",
    "DynamoDB",
    "PyTorch",
    "Docker",
    "Kubernetes",
    "Terraform",
  ],
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 scroll-mt-24">
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
    <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
      <a href="#home" className="font-semibold">Andro Rizk</a>
      <div className="flex gap-4 text-sm">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#resume" className="hover:underline">Resume</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-10 grid gap-10 md:grid-cols-[auto,1fr] items-center">
      <img
        src={HEADSHOT_URL}
        alt="Professional headshot of Andro Rizk"
        className="w-40 h-40 rounded-full object-cover ring-2 ring-gray-200"
      />
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Andro Rizk</h1>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Honors Computer Science student at York University. I love building reliable systems and learning by shipping. With experience across backend, data engineering, and applied ML, I'm fueled by an insatiable curiosity for learning and exploring new technologies. What truly sets me apart is my unwavering determination and commitment to long-term goals, with coding new projects always being my main interest.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/androrizk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium hover:bg-gray-50">
            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://androrizk.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium hover:bg-gray-50">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Personal Website
          </a>
          <Badge>CS @ YorkU</Badge>
          <Badge>Software Engineer</Badge>
          <Badge>Backend & Data</Badge>
          <Badge>Applied ML</Badge>

        </div>
              <div className="mt-6 flex gap-3">
        <a href="#projects" className="rounded-2xl px-5 py-2 border font-medium hover:shadow">See Projects</a>
        <a href="#experience" className="rounded-2xl px-5 py-2 border font-medium hover:shadow">See Experience</a>
        <a href={RESUME_URL} className="rounded-2xl px-5 py-2 border font-medium hover:shadow">Download Resume</a>
      </div>
      </div>
    </div>
    <div className="mx-auto max-w-5xl px-6 pb-10">

      <div className="mt-4">
        <p className="font-medium text-gray-800">Why I Like Computer Science:</p>
        <p className="mt-2 text-gray-700 leading-relaxed">
          I enjoy computer science because it gives me the freedom to build, experiment, and solve problems in many different areas. The foundational skills I learned, including algorithms, programming, and system design which opened doors for me to explore big data, backend development, DevOps, machine learning, and more. I like how CS combines creativity with logic, letting me turn abstract ideas into something real and useful. There’s always something new to learn, and I feel motivated knowing that the tools and systems I build can meaningfully impact others.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-medium text-gray-800">Most Rewarding Co-op:</p>
        <p className="mt-1 text-gray-700">
          <a href="#experience" className="underline hover:text-gray-900 font-medium">
            Data Engineer Intern at CIBC
          </a>
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed">
          My most rewarding co-op experience was working as a Data Engineer Intern at CIBC. I helped build ETL pipelines and supported fraud detection efforts using large-scale financial data. Seeing how my work contributed to improving security and customer trust made it meaningful. I gained hands-on experience with distributed systems, data processing, and cross-team collaboration. This role helped me realize that I enjoy solving complex backend and data problems, and it strengthened my confidence working on high-impact systems.
        </p>
      </div>
      <div className="mt-4">
        <p className="font-medium text-gray-800">Career Goals:</p>
        <p className="mt-2 text-gray-700 leading-relaxed">
          My career goal is to work in roles that involve building reliable, scalable systems. I am interested in Software Engineering, Backend/Data Engineering, and eventually Applied Machine Learning in production environments. I enjoy designing systems from scratch, optimizing performance, and working on solutions that support real users. Long-term, I want to develop deep expertise in backend architecture and data platforms, and contribute to projects that push technical boundaries while improving everyday experiences.
        </p>
      </div>
    </div>
    <div className="mx-auto max-w-5xl px-6 pb-16">
      <div className="aspect-video w-full overflow-hidden rounded-2xl border">
        <iframe
          className="w-full h-full"
          src={ABOUT_VIDEO_URL}
          title="About Me — Andro Rizk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

const Resume = () => (
  <Section id="resume" title="Resume">
    <p className="text-gray-700 mb-4">
      Download a current copy of my Resume. 
    </p>
    <a
      href={RESUME_URL}
      className="inline-flex items-center gap-2 rounded-2xl border px-5 py-2 font-medium hover:shadow"
    >
      Download PDF
      <span aria-hidden>↘</span>
    </a>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <article key={p.title} className="rounded-2xl border p-5 hover:shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.subtitle} · {p.period}</p>
            </div>
          </div>
          <p className="mt-3 text-gray-700">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <div className="mt-3">
            <h4 className="font-medium">My role</h4>
            <p className="text-gray-700">{p.role}</p>
          </div>
          {p.outcomes?.length ? (
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              {p.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          ) : null}
          {p.links?.length ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm underline">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
          {p.media?.length ? (
            <div className="mt-4 grid grid-cols-1 gap-3">
              {p.media.map((m, i) => (
                m.type === "image" ? (
                  <img key={i} src={m.src} alt={m.alt} className="rounded-xl border" />
                ) : null
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-4">
      {experiences.map((e) => (
        <article key={e.company} className="rounded-2xl border p-5 hover:shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{e.title} — {e.company}</h3>
              <p className="text-gray-600 text-sm">{e.period}</p>
            </div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            {e.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact">
    <p className="text-gray-700">
      Have an opportunity, project, or question? Reach me at
      {" "}
      <a className="underline" href="mailto:rizkandr@my.yorku.ca">rizkandr@my.yorku.ca</a>.
      {" "}You can also find me on
      {" "}
      <a className="underline" href="https://www.linkedin.com/in/androrizk/">LinkedIn</a>
      {" "}and {" "}
      <a className="underline" href="https://github.com/AndrewidRizk">GitHub</a>.
    </p>
  </Section>
);

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <main>
        <Resume />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-gray-600">
          © {new Date().getFullYear()} Andro Rizk 
        </div>
      </footer>
    </div>
  );
}
