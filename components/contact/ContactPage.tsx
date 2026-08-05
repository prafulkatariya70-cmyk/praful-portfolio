import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <ContactHeader />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        <ContactInfoCard />

        <ContactForm />

      </div>

    </section>
  );
}