import { assetPath } from "../utils/assetPath";

export default function Message() {
  return (
    <div>
      <h2 className="text-red-1 mb-3.75 text-center text-[24px] font-extrabold tracking-wider md:mb-5 md:text-[40px]">
        「仕事」をきっかけに
        <br />
        人生の新しいスタートを！
      </h2>
      <p className="mb-7.5 text-center text-[15px] leading-[1.6] font-semibold tracking-wider md:mb-10 md:text-[18px]">
        大事なお仕事探しを応援させてください
      </p>
      <div className="mx-auto max-w-212.5 px-0 md:px-7.5">
        <img
          src={assetPath("/ceo.jpg")}
          alt="社長写真"
          className="float-left mr-3.75 mb-2.5 w-25 rounded-full md:mr-6.25 md:mb-3.75"
        />
        <p className="text-[15px] leading-[1.6] font-semibold md:text-[16px]">
          はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。
          <br />
          私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。
          <br />
          株式会社STARTは、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。幸せにつながるお仕事紹介サービス
          <span className="cursor-not-allowed text-[#349bf4] underline">
            『スタート』
          </span>
          や、共通の目標を目指す仲間が見つかる人材紹介SNS
          <span className="cursor-not-allowed text-[#349bf4] underline">
            『ゴール』
          </span>
          を運営しています。また、Webデザインの基礎スキルを身につけられるスクール
          <span className="cursor-not-allowed text-[#349bf4] underline">
            『Webの学校』
          </span>
          も随時開講しています。
        </p>
      </div>
    </div>
  );
}
