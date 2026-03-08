import Header from "@/lib/components/Header";
import News from "@/lib/components/news/News";
import Visual from "@/lib/components/Visual";

export default function Home() {
  return (
    <div>
      <Header />
      <Visual />
      <div className="pt-10 pb-15 md:pt-15 md:pb-25">
        <News />
      </div>
    </div>
  );
}
