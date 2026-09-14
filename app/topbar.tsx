'use client';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Globe, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const sections = [['about', 'About'], ['projects', 'Projects'], ['contact', 'Contact']];

export function Topbar({ page = 'home' }: { page?: 'home' | 'blog' }) {
  const [active, setActive] = useState('');
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (page !== 'home') return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 108;
    window.history.pushState(null, '', `#${id}`);
    setActive(id);
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };
  useEffect(() => {
    if (page !== 'home') return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + 180;
      let current = sections[0][0];
      for (const [id] of sections) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        const hashId = window.location.hash.slice(1);
        if (sections.some(([id]) => id === hashId)) current = hashId;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); window.removeEventListener('hashchange', schedule); };
  }, [page]);

  return <header className="topbar">
    <div className="topbar-inner wrap">
      <a className="wordmark" href={page === 'home' ? '#main' : '/'} aria-label="Vraj Patel home">vp<span>.</span></a>
      <nav className="topbar-pages" aria-label="Main navigation">
        {sections.map(([id, label]) => <a key={id} href={`${page === 'home' ? '' : '/'}#${id}`} onClick={(event) => handleSectionClick(event, id)} aria-current={page === 'home' && active === id ? 'location' : undefined}>{label}</a>)}
        <a href="/blog/" aria-current={page === 'blog' ? 'page' : undefined}>Blog</a>
      </nav>
      <div className="topbar-tools">
        <nav className="topbar-socials" aria-label="Elsewhere">
          <a href="https://github.com/vraj6198" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.75 10.75 0 0 1 5.6 0c2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg></a>
          <a href="https://www.linkedin.com/in/vraj6198/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M11.5 17v-7m0 3c0-4 5-4 5 0v4"/><circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://twitter.com/vraj6198" target="_blank" rel="noreferrer" aria-label="Twitter" title="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.86h1.73L8.26 4.03H6.4L17.8 19.86Z"/></svg></a>
          <a href="mailto:patelvraj67@gmail.com" aria-label="Email Vraj Patel" title="Email"><Mail size={18} /></a>
          <a href="https://vraj6198.github.io" target="_blank" rel="noreferrer" aria-label="Earlier portfolio" title="Earlier portfolio"><Globe size={18} /></a>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  </header>;
}
