import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Multi‑Tenant by Design',
    desc: 'Spin up isolated, branded LMS instances per institution with custom domains and themes.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Enterprise‑grade Security',
    desc: 'Role‑based access, SSO-ready auth, audit trails, and fine‑grained permissions.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Deep Analytics',
    desc: 'Track engagement, progress, and revenue with beautiful, actionable dashboards.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'AI & Integrations',
    desc: 'AI tutor, Zoom/Google Meet, S3 storage, and real‑time notifications out of the box.',
  },
];

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 shadow-lg shadow-black/30"
  >
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/15 text-fuchsia-400 ring-1 ring-inset ring-fuchsia-500/30">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{desc}</p>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-fuchsia-400/30" />
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-x-0 -top-24 z-0 h-48 bg-gradient-to-b from-fuchsia-500/5 to-transparent blur-2xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
          >
            Everything you need to run a modern LMS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300/80"
          >
            EduVerse brings multi‑tenancy, analytics, and AI together in a beautifully crafted experience.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
