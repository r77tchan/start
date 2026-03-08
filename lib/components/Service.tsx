const service = [
  {
    id: 1,
    title: "人材紹介業",
    description:
      "新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。",
    image: "work",
  },
  {
    id: 2,
    title: "スクール事業",
    description: "オンラインでWeb制作を学べるスクールを運営しています。",
    image: "location_city",
  },
  {
    id: 3,
    title: "Webメディア運営",
    description:
      "人事系メディアやWebデザイン関連のメディアなどを複数運営しています。",
    image: "desktop_windows",
  },
];

export default function Service() {
  return (
    <div className="relative">
      <h2 className="text-red-1 text-[32px] leading-none font-extrabold tracking-wider before:absolute before:-top-1 before:-right-2 before:-z-1 before:text-[70px] before:font-bold before:text-[#f2f2f2] before:content-['SERVICE'] md:text-[40px] md:before:-top-10 md:before:-right-5 md:before:text-[168px]">
        サービス
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 md:mt-12.5 md:grid-cols-3 md:gap-7.5">
        {service.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white px-7.5 py-10 shadow-[0_3px_21px_rgba(0,0,0,0.16)] md:p-12.5"
          >
            <div className="mb-1.25 text-center md:mb-2.5">
              <span className="material-icons-round text-red-1 text-[60px]! leading-none md:text-[48px]!">
                {item.image}
              </span>
            </div>
            <h3 className="text-center text-[16px] leading-[1.1em] font-extrabold md:text-[18px]">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-[1.7] font-semibold tracking-normal md:mt-3.75">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
