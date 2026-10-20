"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySheOwnsSection from "@/components/WhySheOwnsSection";
import CommunitySection from "@/components/CommunitySection";
import MeetFoundersSection from "@/components/MeetFoundersSection";
import WorkshopsCommunitySection from "@/components/WorkshopsCommunitySection";
import PastEventsSection from "@/components/PastEventsSection";
import InvestmentGuideSection from "@/components/InvestmentGuideSection";
import FAQSection from "@/components/FAQSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Footer from "@/components/Footer";
import IntroCover from "@/components/IntroCover";
import EmailCapturePopup from "@/components/EmailCapturePopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [coverDismissed, setCoverDismissed] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#2B2B2B] selection:bg-[#D6BB88]/30 selection:text-[#21102F] relative">
      {/* Full-Screen Interactive Entrance Cover */}
      <IntroCover onDismiss={() => setCoverDismissed(true)} />

      {/* Email capture popup — triggers 45s after cover dismissal */}
      <EmailCapturePopup coverDismissed={coverDismissed} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Main Landing Page Content */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhySheOwnsSection />
      <CommunitySection />
      <MeetFoundersSection />
      <WorkshopsCommunitySection />
      <PastEventsSection />
      <InvestmentGuideSection />
      <FAQSection />
      <ConsultationFormSection />
      <Footer />
    </main>
  );
}
