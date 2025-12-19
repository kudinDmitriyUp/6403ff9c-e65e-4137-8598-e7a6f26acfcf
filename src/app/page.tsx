"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import { Phone, Mail, Package } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="circleGradient"
      cardStyle="elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Artemis Defense Fund"
          navItems={[
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Support Us",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="ARTEMIS"
          description="Providing comprehensive legal defense support to those facing unfair prosecution. We stand for justice, protect rights, and ensure equal access to quality legal representation."
          buttons={[
            { text: "Learn More", href: "#about" },
            { text: "Donate Now", href: "#contact" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140149342-6xlgfqt3.jpg"
          imageAlt="Justice and legal protection"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="Our Mission"
          description="Artemis Defense Fund is dedicated to ensuring that everyone has access to quality legal representation, regardless of their financial circumstances. We believe in the fundamental right to a fair defense."
          tag="About Us"
          features={[
            {
              id: "legal-access",
              title: "Equal Justice Access",
              description: "We eliminate financial barriers to quality legal defense, ensuring every individual receives fair representation.",
              label: "Core Mission"
            },
            {
              id: "expert-support",
              title: "Expert Legal Team",
              description: "Our network includes experienced attorneys dedicated to defending the rights of those who need support most.",
              label: "Our Strength"
            }
          ]}
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Artemis Defense Fund has been instrumental in my fight for justice. Their team provided expert legal support when I needed it most, and I can't thank them enough for standing by me."
          rating={5}
          author="Michael Torres, Exonerated Client"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              alt: "Michael Torres"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140151637-4n68pd8r.jpg",
              alt: "Sarah Johnson"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              alt: "James Williams"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140153329-bmp1nqc3.jpg",
              alt: "Maria Gonzalez"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          products={[
            {
              id: "1",
              name: "Artemis Defense T-Shirt",
              price: "$35",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140149342-6xlgfqt3.jpg",
              imageAlt: "Artemis Defense T-Shirt",
              isFavorited: false
            },
            {
              id: "2",
              name: "Justice Hoodie",
              price: "$65",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Justice Hoodie",
              isFavorited: false
            },
            {
              id: "3",
              name: "Defense Fund Cap",
              price: "$25",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140151637-4n68pd8r.jpg",
              imageAlt: "Defense Fund Cap",
              isFavorited: false
            },
            {
              id: "4",
              name: "Rights Advocate Tote",
              price: "$40",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              imageAlt: "Rights Advocate Tote",
              isFavorited: false
            },
            {
              id: "5",
              name: "Equal Justice Bracelet",
              price: "$20",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140153329-bmp1nqc3.jpg",
              imageAlt: "Equal Justice Bracelet",
              isFavorited: false
            },
            {
              id: "6",
              name: "Legal Shield Mug",
              price: "$18",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140149342-6xlgfqt3.jpg",
              imageAlt: "Legal Shield Mug",
              isFavorited: false
            },
            {
              id: "7",
              name: "Fair Defense Sweatpants",
              price: "$55",
              variant: "default",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Fair Defense Sweatpants",
              isFavorited: false
            }
          ]}
          title="Our Merchandise"
          description="Support our mission with branded merchandise. Every purchase helps fund legal defense for those in need."
          tag="Shop"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our defense fund, services, and how to get involved."
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "Who is eligible for legal defense support?",
              content: "We provide support to individuals who face prosecution and cannot afford quality legal representation. Eligibility is determined through our application process, which considers financial need and case circumstances."
            },
            {
              id: "2",
              title: "How do I apply for defense fund support?",
              content: "Contact us through our website with details about your case. Our team will review your application and guide you through the next steps in our process."
            },
            {
              id: "3",
              title: "How can I contribute to the fund?",
              content: "Donations are welcome and tax-deductible. You can donate online through our secure payment system or contact us for alternative giving methods."
            },
            {
              id: "4",
              title: "What legal services are covered?",
              content: "We cover comprehensive legal representation including case preparation, court representation, appeals, and consultation with experienced defense attorneys."
            },
            {
              id: "5",
              title: "Is my case information confidential?",
              content: "Yes, we maintain strict confidentiality regarding all case information and personal details shared with our organization. Privacy is paramount."
            },
            {
              id: "6",
              title: "How are attorneys selected for cases?",
              content: "We work with vetted, experienced defense attorneys who are dedicated to providing quality representation. Attorneys are matched to cases based on expertise and experience."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to support justice and equal legal representation? Join us in our mission to ensure fair defense for all."
          animationType="reveal-blur"
          buttons={[
            { text: "Donate Today", href: "#" },
            { text: "Get Involved", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Artemis Defense Fund"
          title="Fighting for justice and equal legal rights for all."
          columns={[
            {
              title: "Organization",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Mission", href: "#" },
                { label: "Team", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Get Involved",
              items: [
                { label: "Donate", href: "#" },
                { label: "Volunteer", href: "#" },
                { label: "Partner With Us", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Phone, text: "(555) 123-4567" },
            { icon: Mail, text: "info@artemisdefense.org" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}