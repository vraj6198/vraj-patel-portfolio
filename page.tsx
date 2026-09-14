import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { Motion } from './motion';
import { AIField } from './ai-field';
import { Topbar } from './topbar';
import { ProjectStories } from './project-stories';

export default function Home() {
  return <>
    <AIField />
    <Motion />
    <a className="skip" href="#content">Skip to content</a>
    <Topbar />
    <main id="main" className="profile-layout wrap">
      <header className="profile">
        <div className="profile-photo"><img src="/vraj-patel.jpg" alt="Vraj Patel wearing an augmented reality headset" /></div>
        <p className="eyebrow">SOFTWARE & APPLIED AI</p>
        <h1>Vraj Patel<span>.</span></h1>
        <p className="profile-role">AI Software Engineer | Agentic AI | Forward Deployed Engineer</p>
        <p className="profile-description">I build enterprise applications, from the first customer conversation to the code that ships.</p>
        <a className="resume-button" href="/Vraj_Patel_CV.pdf" download>Download CV <Download size={16} /></a>
      </header>
      <div id="content" className="profile-content">
        <section id="about" className="content-section" aria-labelledby="about-heading">
          <div className="section-heading" data-reveal><h2 id="about-heading">About</h2></div>
          <p className="about-intro" data-reveal>I turn ambiguous business needs into reliable software. My work sits where customer conversations, system design, and applied AI meet: I shape the architecture, build the first useful version, and stay close through review and rollout.</p>
          <h3 className="subheading">Experience</h3>
          <div className="timeline">
            <article className="career" data-reveal>
              <div className="career-heading"><h4>AI Software Engineer · Application Architecture &amp; Development</h4><span className="career-date">Apr 2025 to Sep 2026</span></div>
              <p className="career-meta">Forchheim · Germany</p>
              <p>Own the path from customer need to production software, combining architecture, implementation, and review. Delivered an application used by 540+ users across 5+ business customers.</p>
              <details className="career-details"><summary>Impact highlights <span aria-hidden="true">+</span></summary><div className="detail-body"><ul><li>Cut requirements-related rework by 20% through structured discovery, fast validation, and release reviews.</li><li>Reduced repetitive development work by 60% with reusable UI patterns and AI-assisted developer tooling.</li></ul></div></details>
            </article>
            <article className="career" data-reveal>
              <div className="career-heading"><h4>Software Engineer · Digital Innovation &amp; Rapid Prototyping</h4><span className="career-date">Aug 2023 to Mar 2025</span></div>
              <p className="career-meta">Erlangen · Germany</p>
              <p>Turned ambiguous operational challenges into production-ready digital workflows, pairing rapid experiments with dependable implementation. Delivered 7+ solutions across 10+ automation, analytics, and dashboard use cases, reducing manual work from four hours to 30 minutes.</p>
              <details className="career-details"><summary>Delivery impact <span aria-hidden="true">+</span></summary><div className="detail-body"><ul><li>Partnered with 10+ stakeholders to shape requirements, validate prototypes 30% faster, and move ideas into rollout.</li><li>Built Python, API, Power Platform, and cloud solutions that cut processing time by 30% and automated 4 recurring workflows.</li><li>Facilitated ideation and incubation sessions that turned business needs into clear technical specifications.</li></ul></div></details>
            </article>
          </div>
          <div className="background-grid">
            <div data-reveal>
              <h3 className="subheading">Education</h3>
              <div className="education-item"><h4>M.Sc. Automotive Software Engineering</h4><p>TU Chemnitz</p><span>2022 to 2026 · Completed</span></div>
              <div className="education-item"><h4>B.E. Computer Science Engineering</h4><p>Gujarat Technological University</p><span>2017 to 2021</span></div>
            </div>
            <div data-reveal>
              <h3 className="subheading">Technical skills</h3>
              <dl className="skills"><div><dt>Applications</dt><dd>Python, TypeScript, JavaScript, FastAPI, React, Next.js, SQL, PostgreSQL, REST APIs</dd></div><div><dt>Agentic AI</dt><dd>LangChain, LangGraph, RAG, tool calling, agent workflows, prompt engineering, LLM evaluation</dd></div><div><dt>ML and vision</dt><dd>PyTorch, TensorFlow, OpenCV, semantic segmentation, point cloud processing, Blender, Ollama</dd></div><div><dt>Architecture</dt><dd>Requirements engineering, customer discovery, system design, API design, application architecture, code review</dd></div><div><dt>Data platforms</dt><dd>Databricks, Snowflake, data modeling, vector search, embeddings</dd></div><div><dt>Cloud and delivery</dt><dd>Azure, Docker, GitHub Actions, CI/CD, Azure DevOps, Power Platform, Linux</dd></div></dl>
            </div>
          </div>
        </section>
        <ProjectStories />
        <section id="contact" className="content-section contact" aria-labelledby="contact-heading">
          <div className="contact-panel" data-reveal>
            <p className="contact-kicker">CONTACT</p>
            <h2 id="contact-heading">Let&apos;s build what matters.</h2>
            <p className="contact-lede">Open to applied AI and architecture roles, thoughtful collaborations, and ambitious product work.</p>
            <div className="contact-actions">
              <a className="contact-action" href="mailto:patelvraj67@gmail.com"><span className="contact-action-icon"><Mail size={19} /></span><span><small>Email</small><strong>patelvraj67@gmail.com</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-action" href="https://www.linkedin.com/in/vraj6198/" target="_blank" rel="noreferrer"><span className="contact-action-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M11.5 17v-7m0 3c0-4 5-4 5 0v4"/><circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none"/></svg></span><span><small>Connect</small><strong>LinkedIn profile</strong></span><ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-socials" aria-label="More links"><a href="https://github.com/vraj6198" target="_blank" rel="noreferrer" aria-label="GitHub"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.75 10.75 0 0 1 5.6 0c2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg></a><a href="https://twitter.com/vraj6198" target="_blank" rel="noreferrer" aria-label="Twitter"><span aria-hidden="true">X</span></a></div>
          </div>
        </section>
      </div>
    </main>
    <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Vraj Patel</span><a href="#main">Back to top ↑</a></footer>
  </>;
}
