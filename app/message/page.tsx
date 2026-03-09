import Message from "@/lib/components/Message";
import OfficeImage from "@/lib/components/OfficeImage";
import PageHeadImage from "@/lib/components/PageHeadImage";

export default function MessagePage() {
  return (
    <div>
      <PageHeadImage title="メッセージ" />
      <div className="mx-auto flex max-w-292.5 flex-col gap-y-12.5 px-5 pt-10 pb-15 md:gap-y-20 md:px-7.5 md:pt-15 md:pb-25">
        <Message />
        <OfficeImage />
      </div>
    </div>
  );
}
