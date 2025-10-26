import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[720px] grid place-items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gentle gradient vignettes that don't block 3D interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            <span className="tracking-wide text-white/80">Introducing EduVerse</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-slate-300 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl">
            Launch Your Own LMS in Minutes
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            A multi-tenant, white‑labeled platform for schools, academies, and enterprises. Bring your brand, scale to 100+ institutions, and deliver a futuristic learning experience.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/25 transition hover:bg-fuchsia-600"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Start Your LMS
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
