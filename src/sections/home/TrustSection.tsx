import { brandsServed } from "@/data/homeContent";

export function TrustSection() {
  const looped = [...brandsServed, ...brandsServed];

  return (
    <section className="border-y border-border bg-surface py-14 lg:py-16">
      <div className="container-content">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary/70">
          Brands We Have Served
        </p>
      </div>
      
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-10 md:gap-14">
          {looped.map((brand, i) => (
            // 1. Ek fixed size ka DIV (h-16 w-32 aur bade screens ke liye h-20 w-40) banaya hai.
            // 2. 'flex items-center justify-center' se choti/kam height wali image automatically center ho jayegi.
            <div 
              key={`${brand.name}-${i}`} 
              className="flex h-16 w-32 shrink-0 items-center justify-center sm:h-20 sm:w-40"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                title={brand.name}
                // max-h-full aur object-contain ensure karega ki image is div se bahar na nikle aur stretch na ho.
                className="max-h-full max-w-full object-contain transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); } 
        }
      `}</style>
    </section>
  );
}