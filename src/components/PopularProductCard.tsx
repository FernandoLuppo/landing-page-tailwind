import star from "../assets/icons/star.svg";

interface IProps {
  product: {
    imgURL: string;
    name: string;
    price: string;
  };
}

export const PopularProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8">
        <div className="flex items-center justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {product.name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};
