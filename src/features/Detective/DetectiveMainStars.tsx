import star from "../../assets/shared/stars/1star.png";
import twostars from "../../assets/shared/stars/2stars.png";
import threestars from "../../assets/shared/stars/3stars.png";
import fourstars from "../../assets/shared/stars/4stars.png";
import fivestars from "../../assets/shared/stars/5stars.png";

type DetectiveMainStarsTypes = {
  numberOfStars: number;
};

export default function DetectiveMainStars({
  numberOfStars = 1,
}: DetectiveMainStarsTypes) {
  const starImage =
    numberOfStars === 1
      ? star
      : numberOfStars === 2
      ? twostars
      : numberOfStars === 3
      ? threestars
      : numberOfStars === 4
      ? fourstars
      : fivestars;
  return (
    <img
      className="h-[3rem] text-orange-500 w-[9rem] object-cover"
      src={starImage}
      alt="Stars"
    />
  );
}
