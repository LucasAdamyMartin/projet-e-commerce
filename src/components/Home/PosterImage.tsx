import { ButtonNavigation } from "../Button/ButtonNavigation";
import { Image } from "../Image";

export function PosterImage() {
  return (
    <div className="flex flex-col w-full lg:h-full">
      <Image
        src="/img/chaussure_home.png"
        alt="chaussure home"
        className="flex justify-center items-center z-10"
      />
      <ButtonNavigation
        colorOnClick="bg-secondary"
        containerClasses="flex flex-row justify-end items-center space-x-4 mr-40 mb-20"
      />
    </div>
  );
}
