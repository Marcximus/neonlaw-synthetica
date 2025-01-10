import { ContactHeader } from "./contact/ContactHeader";
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";

export const Contact = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-32 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/rocket.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};