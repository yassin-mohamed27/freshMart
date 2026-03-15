"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartIcon({
  serverCartNum,
  cartId,
  userId,
}: {
  serverCartNum: number;
  cartId: string;
  userId: string;
}) {
  //  نمنع Hydration Error
  const [mounted, setMounted] = useState(false);

  //  رقم الكارت
  const [cartNum, setCartNum] = useState(0);

  //  mount
  useEffect(() => {
    setMounted(true);
    setCartNum(serverCartNum);
  }, [serverCartNum]);

  //  تخزين IDs
  useEffect(() => {
    if (!mounted) return;

    if (cartId) localStorage.setItem("cartId", cartId);
    if (userId) localStorage.setItem("userId", userId);
  }, [cartId, userId, mounted]);

  //  Event Listener
  useEffect(() => {
    if (!mounted) return;

    const handler = (e: Event) => {
      const ce = e as CustomEvent<number>;
      setCartNum(Number(ce.detail) || 0);
    };

    window.addEventListener("cartUpdate", handler);
    return () => window.removeEventListener("cartUpdate", handler);
  }, [mounted]);

  //  يمنع mismatch
  if (!mounted) return null;

  return (
    <Link href="/cart" className="outline-none">
  <div
    className="relative rounded-2xl bg-emerald-900 ring-1 ring-emerald-800 p-2 
      transition-all duration-300
      hover:bg-emerald-800/80 hover:ring-emerald-700 active:scale-[0.98]"
  >
    <ShoppingCartIcon
      className="w-5 h-5 text-emerald-200 
        hover:text-emerald-400 transition-colors duration-300"
    />

    <span
      className="absolute -top-2 -right-2 min-w-5 h-5 px-1.5 
        grid place-items-center rounded-full bg-emerald-600 
        text-white text-[11px] font-extrabold ring-2 ring-emerald-950"
    >
      {cartNum}
    </span>
  </div>
</Link>
  );
}