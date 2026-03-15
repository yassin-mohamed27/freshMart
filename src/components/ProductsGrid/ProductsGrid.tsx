import Image from "next/image";

export default function ProductsGrid({ products }: any) {
    return (
       <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {products.map((p: any) => (
    <div
      key={p._id}
      className="group rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm overflow-hidden
                 transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative aspect-square">
        <Image
          src={p.imageCover}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold line-clamp-1 text-emerald-900">
          {p.title}
        </p>
        <p className="text-green-700 font-bold mt-1">
          {p.price} EGP
        </p>
      </div>
    </div>
  ))}
</div>
    );
}
