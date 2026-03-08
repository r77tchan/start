import NewsPart from "./NewsPart";

export default function News() {
  return (
    <div className="flex flex-col gap-x-22.5 gap-y-5 md:flex-row">
      <h2 className="text-red-1 shrink-0 text-[32px] leading-none font-extrabold tracking-wider md:text-[40px]">
        ニュース
      </h2>
      <NewsPart />
    </div>
  );
}
