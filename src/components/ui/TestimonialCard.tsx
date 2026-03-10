import { AnimatedSection } from "./AnimatedSection";

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  delay?: number;
}

export function TestimonialCard({
  text,
  author,
  role,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <AnimatedSection animation="fadeInUp" delay={delay}>
      <div className="bg-bg-card border border-border p-8 h-full flex flex-col">
        <div className="text-accent text-4xl font-heading mb-4">&ldquo;</div>
        <p className="text-text-muted leading-relaxed flex-1 mb-6">{text}</p>
        <div>
          <div className="font-heading font-bold text-lg">{author}</div>
          <div className="text-secondary text-sm">{role}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
