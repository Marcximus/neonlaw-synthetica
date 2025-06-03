
import { InfiniteTextMarquee } from "../ui/infinite-text-marquee";

export const LegalServicesMarquee = () => {
  const services = [
    "Kapitalforhøjelse",
    "Nye Vedtægter", 
    "Ansættelseskontrakt",
    "Ejeraftale",
    "Køb og Salg af Selskab",
    "Generalforsamling",
    "Oprettelse af Nyt Selskab",
    "Investeringsaftale",
    "Bestyrelsesreferat"
  ];

  const servicesText = services.join(" • ");

  return (
    <div className="my-8 opacity-60">
      <InfiniteTextMarquee
        text={servicesText}
        speed={40}
        fontSize="1rem"
        textColor="#9CA3AF"
        hoverColor="#F97316"
      />
    </div>
  );
};
