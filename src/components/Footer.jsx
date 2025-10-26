import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-fuchsia-500 text-white">
              <Star className="h-4 w-4" />
            </div>
            <span className="font-semibold">EduVerse</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EduVerse, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
