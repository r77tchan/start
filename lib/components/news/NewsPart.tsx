const news = [
  {
    id: 1,
    date: "2030.02.10",
    title: "コーポレートサイトをリニューアルしました。",
  },
  {
    id: 2,
    date: "2030.02.08",
    title: "採用を強化中です！一緒に働きませんか？",
  },
  {
    id: 3,
    date: "2030.02.02",
    title:
      "人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！",
  },
];

export default function NewsPart() {
  return (
    <div className="text-[15px] leading-6.25 tracking-normal">
      <ul>
        {news.map((item, index) => (
          <li
            key={item.id}
            className={`border-gray-1 border-b pb-3.75 ${index !== 0 ? "pt-3.75" : ""}`}
          >
            <a
              href="#"
              className="hover:text-red-1 flex cursor-not-allowed flex-col gap-x-5 md:flex-row"
            >
              <div className="font-medium">{item.date}</div>
              <div className="font-semibold">{item.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
