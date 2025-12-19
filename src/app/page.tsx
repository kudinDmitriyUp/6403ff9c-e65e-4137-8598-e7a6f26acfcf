"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import SplitAboutCards from "@/components/sections/about/SplitAboutCards";
import TestimonialCardEight from "@/components/sections/testimonial/TestimonialCardEight";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSplit from "@/components/sections/footer/FooterSplit";
import { Phone, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
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
        <TestimonialCardEight
          title="Stories of Justice"
          description="Hear from those whose lives have been transformed through our legal defense support and advocacy."
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Michael Torres",
              role: "Exonerated Client",
              company: "Defense Fund Supporter",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Michael Torres"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Family Advocate",
              company: "Community Member",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140151637-4n68pd8r.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "3",
              name: "James Williams",
              role: "Defense Attorney",
              company: "Legal Partner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              imageAlt: "James Williams"
            },
            {
              id: "4",
              name: "Maria Gonzalez",
              role: "Rights Advocate",
              company: "Justice Supporter",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140153329-bmp1nqc3.jpg",
              imageAlt: "Maria Gonzalez"
            }
          ]}
          textboxLayout="default"
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