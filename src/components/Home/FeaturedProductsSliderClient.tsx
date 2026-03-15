"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ChevronLeft, ChevronRight, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturedProductsSliderClient({ products }: { products: any[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!products?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-white text-emerald-900"
    >
      <div className="container mx-auto px-6 py-10 sm:py-12">
        
        {/* badge + title + description */}
        <div className="space-y-2 max-w-xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
          >
            <BadgePercent className="size-4" />
            Hand-picked for you
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-extrabold"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-zinc-600"
          >
            Swipe to explore our curated selection — top picks just for you.
          </motion.p>
        </div>

        {/* slider */}
        <div className="mt-5 rounded-3xl border border-emerald-500 bg-emerald-50/50 p-3 sm:p-4">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory
              pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((p) => (
              <motion.div
                key={p._id}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="snap-start shrink-0 w-[78%] xs:w-[58%] sm:w-[42%] md:w-[32%] lg:w-[24%]"
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-emerald-600">Swipe on mobile • Use arrows on desktop</div>
            <Link
              href="/products"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition"
            >
              View all →
            </Link>
          </div>
        </div>

        {/* arrows */}
        <div className="hidden sm:flex justify-end mt-4 gap-2">
          <button
            onClick={() => scrollByCards("left")}
            className="grid size-10 place-items-center rounded-2xl border border-emerald-500 bg-emerald-50/30
              hover:bg-emerald-100 transition active:scale-[0.98]"
          >
            <ChevronLeft className="size-5 text-emerald-700" />
          </button>
          <button
            onClick={() => scrollByCards("right")}
            className="grid size-10 place-items-center rounded-2xl border border-emerald-500 bg-emerald-50/30
              hover:bg-emerald-100 transition active:scale-[0.98]"
          >
            <ChevronRight className="size-5 text-emerald-700" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}