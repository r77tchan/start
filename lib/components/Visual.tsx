import { assetPath } from "@/lib/utils/assetPath";

export default function Visual() {
  return (
    <div className="relative h-115 md:h-150">
      <picture>
        <source media="(min-width: 768px)" srcSet={assetPath("/pc_mv.jpg")} />
        <img
          src={assetPath("/sp_mv.jpg")}
          alt=""
          className="absolute -z-1 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="flex h-full flex-col items-center justify-center leading-none text-white">
        <h2 className="mb-2.5 text-[80px] font-bold tracking-[0px] [text-shadow:0_4px_6px_rgb(0_0_0/25%)] md:text-[160px]">
          START
        </h2>
        <p className="text-[20px] font-bold tracking-widest md:text-[24px]">
          仕事に最高のスタートを
        </p>
      </div>
    </div>
  );
}
