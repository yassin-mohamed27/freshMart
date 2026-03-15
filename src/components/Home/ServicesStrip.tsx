"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCcw, BadgePercent } from "lucide-react";

export default function ServicesStrip() {
  const items = [
    { t: "Fast delivery", d: "Quick shipping with reliable couriers.", Icon: Truck },
    { t: "Secure checkout", d: "Protected payments and trusted methods.", Icon: ShieldCheck },
    { t: "Easy returns", d: "Hassle-free returns on eligible items.", Icon: RefreshCcw },
  ];

  return (
    <section className="relative bg-white">
      {/* الخلفية الملونة الكبيرة */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-65 w-205 -translate-x-1/2 
            bg-linear-to-r from-emerald-200/60 via-emerald-400/40 to-emerald-600/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-10 sm:py-12 relative">
        
        {/* الجزء اللي فوق: badge + عنوان + وصف */}
        <div className="space-y-2 max-w-xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
          >
            <BadgePercent className="size-4" />
            Premium services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-green-600"
          >
            Our <span className="bg-linear-to-r from-green-400 via-emerald-400 to-green-700 bg-clip-text text-transparent">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-zinc-600"
          >
            Enjoy fast delivery, secure checkout, and easy returns — tailored for you.
          </motion.p>
        </div>

        {/* الكروت */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ t, d, Icon }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* hover overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 
                  group-hover:opacity-100 bg-linear-to-b from-emerald-200/10 via-emerald-300/10 to-transparent" />
              
              <div className="relative flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm">
                  <Icon className="size-5 text-emerald-700" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg font-extrabold text-emerald-900">{t}</div>
                  <div className="mt-1 text-sm text-emerald-600">{d}</div>
                  <div className="mt-4 h-px w-full bg-emerald-200/80" />
                  <div className="mt-3 text-xs text-emerald-500">Premium experience • Trusted service</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}