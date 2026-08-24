"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Share2,
  Navigation,
  Crown,
  Heart,
  ArrowLeft,
  Coffee,
  Building2,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "1",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [calendarUrl, setCalendarUrl] = useState("");

  const eventDateStr = "Friday, 28 August 2026";
  const eventTimeStr = "4:00 PM – 8:00 PM (GST)";
  const venueStr = "Danube Properties, Sheikh Zayed Road, Dubai";
  const googleMapsUrl = "https://maps.app.goo.gl/PViaFH2Kgag4ud3Y7";

  const generateIcsDownload = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SheOwns Dubai//Emirati Womens Day Open House//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:sheowns-openhouse-20260828@sheownsdubai.com
DTSTAMP:20260828T120000Z
DTSTART:20260828T120000Z
DTEND:20260828T160000Z
SUMMARY:SheOwns — Emirati Women's Day Open House & VIP Masterclass
DESCRIPTION:Private VIP Open House by SheOwns (Aurex Privy × Being She). High Tea Reception, Off-Market Developer Allocations, and Wealth Sovereignty Masterclass.\\n\\nGuest: ${formData.fullName || "VIP Guest"}\\nSeats: ${formData.guests}\\nVenue: ${venueStr}
LOCATION:${venueStr}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "SheOwns-Open-House-Pass.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to confirm RSVP. Please try again.");
      }

      setCalendarUrl(data.calendarUrl || "");
      setSubmitted(true);

      // Scroll to top of confirmation card
      const formEl = document.getElementById("rsvp-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (err: any) {
      console.error("RSVP Error:", err);
      setErrorMessage(err.message || "Something went wrong. Please reach out to us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#15091F] text-[#F8F5EF] selection:bg-[#D6BB88]/30 selection:text-[#21102F] font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B235A]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#D6BB88]/05 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="border-b border-[#D6BB88]/20 bg-[#15091F]/80 backdrop-blur-xl sticky top-0 z-50 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/sheowns_logo.png"
              alt="SheOwns Logo"
              width={220}
              height={80}
              unoptimized
              className="h-11 sm:h-13 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-xs text-[#D6BB88] hover:text-[#F8F5EF] transition-colors uppercase tracking-widest font-medium py-2 px-4 rounded-full border border-[#D6BB88]/30 hover:border-[#D6BB88]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Explore SheOwns</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-28 space-y-20">
        
        {/* Invitation Header & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left Column: Event Context & VIP Narrative */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* VIP Tag */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D6BB88]/20 to-transparent border border-[#D6BB88]/40 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D6BB88]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">
                Official Private VIP Invitation · Limited to 40 Guests
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EF] font-light leading-[1.15]">
                Emirati Women's Day <br />
                <span className="italic text-[#D6BB88]">Open House & Salon</span>
              </h1>
              <p className="text-base sm:text-lg text-[#F8F5EF]/80 font-light leading-relaxed max-w-xl">
                Celebrating the women who shape this nation — and the visionary women choosing to claim their seat in wealth, property ownership, and financial sovereignty.
              </p>
            </div>

            {/* Event Fast-Facts Box */}
            <div className="bg-[#21102F]/90 border border-[#D6BB88]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Date</span>
                    <p className="text-sm font-medium text-[#F8F5EF]">{eventDateStr}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Timing</span>
                    <p className="text-sm font-medium text-[#F8F5EF]">{eventTimeStr}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 sm:col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">Venue & Hospitality</span>
                    <p className="text-sm font-medium text-[#F8F5EF]">Danube Properties</p>
                    <p className="text-xs text-[#F8F5EF]/60 font-light">Sheikh Zayed Road, Dubai · High Tea & Refreshments served · Valet available</p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-[#D6BB88]/20 flex items-center justify-between text-xs text-[#D6BB88]">
                <span className="flex items-center space-x-2">
                  <Crown className="w-4 h-4" />
                  <span>Curated by Aurex Privy × Being She</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#F8F5EF]/50">Complimentary VIP Pass</span>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs text-[#F8F5EF]/60 font-light">Need assistance with your RSVP?</span>
              <a
                href="https://wa.me/971501815561?text=Hello%20SheOwns%20Concierge,%20I%20have%20a%20question%20regarding%20the%20Open%20House%20invitation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-[#25D366] hover:underline font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Event Concierge</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive RSVP Form / Confirmed Ticket */}
          <div id="rsvp-card" className="lg:col-span-6">
            <div className="bg-[#21102F] border border-[#D6BB88]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3B235A]/50 rounded-full blur-3xl pointer-events-none" />

              {!submitted ? (
                <div className="relative z-10 space-y-6">
                  
                  <div className="space-y-2 border-b border-[#D6BB88]/20 pb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold">
                        Guest Registration
                      </span>
                      <span className="text-[10px] bg-[#D6BB88]/15 text-[#D6BB88] px-2.5 py-0.5 rounded-full border border-[#D6BB88]/30">
                        Strictly 40 Seats
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F5EF] font-light">
                      Reserve Your Guest Pass
                    </h3>
                    <p className="text-xs text-[#F8F5EF]/70 font-light">
                      Please confirm your details below. You will receive an instant digital VIP ticket and calendar invitation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Al Hashimi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                      />
                    </div>

                    {/* Contact details: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-1.5 font-medium">
                          WhatsApp Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-1.5 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#3B235A]/50 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] placeholder-[#F8F5EF]/40 focus:outline-none focus:border-[#D6BB88] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Guests selector */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D6BB88] mb-1.5 font-medium">
                        Number of Reserved Seats *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#3B235A]/90 border border-[#D6BB88]/30 rounded-xl px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#D6BB88] transition-colors"
                      >
                        <option value="1">1 Seat (Myself Only)</option>
                        <option value="2">2 Seats (Myself + 1 Accompanying Guest)</option>
                      </select>
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest py-4 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>{isSubmitting ? "Securing Your Reservation..." : "Confirm VIP Guest Reservation"}</span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-wider text-[#F8F5EF]/50 pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D6BB88]" />
                      <span>Strictly Confidential · No Spam · Verified Guest Access</span>
                    </div>

                  </form>
                </div>
              ) : (
                /* Confirmed VIP Pass State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 space-y-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#D6BB88] font-semibold block">
                      Guest Reservation Confirmed
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F5EF] font-light">
                      We Look Forward to Welcoming You, <br />
                      <span className="text-[#D6BB88] italic">{formData.fullName}</span>
                    </h3>
                    <p className="text-xs text-[#F8F5EF]/70 font-light max-w-md mx-auto">
                      A formal VIP confirmation has been emailed to <strong className="text-[#F8F5EF]">{formData.email}</strong>. Please add the event to your calendar below.
                    </p>
                  </div>

                  {/* Digital VIP Pass Card */}
                  <div className="bg-[#3B235A]/40 border border-[#D6BB88]/40 rounded-2xl p-6 text-left space-y-4">
                    <div className="flex items-center justify-between border-b border-[#D6BB88]/20 pb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#D6BB88] block">Pass Type</span>
                        <span className="text-sm font-semibold text-[#F8F5EF]">VIP Guest Pass ({formData.guests} {Number(formData.guests) === 1 ? "Seat" : "Seats"})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#D6BB88] block">Status</span>
                        <span className="text-xs font-semibold text-[#25D366]">Confirmed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#F8F5EF]/60 block">Date</span>
                        <span className="font-medium text-[#F8F5EF]">28 Aug 2026</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#F8F5EF]/60 block">Time</span>
                        <span className="font-medium text-[#F8F5EF]">4:00 PM – 8:00 PM</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] text-[#F8F5EF]/60 block">Location</span>
                        <span className="font-medium text-[#F8F5EF]">Danube Properties, Sheikh Zayed Road, Dubai</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Google Calendar + Apple Calendar + Maps */}
                  <div className="space-y-2.5 pt-2">
                    {calendarUrl && (
                      <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-[#D6BB88] to-[#B89B62] text-[#21102F] font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl hover:scale-[1.01] transition-transform duration-300 shadow-xl flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Add to Google Calendar</span>
                      </a>
                    )}

                    <button
                      onClick={generateIcsDownload}
                      className="w-full bg-[#3B235A]/80 border border-[#D6BB88]/40 text-[#F8F5EF] font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl hover:bg-[#3B235A] transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4 text-[#D6BB88]" />
                      <span>Download Apple / Outlook Calendar (.ics)</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#21102F] border border-[#D6BB88]/30 hover:border-[#D6BB88] text-xs text-[#F8F5EF] py-3 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#D6BB88]" />
                        <span>Get Directions</span>
                      </a>

                      <a
                        href="https://wa.me/971501815561?text=Hello%20SheOwns%20Concierge,%20my%20name%20is%20Sarah%20and%20I%20have%20confirmed%20my%20RSVP."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366]/30 text-xs text-[#F8F5EF] py-3 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </motion.div>
              )}

            </div>
          </div>

        </div>

        {/* 4 Pillars of the Evening */}
        <div className="pt-16 border-t border-[#D6BB88]/20 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold">The Experience</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5EF] font-light">
              What You Will Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#F8F5EF]/70 font-light">
              An intimate salon created for female leaders, entrepreneurs, and ambitious investors to connect, learn, and build sovereign wealth in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#21102F]/60 border border-[#D6BB88]/20 rounded-2xl p-7 space-y-4 hover:border-[#D6BB88]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#F8F5EF] font-light">Market Intelligence</h4>
              <p className="text-xs text-[#F8F5EF]/70 font-light leading-relaxed">
                Raw, unfiltered real estate fundamentals. Learn cap rates, yield calculations, and how to spot prime appreciation corridors in Dubai before the crowd.
              </p>
            </div>

            <div className="bg-[#21102F]/60 border border-[#D6BB88]/20 rounded-2xl p-7 space-y-4 hover:border-[#D6BB88]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#F8F5EF] font-light">Off-Market Allocations</h4>
              <p className="text-xs text-[#F8F5EF]/70 font-light leading-relaxed">
                Direct developer access to Danube’s premier off-plan launches with exclusive SheOwns 1% monthly payment structures tailored for female investors.
              </p>
            </div>

            <div className="bg-[#21102F]/60 border border-[#D6BB88]/20 rounded-2xl p-7 space-y-4 hover:border-[#D6BB88]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#F8F5EF] font-light">High Tea & Sisterhood</h4>
              <p className="text-xs text-[#F8F5EF]/70 font-light leading-relaxed">
                Curated high tea reception with fellow founders, senior executives, and women creating generational wealth across the UAE and globally.
              </p>
            </div>

            <div className="bg-[#21102F]/60 border border-[#D6BB88]/20 rounded-2xl p-7 space-y-4 hover:border-[#D6BB88]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#D6BB88]/15 border border-[#D6BB88]/30 flex items-center justify-center text-[#D6BB88]">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#F8F5EF] font-light">1-on-1 Strategy</h4>
              <p className="text-xs text-[#F8F5EF]/70 font-light leading-relaxed">
                Sit down with Senior Advisory Directors from Aurex Privy for a personalized portfolio assessment and Golden Visa roadmap review.
              </p>
            </div>

          </div>
        </div>

        {/* Founding Partners Spotlight */}
        <div className="bg-[#21102F]/80 border border-[#D6BB88]/20 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D6BB88]/20 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D6BB88] font-semibold block">Your Hosts</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F5EF] font-light">The Founders Behind SheOwns</h3>
            </div>
            <span className="text-xs text-[#F8F5EF]/60 font-light">Aurex Privy Real Estate × Being She International</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#D6BB88]/30 shrink-0 relative">
                <Image
                  src="/images/aparna_bajpai.jpg"
                  alt="Aparna Bajpai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#F8F5EF]">Aparna Bajpai</h4>
                <p className="text-xs text-[#D6BB88] font-medium">Founder, Being She · Global Women Leadership Icon</p>
                <p className="text-xs text-[#F8F5EF]/70 font-light">Empowering over 15,000 women globally through purpose-driven sisterhood.</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#D6BB88]/30 shrink-0 relative">
                <Image
                  src="/images/gaurav_sharma.jpg"
                  alt="Gaurav Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#F8F5EF]">Gaurav Sharma</h4>
                <p className="text-xs text-[#D6BB88] font-medium">Founder & CEO, Aurex Privy Real Estate</p>
                <p className="text-xs text-[#F8F5EF]/70 font-light">Over 10+ years shaping premier advisory and portfolio structures in Dubai.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#D6BB88]/15 bg-[#15091F] py-8 px-6 text-center text-xs text-[#F8F5EF]/50 font-light space-y-2">
        <p>© 2026 SheOwns. Launched by Aurex Privy Real Estate in collaboration with Being She. All rights reserved.</p>
        <p className="text-[10px]">Suite no. 1509, The Exchange Tower, Business Bay, Dubai, United Arab Emirates · +971 50 181 5561</p>
      </footer>

    </div>
  );
}
