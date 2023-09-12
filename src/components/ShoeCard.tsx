import { useCallback } from "react";

interface IProps {
  shoe: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (img: string) => void;
  bigShoeImg: string;
}

export const ShoeCard: React.FC<IProps> = ({
  shoe,
  bigShoeImg,
  changeBigShoeImage
}) => {
  const handleClick = useCallback(() => {
    if (bigShoeImg !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe);
    }
  }, [bigShoeImg]);

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
