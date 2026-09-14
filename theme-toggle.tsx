'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
export function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{const query=window.matchMedia('(prefers-color-scheme: dark)');const sync=()=>{let preference:string|null=null;try{preference=localStorage.getItem('portfolio-theme')}catch{}const next=preference==='dark'||(preference!=='light'&&query.matches);document.documentElement.dataset.theme=next?'dark':'light';setDark(next)};sync();query.addEventListener('change',sync);window.addEventListener('storage',sync);return()=>{query.removeEventListener('change',sync);window.removeEventListener('storage',sync)}},[]);
 const change=(next:boolean)=>{setDark(next);document.documentElement.dataset.theme=next?'dark':'light';try{localStorage.setItem('portfolio-theme',next?'dark':'light')}catch{}};
 return <div className="theme-toggle"><Sun size={16} aria-hidden="true"/><Switch checked={dark} onCheckedChange={change} aria-label="Dark theme" className="theme-switch"/><Moon size={16} aria-hidden="true"/></div>;
}
