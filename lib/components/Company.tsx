const tableData = [
  {
    id: 1,
    label: "社名",
    value: "株式会社START",
  },
  {
    id: 2,
    label: "設立",
    value: "2025.02.10",
  },
  {
    id: 3,
    label: "代表取締役",
    value: "ショーン・デイビット・ジュニア",
  },
  {
    id: 4,
    label: "資本金",
    value: "10,000,000円",
  },
  {
    id: 5,
    label: "所在地",
    value: "〒555-5555 東京都千代田区 スタートビルディング 606",
  },
];

export default function Company() {
  return (
    <div>
      <table className="w-full">
        <tbody>
          {tableData.map((data) => (
            <tr
              key={data.id}
              className="border-gray-1 border-b text-left text-[14px] leading-5.25 tracking-normal md:text-[15px] md:leading-[1.15]"
            >
              <th className="w-25 py-5 font-extrabold md:w-[20%] md:p-7.5">
                {data.label}
              </th>
              <td className="py-5 font-medium md:p-7.5">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030380878!2d139.76493611544558!3d35.68123618019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1603888975255!5m2!1sja!2sjp"
          width="100%"
          height="auto"
          className="mt-12.5 h-75 md:h-100"
          allowFullScreen
          aria-hidden="false"
          tabIndex={1}
        ></iframe>
        <p className="mt-3.75 text-right md:mt-5">
          <a
            className="text-[12px] font-medium tracking-normal text-[#349bf4] underline md:text-[14px]"
            href="https://goo.gl/maps/b5AqA853AfsPSw1Y7"
            target="_blank"
          >
            Google mapで見る
          </a>
        </p>
      </div>
    </div>
  );
}
