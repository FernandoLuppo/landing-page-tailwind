import { ServiceCard } from "../components/ServiceCard";
import { services } from "../constants";

export const Services: React.FC = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map(service => {
        return <ServiceCard service={service} />;
      })}
    </section>
  );
};
