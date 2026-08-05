"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyDubaiSection from "@/components/WhyDubaiSection";
import WhySheOwnsSection from "@/components/WhySheOwnsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExclusiveBenefitsSection from "@/components/ExclusiveBenefitsSection";
import MeetFoundersSection from "@/components/MeetFoundersSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import WorkshopsCommunitySection from "@/components/WorkshopsCommunitySection";
import InvestmentGuideSection from "@/components/InvestmentGuideSection";
import FAQSection from "@/components/FAQSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Footer from "@/components/Footer";
import IntroCover from "@/components/IntroCover";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export default function Home() {
  const [coverDismissed, setCoverDismissed] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#2B2B2B] selection:bg-[#D6BB88]/30 selection:text-[#21102F] relative">
      {/* Full-Screen Interactive Entrance Cover */}
      <IntroCover onDismiss={() => setCoverDismissed(true)} />

      {/* Email capture popup — triggers 45s after cover dismissal */}
      <EmailCapturePopup coverDismissed={coverDismissed} />

      {/* Main Landing Page Content */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyDubaiSection />
      <WhySheOwnsSection />
      <HowItWorksSection />
      <ExclusiveBenefitsSection />
      <MeetFoundersSection />
      <SuccessStoriesSection />
      <WorkshopsCommunitySection />
      <InvestmentGuideSection />
      <FAQSection />
      <ConsultationFormSection />
      <Footer />
    </main>
  );
}
