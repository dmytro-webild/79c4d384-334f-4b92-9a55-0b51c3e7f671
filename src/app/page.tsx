"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="AK Mobile Mechanic"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="AK Mobile Mechanic & Recovery"
      description="Norwich's most trusted independent mobile mechanic. 24/7 roadside assistance and repairs at your home or work."
      buttons={[
        {
          text: "Call Now",
          href: "tel:07572369262",
        },
        {
          text: "Request Callout",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-using-diagnostic-tool-while-checking-voltage-car-battery-auto-repair-shop_637285-4265.jpg?_wi=1",
          imageAlt: "Mobile mechanic working",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-using-diagnostic-tool-while-checking-voltage-car-battery-auto-repair-shop_637285-4265.jpg?_wi=2",
          imageAlt: "Mobile mechanic assistance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-using-diagnostic-tool-while-checking-voltage-car-battery-auto-repair-shop_637285-4265.jpg?_wi=3",
          imageAlt: "24/7 recovery service",
        },
      ]}
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "24/7 Availability",
          author: "AK Mobile",
          description: "We operate around the clock, including bank holidays and weekends.",
          tags: [
            "Emergency",
            "Available",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-checking-car-parts_1170-1338.jpg?_wi=1",
        },
        {
          id: "f2",
          title: "Transparent Pricing",
          author: "AK Mobile",
          description: "No hidden costs, honest quotes, and competitive parts sourcing.",
          tags: [
            "Honest",
            "Pricing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11864.jpg?_wi=1",
        },
        {
          id: "f3",
          title: "350+ 5-Star Reviews",
          author: "AK Mobile",
          description: "Trusted by hundreds of private and fleet customers across Norfolk.",
          tags: [
            "Trusted",
            "Verified",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car-engine_1170-1135.jpg?_wi=1",
        },
      ]}
      title="Why Choose AK Mobile Mechanic?"
      description="We offer honest, transparent service across Norfolk with no need for a garage visit."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Servicing & MOT Prep",
          price: "From £85",
          variant: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-checking-car-parts_1170-1338.jpg?_wi=2",
        },
        {
          id: "p2",
          name: "Brake & Disc Repairs",
          price: "Competitive",
          variant: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11864.jpg?_wi=2",
        },
        {
          id: "p3",
          name: "Breakdown & Recovery",
          price: "Contact us",
          variant: "Urgent",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-servicing-car-engine_1170-1135.jpg?_wi=2",
        },
      ]}
      title="Our Professional Services"
      description="Comprehensive mechanical services brought directly to your location in Norwich and surrounding areas."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Customer 1",
          role: "Private Driver",
          company: "Norwich",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-drinking-coffee-by-his-car_1303-31588.jpg",
        },
        {
          id: "t2",
          name: "Customer 2",
          role: "Private Driver",
          company: "Norfolk",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171292.jpg",
        },
        {
          id: "t3",
          name: "Customer 3",
          role: "Fleet Operator",
          company: "Norwich",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-adult-daughter-mature-father-meeting-with-family-consultant-co-working-shaking-hands_74855-15154.jpg",
        },
        {
          id: "t4",
          name: "Customer 4",
          role: "Private Driver",
          company: "Norfolk",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-driving-car-positive-emotion-side-glance-daylight_169016-68710.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Trusted by our community in Norwich."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Need a Mobile Mechanic?"
      description="Call Alex at 07572 369262 or fill in the form below for a quick response."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe the issue...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/city-bus-rural-road-public-transport-motion_169016-69949.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          items: [
            {
              label: "Norwich Area",
              href: "#",
            },
            {
              label: "24/7 Breakdown",
              href: "tel:07572369262",
            },
          ],
        },
      ]}
      logoText="AK Mobile Mechanic"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
