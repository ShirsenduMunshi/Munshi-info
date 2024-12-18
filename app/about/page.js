// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Our Blogging Platform
          </h1>
          <p className="text-lg text-muted-foreground">
            We're passionate about creating a space where ideas flourish and voices
            are heard. Our platform empowers writers to share their stories with
            the world.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">Explore Our Blog</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/about-hero.jpg" // Add your image
            alt="About Hero Image"
            width={500}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Empower Writers</h3>
            <p className="text-muted-foreground">
              We provide the tools and platform needed for writers to share their
              expertise and creativity with a global audience.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Foster Community</h3>
            <p className="text-muted-foreground">
              Building connections between writers and readers, creating meaningful
              discussions and relationships.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Promote Knowledge</h3>
            <p className="text-muted-foreground">
              Facilitating the exchange of ideas and knowledge through
              high-quality content and engagement.
            </p>
          </Card>
        </div>
      </section>
      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Have questions? We'd love to hear from you.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
