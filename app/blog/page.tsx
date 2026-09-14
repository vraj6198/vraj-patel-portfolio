import { ArrowUpRight } from 'lucide-react';
import { Topbar } from '../topbar';

export default function Blog() {
  return <div className="blog-page">
    <a className="skip" href="#blog-main">Skip to content</a>
    <Topbar page="blog" />
    <main id="blog-main" className="blog-main wrap">
      <header><p className="eyebrow">NOTES ON ENGINEERING</p><h1>Blog<span>.</span></h1><p>Architecture decisions, applied AI, and lessons from implementation.</p></header>
      <section className="blog-empty" aria-label="Articles">
        <h2>No articles published yet.</h2>
        <a className="text-link" href="/#projects">Explore my projects <ArrowUpRight size={16} /></a>
      </section>
    </main>
    <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Vraj Patel</span><a href="/">Back to portfolio</a></footer>
  </div>;
}
