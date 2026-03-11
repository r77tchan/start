import Company from "@/lib/components/Company";
import NewsPart from "@/lib/components/news/NewsPart";
import PageHeadImage from "@/lib/components/PageHeadImage";

export default function CompanyPage() {
  return (
    <div>
      <PageHeadImage title="会社概要" />
      <div className="mx-auto flex max-w-292.5 flex-col gap-y-12.5 px-5 pt-10 pb-15 md:gap-y-20 md:px-7.5 md:pt-15 md:pb-25">
        <Company />
        <NewsPart />
      </div>
    </div>
  );
}
