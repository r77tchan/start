import News from "@/lib/components/news/News";
import Service from "@/lib/components/Service";
import Visual from "@/lib/components/Visual";

export default function Home() {
  return (
    <div>
      <Visual />
      <div className="mx-auto flex max-w-292.5 flex-col gap-y-12.5 px-5 pt-10 pb-15 md:gap-y-20 md:px-7.5 md:pt-15 md:pb-25">
        <News />
        <Service />
      </div>
    </div>
  );
}
