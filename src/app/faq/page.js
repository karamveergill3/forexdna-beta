import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ — ForexDNA",
};

const CONTACT_ANSWER =
  "For further information, contact forexdnaltd@gmail.com.";

const faqs = [
  { q: "What is ForexDNA?", a: CONTACT_ANSWER },
  { q: "How does the strategy work?", a: CONTACT_ANSWER },
  { q: "Is my money safe?", a: CONTACT_ANSWER },
  { q: "What returns can I expect?", a: CONTACT_ANSWER },
  { q: "When does live trading start for my account?", a: CONTACT_ANSWER },
  { q: "What broker do I need to use?", a: CONTACT_ANSWER },
  { q: "How is risk managed?", a: CONTACT_ANSWER },
  { q: "Can I withdraw my funds at any time?", a: CONTACT_ANSWER },
  { q: "Is ForexDNA regulated?", a: CONTACT_ANSWER },
  { q: "How do I get started?", a: CONTACT_ANSWER },
];

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <span className="eyebrow text-[11px] text-accent-2">
            Frequently asked questions
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Common questions
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
            Can&rsquo;t find what you&rsquo;re looking for? Reach us directly
            at{" "}
            <a
              href="mailto:forexdnaltd@gmail.com"
              className="text-accent-2 hover:underline"
            >
              forexdnaltd@gmail.com
            </a>
            .
          </p>

          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
