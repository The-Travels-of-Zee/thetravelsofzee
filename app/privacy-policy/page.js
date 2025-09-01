import Markdown from "react-markdown";
import { privacyPolicy } from "@/constants";

const PrivacyPolicy = () => {
  return (
    <main className="bg-gradient-to-b from-0% to-10% from-secondary/60 to-accent/10 min-h-screen pt-32 pb-20">
      <section className="max-w-screen-lg mx-auto px-4">
        <article className="prose prose-sm md:prose-lg">
          <Markdown>{privacyPolicy}</Markdown>
        </article>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
