import { assetPath } from "../utils/assetPath";

export default function OfficeImage() {
  return (
    <div>
      <img
        src={assetPath("/office.jpg")}
        alt="オフィス写真"
        className="h-65 w-full object-cover md:h-auto"
      />
    </div>
  );
}
