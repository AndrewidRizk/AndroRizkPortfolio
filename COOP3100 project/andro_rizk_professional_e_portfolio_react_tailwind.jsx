import React from "react";

// ---- Quick setup notes ----
// 1) Add Tailwind to your project (if not already): https://tailwindcss.com/docs/guides/create-react-app or Next.js guide.
// 2) Drop your resume PDF in /public/resume.pdf and update RESUME_URL below.
// 3) Replace HEADSHOT_URL with a professional headshot (put file in /public and reference it).
// 4) Replace ABOUT_VIDEO_URL with your About Me video link (YouTube/Vimeo) or swap the <iframe> block.
// 5) Deploy on Vercel/Netlify/GitHub Pages.

const RESUME_URL = "/resume.pdf"; // e.g., /resume.pdf in your public folder
const HEADSHOT_URL = "/headshot.jpg"; // add your professional photo to /public and update this path
const ABOUT_VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID"; // replace with your actual About Me video URL

const projects = [
  {
    title: "YU Classroom Finder (StudySpots)",
    subtitle: "Find available study spaces at YorkU",
    period: "2024 — Present",
    description:
      "Team project serving 5,000+ students with live availability of classrooms for studying, leveraging official resources.",
    role: "Full‑stack Engineer (team of 3)",
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
      "Clean UI with mobile‑first responsive design",
    ],
    links: [
      { label: "Live Demo", href: "https://spots.yorku.dev/" },
      { label: "GitHub", href: "https://github.com/AndrewidRizk/StudySpots" },
    ],
    media: [{ type: "image", src: "/project-studyspots.png", alt: "StudySpots screenshot" }],
  },
  {
    title: "Home Server Environment",
    subtitle: "Self‑hosted CI/CD and services",
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
    subtitle: "OS‑level CPU scheduling algorithms",
    period: "2023",
    description:
      "Implemented multi‑algorithm CPU scheduling (SJF, EDF, FCFS, RR, Priority) to simulate kernel job control.",
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
    company: "TD Bank",
    title: "Software Engineer Intern (Incoming)",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Platforms & Technology — backend development and deployment focus.",
    ],
  },
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
        <a href="#resume" className="hover:underline">Résumé</a>
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
        <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Andro Rizk</h1>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Computer Science student at York University (B.Sc. Hons., Dean’s Honour Roll) with experience across
          backend, data engineering, and applied ML. I love building reliable systems and learning by shipping.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Badge>CS @ YorkU</Badge>
          <Badge>Backend & Data</Badge>
          <Badge>Applied ML</Badge>
        </div>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="rounded-2xl px-5 py-2 border font-medium hover:shadow">See Projects</a>
          <a href={RESUME_URL} className="rounded-2xl px-5 py-2 border font-medium hover:shadow">Download Résumé</a>
        </div>
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
  <Section id="resume" title="Résumé">
    <p className="text-gray-700 mb-4">
      Download a current copy of my résumé. (Address omitted by design.)
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
          © {new Date().getFullYear()} Andro Rizk — Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}
