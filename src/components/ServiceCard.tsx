interface IProps {
  service: {
    imgURL: string;
    label: string;
    subtext: string;
  };
}

export const ServiceCard: React.FC<IProps> = ({ service }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:,im-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-3xl leading-normal font-bold">
        {service.label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {service.subtext}
      </p>
    </div>
  );
};
