import Image from "next/image";
import RotatingCircle from "./RotatingCircle";

export const PersonalImage = () => {
  return (
    <div className="flex justify-center items-center relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]">
      {}
      <RotatingCircle />

      {}
      <div className="absolute w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden">
        <Image
          src="/assets/In person-portfolio-face-edit.jpg"
          alt="Anyawe"
          layout="fill"
          objectFit="cover" 
          priority
        />
      </div>
    </div>
  );
};
