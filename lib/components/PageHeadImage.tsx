import { assetPath } from "../utils/assetPath";

type Props = {
  title: string;
};

export default function PageHeadImage({ title }: Props) {
  return (
    <div className="relative h-40 md:h-47.5">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={assetPath("/pc_header.jpg")}
        />
        <img
          src={assetPath("/sp_header.jpg")}
          alt=""
          className="absolute -z-1 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="flex h-full flex-col items-center justify-center leading-none text-white">
        <h1 className="text-[28px] font-extrabold tracking-widest md:text-[40px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
