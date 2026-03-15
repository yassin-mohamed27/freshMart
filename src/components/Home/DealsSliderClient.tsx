"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BadgePercent } from "lucide-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function DealsSliderClient({ products }: { products: any[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!products?.length) return null;

  return (
    <section className="relative bg-white text-emerald-900">
      <div className="container mx-auto px-6 pb-14 relative">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-50/50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <BadgePercent className="size-4 text-emerald-500" />
              Limited-time discounts
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-900">
              Best{" "}
              <span className="bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Deals
              </span>
            </h2>
            <p className="text-sm text-emerald-700 max-w-xl">
              Save more on discounted products — swipe to explore.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollByCards("left")}
                className="grid size-10 place-items-center rounded-2xl border border-emerald-500 bg-white shadow-sm hover:bg-emerald-50 transition active:scale-[0.98]"
                aria-label="Previous"
              >
                <ChevronLeft className="size-5 text-emerald-500" />
              </button>
              <button
                onClick={() => scrollByCards("right")}
                className="grid size-10 place-items-center rounded-2xl border border-emerald-500 bg-white shadow-sm hover:bg-emerald-50 transition active:scale-[0.98]"
                aria-label="Next"
              >
                <ChevronRight className="size-5 text-emerald-500" />
              </button>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-500 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 transition active:scale-[0.98]"
            >
              View all →
            </Link>
          </div>
        </div>

        {/* Slider */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl border bg-emerald-50/50 p-3 sm:p-4 shadow-sm"
        >
          {products.map((p) => (
            <motion.div
              key={p._id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="snap-start shrink-0 w-[78%] sm:w-[42%] md:w-[32%] lg:w-[24%]"
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}