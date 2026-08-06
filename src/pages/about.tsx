import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sprout, ShoppingBag, Brain } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container px-4 py-24 space-y-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            Our mission is <br />
            <span className="text-primary italic">sustainability.</span>
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Farmora is building the world's most practical knowledge base for organic farming, powered by advanced AI and community wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-video rounded-[3rem] bg-primary/10 overflow-hidden">
            <img 
              src="/images/farmora-hero.png" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold">Why Farmora?</h2>
            <p className="text-lg text-muted-foreground">
              We believe that organic farming shouldn't be a mystery. By using AI to analyze and structure user-generated content, we turn raw video tutorials into actionable, step-by-step guides for everyone.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-primary">100% Organic</h4>
                <p className="text-sm text-muted-foreground text-pretty">Proven techniques from real farmers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">AI Powered</h4>
                <p className="text-sm text-muted-foreground text-pretty">Structured insights and translations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
