import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$49/mo',
    blurb: 'Perfect for small academies getting started.',
    features: [
      'Up to 500 students',
      '1 custom subdomain',
      'Courses, quizzes, assignments',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$199/mo',
    blurb: 'Scale to multiple batches and teams.',
    features: [
      'Up to 5,000 students',
      'Advanced analytics',
      'Zoom/Meet integrations',
      'Priority support',
    ],
    cta: 'Upgrade to Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    blurb: 'For 5,000+ students and custom needs.',
    features: [
      'Unlimited tenants and users',
      'SSO, SCIM, audit logs',
      'Dedicated cluster & SLA',
      'White‑glove onboarding',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

const TierCard = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className={`relative flex flex-col rounded-2xl border bg-slate-900/60 p-6 backdrop-blur-md ${
      t.highlight
        ? 'border-fuchsia-500/40 shadow-xl shadow-fuchsia-500/20'
        : 'border-white/10 shadow-lg shadow-black/20'
    }`}
  >
    <div className="mb-3 text-sm text-slate-300/80">{t.name}</div>
    <div className="text-3xl font-semibold text-white">{t.price}</div>
    <div className="mt-2 text-sm text-slate-300/80">{t.blurb}</div>
    <ul className="mt-6 space-y-2 text-sm text-slate-200/90">
      {t.features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition ${
        t.highlight
          ? 'bg-fuchsia-500 text-white hover:bg-fuchsia-600'
          : 'bg-white/10 text-white hover:bg-white/15'
      }`}
    >
      {t.cta}
    </a>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-x-0 -top-20 z-0 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
          >
            Simple, scalable pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300/80"
          >
            Choose the plan that fits your institution today and upgrade as you grow.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
