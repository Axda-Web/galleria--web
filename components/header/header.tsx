import { GalleriaLogo } from "../galleria-logo";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b text-gray-500 font-bold text-xs">
      <GalleriaLogo />
      <div className="font-serif">START SLIDESHOW</div>
    </header>
  );
}
