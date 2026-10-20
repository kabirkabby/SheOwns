export type Locale = "en" | "ar";

export interface TranslationKeys {
  navbar: {
    announcement: string;
    announcementCta: string;
    about: string;
    whySheOwns: string;
    founders: string;
    propertyShow: string;
    pastEvents: string;
    faq: string;
    whatsapp: string;
    bookConsultation: string;
    langButton: string;
  };
  intro: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    btnNotYet: string;
    btnAlreadyOwner: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    presentedBy: string;
  };
  about: {
    tag: string;
    headingLine1: string;
    headingLine2: string;
    paragraph: string;
    pillars: Array<{
      num: string;
      title: string;
      body: string;
    }>;
    comparisonTag: string;
    comparisonHeading: string;
    traditionTitle: string;
    traditionSub: string;
    traditionItems: Array<[string, string]>;
    standardTitle: string;
    standardSub: string;
    standardItems: Array<[string, string]>;
    readyPrompt: string;
    bookSession: string;
  };
  whySheOwns: {
    tag: string;
    heading: string;
    headingItalic: string;
    subtitle: string;
    pillars: Array<{
      num: string;
      title: string;
      subtitle: string;
      body: string;
      highlights: string[];
    }>;
    navPrev: string;
    navNext: string;
  };
  community: {
    tag: string;
    headingLine1: string;
    headingLine2: string;
    p1: string;
    p2: string;
    cta: string;
    salonTag: string;
    quote: string;
  };
  founders: {
    tag: string;
    heading: string;
    gaurav: {
      name: string;
      role: string;
      quote: string;
      credentials: string[];
    };
    aparna: {
      name: string;
      role: string;
      quote: string;
      credentials: string[];
    };
  };
  propertyShow: {
    tag: string;
    heading: string;
    badge: string;
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    dateLabel: string;
    dateVal: string;
    locationLabel: string;
    locationVal: string;
    venueNoticeTitle: string;
    venueNoticeDesc: string;
    cta: string;
    ctaSubtext: string;
    experienceTag: string;
    experienceTitle: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  pastEvents: {
    tag: string;
    heading: string;
    subtitle: string;
  };
  guide: {
    tag: string;
    heading: string;
    body: string;
    bullets: string[];
    emailPlaceholder: string;
    downloadBtn: string;
    successMsg: string;
  };
  faq: {
    tag: string;
    headingPart1: string;
    headingPart2: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  consultation: {
    tag: string;
    headingLine1: string;
    headingLine2: string;
    paragraph: string;
    checks: string[];
    instantCommTag: string;
    whatsappPrompt: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      date: string;
      timeSlot: string;
      timeSlots: string[];
      notes: string;
      notesPlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successDesc: string;
      privacyNote: string;
    };
  };
  footer: {
    description: string;
    circleTag: string;
    circleTitle: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    thankYou: string;
    col1Title: string;
    col1Links: Array<{ label: string; href: string }>;
    col2Title: string;
    col2Links: Array<{ label: string; href: string }>;
    col3Title: string;
    col3Text: string;
    col4Title: string;
    col4Address: string;
    col4Phone: string;
    col4Email: string;
    copyright: string;
    disclaimer: string;
    backToTop: string;
  };
  popup: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    bullets: string[];
    placeholder: string;
    btn: string;
    sending: string;
    spamNote: string;
    successTitle: string;
    successDesc: string;
  };
}

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    navbar: {
      announcement: "SheOwns The Property Show · 12th December, 2026 · Registrations Open ·",
      announcementCta: "Register now ↗",
      about: "About",
      whySheOwns: "Why SheOwns",
      founders: "Founders",
      propertyShow: "The Property Show",
      pastEvents: "Past Events",
      faq: "FAQ",
      whatsapp: "WhatsApp",
      bookConsultation: "Private Consultation",
      langButton: "العربية",
    },
    intro: {
      badge: "Aurex Privy & Gulf News Present",
      titleLine1: "SheOwns",
      titleLine2: "Do you yet?",
      subtitle: "Real Estate Ownership, Reimagined for Women.",
      btnNotYet: "Not Yet",
      btnAlreadyOwner: "Already an owner? Step inside, your next one is waiting.",
    },
    hero: {
      titleLine1: "SheOwns",
      titleLine2: "Do you yet?",
      subtitle: "Real estate is no longer just a man's game. SheOwns exists to help women understand Dubai property, invest with clarity, and build wealth on their own terms.",
      ctaPrimary: "Book a Private Consultation",
      ctaSecondary: "The Property Show →",
      presentedBy: "Presented by Aurex Privy & Gulf News · Sponsored by BeingShe",
    },
    about: {
      tag: "The Initiative",
      headingLine1: "Every woman deserves expert guidance",
      headingLine2: "for her investment.",
      paragraph: "For many women, real estate feels unnecessarily complex. Payment plans, service charges, ownership costs, legal clauses, and long-term implications are rarely explained with complete clarity. As a result, many delay investing, while others make decisions without fully understanding what they are signing. SheOwns was created to change that.",
      pillars: [
        { num: "01", title: "Education First", body: "We break down yields, payment schedules, and legal frameworks. No jargon, No pressure." },
        { num: "02", title: "Exclusive Access", body: "Developer-negotiated payment plans, reduced deposits, and off-market terms built for women." },
        { num: "03", title: "Lifelong Community", body: "15,000+ women. Founder dinners, masterclasses, and peer advisory, long after you sign." },
      ],
      comparisonTag: "A Different Standard",
      comparisonHeading: "Why SheOwns Stands Apart",
      traditionTitle: "Traditional Brokerage",
      traditionSub: "Commission Over Care",
      traditionItems: [
        ["Aggressive Sales", "Pressure to commit fast, without full financial analysis."],
        ["Jargon-Heavy", "Complex contracts, unverified ROI claims, zero clarity."],
        ["Rigid Payments", "High upfront deposits. No flexibility built for your life."],
        ["No Aftercare", "Relationship ends the moment the deed is signed."],
      ],
      standardTitle: "The SheOwns Standard",
      standardSub: "Education & Empowerment",
      standardItems: [
        ["1-on-1 Advisory", "No pressure. We map your goals, budget, and comfort — first."],
        ["Full Transparency", "Yield projections, legal vetting, zero hidden fees."],
        ["Customised Monthly Plans", "Exclusive developer-negotiated lower deposits and flexible payment schedules."],
        ["Lifelong Support", "Community, masterclasses, and peer advisory long after you buy."],
      ],
      readyPrompt: "Ready to experience it?",
      bookSession: "Book Session",
    },
    whySheOwns: {
      tag: "The 6 Commitments",
      heading: "Built Differently.",
      headingItalic: "From The Foundation Up.",
      subtitle: "Six structural differences that make SheOwns the safest, most transparent way for women to invest in Dubai.",
      pillars: [
        {
          num: "01",
          title: "Financial Education",
          subtitle: "Knowledge Before Action",
          body: "Workshops, masterclasses, and 1-on-1 sessions that explain exactly how Dubai real estate works — before anyone asks you to sign anything.",
          highlights: ["Yield Calculations", "Market Cycles", "Zero Sales Pressure"],
        },
        {
          num: "02",
          title: "1-on-1 Advisory",
          subtitle: "Dedicated Senior Counsel",
          body: "A senior Aurex Privy advisor, dedicated to you. We map your goals, budget, and timeline — with zero obligation to proceed.",
          highlights: ["Personalized Strategy", "Liquidity Mapping", "Private Counsel"],
        },
        {
          num: "03",
          title: "Exclusive Developer Terms",
          subtitle: "Off-Market Privileges",
          body: "Lower entry deposits and bespoke payment structures negotiated specifically for SheOwns members. Not available to the public.",
          highlights: ["Pre-Launch Access", "Reduced Entry Deposit", "Bespoke Allocations"],
        },
        {
          num: "04",
          title: "SheOwns Negotiated Payment Plans",
          subtitle: "Tailored Investment Structures",
          body: "Bespoke payment structures mapped directly to your cash flow. Invest comfortably with flexible monthly schedules negotiated specifically for SheOwns members.",
          highlights: ["Customised Schedules", "Cash Flow Alignment", "Member Privileges"],
        },
        {
          num: "05",
          title: "Legal & Contract Clarity",
          subtitle: "Red Flag Protection",
          body: "Every contract reviewed. Every clause explained. The 'red flag files' — decoded before you're asked to commit a single dirham.",
          highlights: ["DLD Escrow Vetting", "Clause Analysis", "RERA Regulated"],
        },
        {
          num: "06",
          title: "The Being She Network",
          subtitle: "Lifelong Community",
          body: "Join 15,000+ women investors across UAE and India. Founder dinners, closed-door sessions, and a community that celebrates your milestones.",
          highlights: ["15,000+ Female Leaders", "Founder Dinners", "Peer Advisory"],
        },
      ],
      navPrev: "Previous",
      navNext: "Next",
    },
    community: {
      tag: "A Sisterhood of Ownership",
      headingLine1: "You were never meant to build wealth",
      headingLine2: "in isolation.",
      p1: "For too long, real estate and financial strategy have been discussed behind closed doors, filled with jargon meant to intimidate rather than empower. SheOwns changes that.",
      p2: "We are a collective of over 15,000 ambitious women across the UAE and globally—first-time buyers, seasoned investors, mothers, and executives—who come together to learn without fear, invest with absolute clarity, and claim our seats at the table of financial sovereignty.",
      cta: "Join The Sisterhood",
      salonTag: "A Sisterhood of Ownership",
      quote: "“When one woman steps into her financial power, she lifts an entire generation.”",
    },
    founders: {
      tag: "The Founders",
      heading: "Guided by vision, grounded in experience.",
      gaurav: {
        name: "Gaurav Sharrma",
        role: "Founder & CEO, Aurex Privy Real Estate",
        quote: "SheOwns was born from a simple idea - to create a dedicated real-estate platform designed specifically for women, giving them access to the knowledge, insight and guidance they need to make informed and confident decisions about property and wealth.",
        credentials: [
          "18+ Years of Dubai Market Experience",
          "Advising International Investors on Strategic Property Decisions",
          "Building UAE’s first Women-Centric Real Estate Platform",
        ],
      },
      aparna: {
        name: "Aparna Bajpai",
        role: "Founder & President, Being She Association",
        quote: "Women have always played a powerful role in building families, businesses and communities. Now, it is time to be equally present in the conversations that shape wealth and financial independence.",
        credentials: [
          "Dubai's largest network of women leaders",
          "15,000+ active community members",
          "Hosted dozens of international women empowerment forums",
        ],
      },
    },
    propertyShow: {
      tag: "Flagship Event",
      heading: "Join us in person.",
      badge: "SheOwns The Property Show",
      title: "SheOwns The Property Show",
      subtitleLine1: "Dubai's premier real estate exhibition bringing top master developers",
      subtitleLine2: "directly to women investors and homeowners.",
      dateLabel: "Date",
      dateVal: "12th December 2026",
      locationLabel: "Location",
      locationVal: "Dubai, United Arab Emirates",
      venueNoticeTitle: "Exclusive Venue & Private Itinerary",
      venueNoticeDesc: "Disclosed directly to confirmed VIP registrants prior to the show.",
      cta: "Reserve Your VIP Pass",
      ctaSubtext: "Registrations open. Limited VIP allocation.",
      experienceTag: "The Experience",
      experienceTitle: "What to expect at the show.",
      features: [
        {
          title: "Top Master Developers",
          desc: "Dubai's leading master developers showcase their flagship residential and off-plan projects, curated exclusively for women investors.",
        },
        {
          title: "Unfiltered Due Diligence",
          desc: "Direct access to independent conveyancers, escrow compliance advisors, and mortgage strategists—zero sales pressure, complete legal transparency.",
        },
        {
          title: "A Safe, High-Yield Sanctuary",
          desc: "Network with like-minded women leaders, founders, and investors building generational property wealth on their own terms.",
        },
      ],
    },
    pastEvents: {
      tag: "Past Gatherings",
      heading: "Moments from our past events.",
      subtitle: "A look into our private conclaves, masterclasses, and salons uniting women investors across Dubai.",
    },
    guide: {
      tag: "Free Investment Guide",
      heading: "The First-Time Investor's Guide to Dubai Property",
      body: "Download our comprehensive, conflict-free handbook crafted specifically for female investors. Decodes contract clauses, escrow safeguards, and Golden Visa thresholds.",
      bullets: [
        "How off-plan escrow accounts legally protect your funds",
        "Negotiating developer payment plans tailored to your cash flow",
        "Golden Visa thresholds through property acquisition",
      ],
      emailPlaceholder: "Enter your personal email address",
      downloadBtn: "Download Guide",
      successMsg: "✨ Check your inbox! Your guide has been sent.",
    },
    faq: {
      tag: "Clear Answers",
      headingPart1: "Frequently Asked",
      headingPart2: "Questions",
      subtitle: "Everything you need to know about investing in Dubai real estate with SheOwns.",
      items: [
        {
          question: "Do I need to live in Dubai or hold UAE residency to invest?",
          answer: "No. International non-resident investors of any nationality can purchase freehold property in Dubai with 100% full ownership rights. We assist international clients remotely, from initial contract review and bank account setup to title deed issuance and remote tenant placement.",
        },
        {
          question: "How much capital do I need to begin investing?",
          answer: "Through SheOwns negotiated developer terms, initial booking deposits are reduced, often starting from 10% to 15% down. Remaining installments can be structured under customized monthly payment schedules during construction, allowing you to invest without liquidating core funds.",
        },
        {
          question: "Is SheOwns suitable for first-time real estate investors?",
          answer: "Absolutely. In fact, over 94% of our members are first-time property buyers. Our initiative was built specifically to eliminate jargon, explain legal protections, and provide 1-on-1 expert advisory so you feel completely confident at every step.",
        },
        {
          question: "How does the private consultation process work?",
          answer: "After submitting your details, a senior investment advisor from Aurex Privy will arrange a private 30-minute video call or in-person meeting. We analyze your financial goals, walk you through current market data, and present tailored options—with zero pressure to commit.",
        },
        {
          question: "What legal guarantees and safeguards protect my investment in Dubai?",
          answer: "All property transactions in Dubai are strictly regulated by the Dubai Land Department (DLD) and RERA. Off-plan developer funds are held in government-monitored escrow accounts, ensuring funds are released only as construction milestones are independently verified.",
        },
        {
          question: "Are there any hidden advisory or consultation fees?",
          answer: "No. Our educational workshops, market reports, and strategy consultations are 100% complimentary for SheOwns community members.",
        },
      ],
    },
    consultation: {
      tag: "Take The Next Step",
      headingLine1: "Begin Your Journey to",
      headingLine2: "Financial Sovereignty",
      paragraph: "Book a confidential 1-on-1 strategy session with Aurex Privy senior advisors. Zero high-pressure sales pitches—just clear, actionable data tailored to your personal goals.",
      checks: [
        "30-Minute Confidential Portfolio Consultation",
        "Access to Customised Monthly Developer Payment Options for Members",
        "100% Free Advisory for Being She Community Members",
      ],
      instantCommTag: "Prefer Instant Communication?",
      whatsappPrompt: "Chat directly with our advisory desk on WhatsApp",
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "e.g. Fatima Al Hashemi",
        email: "Email Address",
        emailPlaceholder: "fatima@example.com",
        phone: "WhatsApp Number",
        phonePlaceholder: "+971 50 000 0000",
        date: "Preferred Date",
        timeSlot: "Preferred Time Slot",
        timeSlots: [
          "Morning (10:00 AM – 1:00 PM)",
          "Afternoon (1:00 PM – 4:00 PM)",
          "Evening (4:00 PM – 7:00 PM)",
        ],
        notes: "Investment Focus or Questions (Optional)",
        notesPlaceholder: "e.g. First-time buyer looking for passive rental yield or Golden Visa requirements...",
        submitBtn: "Confirm Private Consultation",
        submitting: "Submitting...",
        successTitle: "Consultation Request Received",
        successDesc: "A senior Aurex Privy advisor will contact you within 2 business hours via WhatsApp/Email to confirm your calendar booking.",
        privacyNote: "Your data is strictly confidential and protected under UAE privacy regulations.",
      },
    },
    footer: {
      description: "Empowering women through financial literacy, transparent advisory, and exclusive developer opportunities in Dubai’s real estate market.",
      circleTag: "Join The SheOwns Circle",
      circleTitle: "Receive Private Market Intelligence & Off-Market Allocations",
      emailPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe",
      thankYou: "✨ Thank you for subscribing to The SheOwns Circle!",
      col1Title: "Initiative",
      col1Links: [
        { label: "About SheOwns", href: "#about" },
        { label: "The 6 Commitments", href: "#why-she-owns" },
        { label: "The Founders", href: "#founders" },
      ],
      col2Title: "Experience",
      col2Links: [
        { label: "The Property Show", href: "#property-show" },
        { label: "Past Gatherings", href: "#past-events" },
        { label: "Private Consultation", href: "#consultation" },
      ],
      col3Title: "Legal & Regulatory",
      col3Text: "All transactions are executed in compliance with Dubai Land Department (DLD) and RERA regulations under licensed UAE conveyancing standards.",
      col4Title: "Direct Contact",
      col4Address: "Suite 1509, The Exchange Tower, Business Bay, Dubai, UAE",
      col4Phone: "+971 50 181 5561",
      col4Email: "info@sheowns.com",
      copyright: "© 2026 SheOwns Initiative. Presented by Aurex Privy Real Estate & Gulf News, Supported by Being She Association. All rights reserved.",
      disclaimer: "Disclaimer: The SheOwns Initiative is an educational and advisory platform. All real estate transactions are facilitated through licensed brokers and developer agreements registered with the Dubai Land Department.",
      backToTop: "Back to top",
    },
    popup: {
      badge: "Free for SheOwns Community",
      titlePart1: "The First-Time Investor's Guide to",
      titlePart2: "Dubai Real Estate",
      description: "Everything no one explains — off-plan contracts, customised monthly payment plans, DLD protections, and what to watch out for. Written for women, by women who've done it.",
      bullets: [
        "How off-plan investing actually works in Dubai",
        "Negotiating developer payment structures",
        "Escrow accounts & government legal protections",
      ],
      placeholder: "Enter your email address",
      btn: "Get Instant Access",
      sending: "Sending Request...",
      spamNote: "We'll send it straight to your inbox. No spam, ever.",
      successTitle: "Guide Sent!",
      successDesc: "Check your inbox in a moment for your download link.",
    },
  },
  ar: {
    navbar: {
      announcement: "معرض شي أونز العقاري · ١٢ ديسمبر ٢٠٢٦ · باب التسجيل مفتوح ·",
      announcementCta: "سجلي الآن ↗",
      about: "عن المبادرة",
      whySheOwns: "لماذا شي أونز",
      founders: "المؤسسون",
      propertyShow: "المعرض العقاري",
      pastEvents: "فعالياتنا السابقة",
      faq: "الأسئلة الشائعة",
      whatsapp: "واتساب",
      bookConsultation: "استشارة خاصة",
      langButton: "English",
    },
    intro: {
      badge: "مقدم من أوريكس بريفي وغلف نيوز",
      titleLine1: "شي أونز",
      titleLine2: "هل تمتلكين عقاركِ بعد؟",
      subtitle: "مفهوم جديد لملكية العقارات، صُمم خصيصاً للمرأة.",
      btnNotYet: "ليس بعد",
      btnAlreadyOwner: "تمتلكين عقاراً بالفعل؟ تفضلي بالدخول، استثماركِ القادم بانتظاركِ.",
    },
    hero: {
      titleLine1: "شي أونز",
      titleLine2: "هل تمتلكين عقاركِ بعد؟",
      subtitle: "لم يعد الاستثمار العقاري حكراً على الرجال. وُجدت مبادرة \"شي أونز\" لتمكين المرأة في سوق عقارات دبي، للاستثمار بوعي وبناء الثروة والسيادة المالية وفق شروطها الخاصة.",
      ctaPrimary: "احجزي استشارة خاصة",
      ctaSecondary: "المعرض العقاري ←",
      presentedBy: "مقدم من أوريكس بريفي وغلف نيوز · برعاية بينغ شي",
    },
    about: {
      tag: "عن المبادرة",
      headingLine1: "كل امرأة تستحق إرشاداً خبيراً",
      headingLine2: "في استثماراتها العقارية.",
      paragraph: "بالنسبة للعديد من النساء، يبدو الاستثمار العقاري معقداً بلا داعٍ. خطط الدفع، رسوم الخدمات، التكاليف طويلة الأجل، والبنود القانونية نادراً ما تُشرح بوضوح وشفافية تامة. نتيجة لذلك، تتردد الكثيرات في الاستثمار، بينما تتخذ أخريات قرارات دون فهم كامل لما يوقعن عليه. جاءت مبادرة \"شي أونز\" لتغيير هذا الواقع تماماً.",
      pillars: [
        { num: "٠١", title: "التعليم أولاً", body: "نشرح العوائد الإيجارية، جداول السداد، والأطر القانونية بوضوح تام، بعيداً عن المصطلحات المعقدة وأساليب الضغط البيعي." },
        { num: "٠٢", title: "مزايا حصرية", body: "خطط سداد تفاوضية مباشرة مع كبار المطورين، دفعات أولى مخفضة، وشروط حصرية صُممت لتناسب المرأة." },
        { num: "٠٣", title: "مجتمع دائم", body: "أكثر من ١٥,٠٠٠ امرأة. لقاءات حوارية، ورش عمل تخصصية، وإرشاد مالي مستمر يرافقكِ طويلاً بعد الشراء." },
      ],
      comparisonTag: "معايير استثنائية",
      comparisonHeading: "لماذا تختلف شي أونز عن الجميع؟",
      traditionTitle: "الوساطة التقليدية",
      traditionSub: "العمولة قبل الاهتمام",
      traditionItems: [
        ["ضغط بيعي متسرع", "إلحاح مستمر على الشراء دون تحليل مالي دقيق لاحتياجاتك."],
        ["مصطلحات مبهمة", "عقود معقدة ووعود بعوائد غير مؤكدة وغياب للشفافية."],
        ["دفعات جامدة", "دفعات أولى مرتفعة دون أي مرونة تتناسب مع تدفقاتك المالية."],
        ["انقطاع العلاقة", "تنتهي الخدمة فور توقيع العقد واستلام العمولة."],
      ],
      standardTitle: "معيار شي أونز",
      standardSub: "المعرفة والتمكين أولاً",
      standardItems: [
        ["استشارة فردية متخصصة", "دون أي ضغوط. نبدأ بدراسة أهدافكِ وميزانيتكِ وراحتكِ أولاً."],
        ["شفافية قانونية مطلقة", "تحليل دقيق للعوائد، تدقيق قانوني للعقود، وبلا أي رسوم خفية."],
        ["خطط سداد شهرية مرنة", "شروط تفاوضية حصرية مع المطورين لدفعات ميسرة تناسب دخلك."],
        ["مرافقة ومجتمع دائم", "مجتمع رائد، ورش عمل، واستشارات مستمرة بعد امتلاك العقار."],
      ],
      readyPrompt: "هل أنتِ مستعدة لبدء رحلتكِ؟",
      bookSession: "احجزي جلستكِ",
    },
    whySheOwns: {
      tag: "التزاماتنا الستة",
      heading: "بناء استثنائي.",
      headingItalic: "من الأساس وحتى القمة.",
      subtitle: "ستة فوارق جوهرية تجعل شي أونز الخيار الأكثر أماناً وشفافية لتمكين المرأة في سوق عقارات دبي.",
      pillars: [
        {
          num: "٠١",
          title: "التثقيف المالي",
          subtitle: "المعرفة قبل اتخاذ القرار",
          body: "ورش عمل ولقاءات استشارية فردية تشرح لكِ آلية عمل سوق العقارات في دبي بدقة متناهية — قبل أن يُطلب منكِ توقيع أي مستند.",
          highlights: ["حساب العوائد الصافية", "دورات السوق العقاري", "صفر ضغط بيعي"],
        },
        {
          num: "٠٢",
          title: "استشارة فردية مخصصة",
          subtitle: "إرشاد استراتيجي مستقل",
          body: "مستشار عقاري أول من أوريكس بريفي مخصص لكِ بالكامل. نحدد أهدافكِ وميزانيتكِ وجدولكِ الزمني — دون أي التزام بالشراء.",
          highlights: ["استراتيجية مصممة لكِ", "إدارة السيولة المالية", "مشورة خاصة وسرية"],
        },
        {
          num: "٠٣",
          title: "شروط تفاوضية حصرية",
          subtitle: "امتيازات خارج السوق العام",
          body: "دفعات أولى مخفضة وهياكل سداد حصرية تم التفاوض عليها مباشرة مع كبار المطورين لصالح عضوات شي أونز فقط.",
          highlights: ["أولوية الحجز قبل الإطلاق", "دفعة أولى مخفضة", "وحدات مختارة بعناية"],
        },
        {
          num: "٠٤",
          title: "خطط سداد ميسرة من شي أونز",
          subtitle: "هياكل دفع متوافقة مع دخلكِ",
          body: "هياكل دفع شهرية مصممة خصيصاً لتناسب تدفقاتك النقدية. استثمري براحة بال عبر خطط سداد ميسرة تفاوضنا عليها خصيصاً لعضواتنا.",
          highlights: ["جداول دفع مرنة", "ملاءمة التدفقات النقدية", "امتيازات حصرية للعضوات"],
        },
        {
          num: "٠٥",
          title: "وضوح قانوني وحماية تعاقدية",
          subtitle: "كشف الثغرات والبنود الدقيقة",
          body: "مراجعة شاملة لكل عقد وشرح كل بند. نكشف لكِ البنود والمحاذير القانونية بدقة قبل دفع درهم واحد.",
          highlights: ["توافق حسابات الضمان (DLD)", "تحليل بنود العقود", "مرخص ومراقب من ريرا"],
        },
        {
          num: "٠٦",
          title: "شبكة بينغ شي الرائدة",
          subtitle: "مجتمع داعم يدوم معكِ",
          body: "انضمي لأكثر من ١٥,٠٠٠ مستثمرة وقائدة أعمال في الإمارات والمنطقة. لقاءات حصرية، جلسات مغلقة، ومجتمع يحتفي بإنجازاتكِ.",
          highlights: ["+١٥,٠٠٠ رائدة أعمال", "لقاءات حصرية", "مجلس مشورة وتواصل"],
        },
      ],
      navPrev: "السابق",
      navNext: "التالي",
    },
    community: {
      tag: "مجتمع السيادة والتمكين",
      headingLine1: "لم يُكتب عليكِ أبداً أن تبني ثروتكِ",
      headingLine2: "في عزلة.",
      p1: "لطالما نوقشت استراتيجيات العقارات والاستثمار خلف أبواب مغلقة، ممتلئة بمصطلحات معقدة تهدف إلى إرباك المتلقي بدلاً من تمكينه. شي أونز جاءت لتغيير هذه المعادلة بالكامل.",
      p2: "نحن مجتمع يضم أكثر من ١٥,٠٠٠ امرأة طموحة في الإمارات وحول العالم—من المشترين للمرة الأولى، والمستثمرات المتمرسات، والأمهات، والتنفيذيات—نجتمع لنتعلم بلا تردد، ونستثمر بوضوح تام، ونثبت حضورنا الفاعل في تحقيق السيادة المالية.",
      cta: "انضمي إلى مجتمعنا",
      salonTag: "مجتمع شي أونز",
      quote: "«حينما تمتلك المرأة زمام قوتها المالية، فإنها ترتقي بأجيال بأكملها.»",
    },
    founders: {
      tag: "المؤسسون",
      heading: "رؤية طموحة، ترتكز على خبرة عميقة في السوق.",
      gaurav: {
        name: "غوراف شارما",
        role: "المؤسس والرئيس التنفيذي، أوريكس بريفي العقارية",
        quote: "ولدت شي أونز من فكرة جوهرية: بناء منصة عقارية استثنائية صُممت خصيصاً للمرأة، لتمنحها المعرفة والشفافية والإرشاد اللازم لاتخاذ قرارات واثقة في العقارات وصناعة الثروة.",
        credentials: [
          "+١٨ عاماً من الخبرة القيادية في سوق دبي العقاري",
          "مستشار لكبار المستثمرين الدوليين في القرارات الاستراتيجية",
          "مؤسس أول منصة عقارية تتمحور حول المرأة في دولة الإمارات",
        ],
      },
      aparna: {
        name: "أبارنا باجباي",
        role: "المؤسس والرئيس، جمعية بينغ شي",
        quote: "لطالما كان للمرأة دور ريادي في بناء الأسرة والأعمال والمجتمعات. واليوم، حان الوقت لتكون حاضرة بذات القوة في الحوارات التي تصنع الاستقلال المالي والثروة المستدامة.",
        credentials: [
          "مؤسسة أكبر شبكة قيادات نسائية في دبي",
          "+١٥,٠٠٠ عضوة نشطة في المجتمع",
          "استضافت ونظمت عشرات المنتديات العالمية لتمكين المرأة",
        ],
      },
    },
    propertyShow: {
      tag: "الحدث الأبرز",
      heading: "انضمي إلينا حضورياً.",
      badge: "معرض شي أونز العقاري",
      title: "معرض شي أونز العقاري",
      subtitleLine1: "المعرض العقاري الرائد في دبي الذي يجمع كبار المطورين العقاريين",
      subtitleLine2: "مباشرة مع المستثمرات والراغبات في تملك مساكنهن.",
      dateLabel: "التاريخ",
      dateVal: "١٢ ديسمبر ٢٠٢٦",
      locationLabel: "الموقع",
      locationVal: "دبي، الإمارات العربية المتحدة",
      venueNoticeTitle: "المكان الحصري والجدول الزمني الخاص",
      venueNoticeDesc: "يتم إرسال تفاصيل المكان والجدول حصرياً للضيوف المؤكد تسجيلهم قبل المعرض.",
      cta: "احجزي بطاقة كبار الشخصيات",
      ctaSubtext: "التسجيل مفتوح. المقاعد الحصرية لكبار الشخصيات محدودة.",
      experienceTag: "ما ينتظركِ في المعرض",
      experienceTitle: "تجربة استثنائية مصممة لأجلكِ.",
      features: [
        {
          title: "كبار المطورين العقاريين",
          desc: "نخبة المطورين في دبي يستعرضون أبرز مشاريعهم السكنية والاستثمارية قيد الإنشاء والجاهزة، المصممة خصيصاً للمستثمرات.",
        },
        {
          title: "تدقيق قانوني وموضوعي",
          desc: "لقاءات مباشرة مع محامي عقارات مستقلين ومستشاري تمويل عقاري وخبراء الإقامة الذهبية — دون أي ضغط بيعي وبشفافية قانونية كاملة.",
        },
        {
          title: "بيئة استثمارية آمنة وموثوقة",
          desc: "تواصلي مع رائدات أعمال وقائدات مستثمرات يبنين ثرواتهن العقارية المستدامة وفق أعلى معايير الأمان المالي.",
        },
      ],
    },
    pastEvents: {
      tag: "لقاءاتنا السابقة",
      heading: "لقطات من فعالياتنا السابقة.",
      subtitle: "نظرة على جلساتنا المغلقة، ورش العمل التخصصية، والملتقيات الحوارية التي جمعت المستثمرات في دبي.",
    },
    guide: {
      tag: "دليل استثماري مجاني",
      heading: "دليل المستثمرة لأول مرة في عقارات دبي",
      body: "حمّلي دليلكِ الشامل والمستقل المصمم خصيصاً للمرأة المستثمرة. يوضح شروط العقود، ضمانات حسابات الضمان (إسكرو)، ومتطلبات الحصول على الإقامة الذهبية.",
      bullets: [
        "كيف تحمي حسابات الضمان الحكومية أموالكِ في المشاريع قيد الإنشاء",
        "التفاوض على خطط دفع ميسرة تتوافق مع تدفقاتكِ النقدية",
        "معايير الحصول على الإقامة الذهبية عبر التملك العقاري",
      ],
      emailPlaceholder: "أدخلي بريدكِ الإلكتروني",
      downloadBtn: "تحميل الدليل",
      successMsg: "✨ تفقدّي بريدكِ الإلكتروني! تم إرسال الدليل إليكِ بنجاح.",
    },
    faq: {
      tag: "إجابات واضحة",
      headingPart1: "الأسئلة",
      headingPart2: "الشائعة",
      subtitle: "كل ما تحتاجين لمعرفته حول الاستثمار في عقارات دبي مع مبادرة شي أونز.",
      items: [
        {
          question: "هل أحتاج إلى الإقامة في دبي أو حمل إقامة إماراتية للاستثمار؟",
          answer: "كلا. يحق لجميع المستثمرين الدوليين من مختلف الجنسيات شراء وتملك العقارات بنظام التملك الحر بنسبة ١٠٠٪ في دبي. نقدم دعماً كاملاً لعملائنا في الخارج، بدءاً من مراجعة العقود وفتح الحسابات المصرفية وحتى إصدار سند الملكية وإدارة تأجير العقار عن بُعد.",
        },
        {
          question: "ما هو رأس المال المطلوب للبدء في الاستثمار؟",
          answer: "من خلال الشروط التفاوضية لمبادرة شي أونز مع المطورين، تبدأ الدفعات الأولى عادة من ١٠٪ إلى ١٥٪ فقط، مع إمكانية جدولة بقية الأقساط الشهرية بدفعات ميسرة طوال فترة البناء، مما يمكنكِ من الاستثمار دون تسييل أصولكِ الأساسية.",
        },
        {
          question: "هل تناسب شي أونز المستثمرات لأول مرة؟",
          answer: "بكل تأكيد. أكثر من ٩٤٪ من عضواتنا يمتلكن عقاراتهن لأول مرة. تم تصميم المبادرة خصيصاً لتبسيط المفاهيم، وشرح الضمانات القانونية، وتقديم مشورة فردية موثوقة لتكوني مطمئنة وواثقة في كل خطوة.",
        },
        {
          question: "كيف تسير جلسة الاستشارة الخاصة؟",
          answer: "بعد تقديم بياناتكِ، يقوم مستشار استثماري أول من أوريكس بريفي بترتيب اجتماع افتراضي أو حضوري خاص مدته ٣٠ دقيقة. نحلل أهدافكِ المالية، ونستعرض أحدث بيانات السوق، ونقدم لكِ خيارات مدروسة—دون أي إلزام بالشراء.",
        },
        {
          question: "ما هي الضمانات القانونية التي تحمي استثماري في دبي؟",
          answer: "تخضع جميع المعاملات العقارية في دبي لرقابة صارمة من دائرة الأراضي والأملاك ومؤسسة التنظيم العقاري (ريرا). كما تُودع أموال المشاريع قيد الإنشاء في حسابات ضمان حكومية ولا تُصرف للمطور إلا مع التحقق المستقل من إنجاز مراحل البناء.",
        },
        {
          question: "هل توجد أي رسوم خفية على الاستشارات أو الخدمات؟",
          answer: "كلا على الإطلاق. ورش العمل التثقيفية، تقارير السوق، وجلسات الاستشارة الاستراتيجية مجانية بالكامل بنسبة ١٠٠٪ لعضوات مجتمع شي أونز.",
        },
      ],
    },
    consultation: {
      tag: "الخطوة التالية",
      headingLine1: "ابدأي رحلتكِ نحو",
      headingLine2: "السيادة المالية",
      paragraph: "احجزي جلسة استراتيجية فردية وسرية مع كبار مستشاري أوريكس بريفي. لا عروض ترويجية ولا ضغوط—فقط بيانات دقيقة ومحايدة تناسب أهدافكِ الشخصية.",
      checks: [
        "جلسة استشارية سرية لمدة ٣٠ دقيقة لمراجعة محفظتكِ",
        "الاستفادة من خطط دفع شهرية تفاوضية خاصة بالعضوات",
        "استشارات مجانية بالكامل لعضوات مجتمع بينغ شي",
      ],
      instantCommTag: "تفضلين التواصل الفوري؟",
      whatsappPrompt: "تواصلي مباشرة مع فريق الاستشارات عبر واتساب",
      form: {
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "مثال: فاطمة الهاشمي",
        email: "البريد الإلكتروني",
        emailPlaceholder: "fatima@example.com",
        phone: "رقم الواتساب",
        phonePlaceholder: "+971 50 000 0000",
        date: "التاريخ المفضل",
        timeSlot: "الوقت المفضل",
        timeSlots: [
          "صباحاً (١٠:٠٠ ص – ١:٠٠ م)",
          "ظهراً (١:٠٠ م – ٤:٠٠ م)",
          "مساءً (٤:٠٠ م – ٧:٠٠ م)",
        ],
        notes: "اهتماماتكِ أو استفساراتكِ (اختياري)",
        notesPlaceholder: "مثال: استثمار للمرة الأولى، البحث عن عائد إيجاري، أو شروط الإقامة الذهبية...",
        submitBtn: "تأكيد طلب الاستشارة الخاصة",
        submitting: "جاري الإرسال...",
        successTitle: "تم استلام طلب الاستشارة بنجاح",
        successDesc: "سيتواصل معكِ أحد كبار مستشاري أوريكس بريفي خلال ساعتي عمل عبر الواتساب أو البريد الإلكتروني لتأكيد الموعد.",
        privacyNote: "بياناتكِ في سرية تامة ومحمية بموجب قوانين حماية الخصوصية في دولة الإمارات.",
      },
    },
    footer: {
      description: "تمكين المرأة من خلال الثقافة المالية، الاستشارات الشفافة، والفرص الاستثمارية الحصرية في سوق عقارات دبي.",
      circleTag: "انضمي إلى دائرة شي أونز",
      circleTitle: "احصلي على تحليلات السوق الحصرية والوحدات المختارة قبل إطلاقها",
      emailPlaceholder: "أدخلي بريدكِ الإلكتروني",
      subscribeBtn: "اشتراك",
      thankYou: "✨ شكراً لاشتراككِ في دائرة شي أونز الحصرية!",
      col1Title: "عن المبادرة",
      col1Links: [
        { label: "عن شي أونز", href: "#about" },
        { label: "الالتزامات الستة", href: "#why-she-owns" },
        { label: "المؤسسون", href: "#founders" },
      ],
      col2Title: "الفعاليات والتجارب",
      col2Links: [
        { label: "المعرض العقاري", href: "#property-show" },
        { label: "لقاءاتنا السابقة", href: "#past-events" },
        { label: "استشارة خاصة", href: "#consultation" },
      ],
      col3Title: "الأطر القانونية والتنظيمية",
      col3Text: "تتم كافة المعاملات والاستشارات العقارية بالتوافق التام مع لوائح دائرة الأراضي والأملاك ومؤسسة التنظيم العقاري (ريرا) عبر معايير التوثيق المعتمدة في دولة الإمارات.",
      col4Title: "التواصل المباشر",
      col4Address: "مكتب ١٥٠٩، ذا إكستشينج تاور، الخليج التجاري، دبي، الإمارات",
      col4Phone: "+971 50 181 5561",
      col4Email: "info@sheowns.com",
      copyright: "© ٢٠٢٦ مبادرة شي أونز. مقدمة من أوريكس بريفي العقارية وغلف نيوز، برعاية جمعية بينغ شي. جميع الحقوق محفوظة.",
      disclaimer: "إخلاء مسؤولية: مبادرة شي أونز هي منصة تثقيفية واستشارية متخصصة. تتم كافة المعاملات العقارية عبر وسطاء مرخصين وعقود مطورين مسجلة رسمياً لدى دائرة الأراضي والأملاك في دبي.",
      backToTop: "العودة للأعلى",
    },
    popup: {
      badge: "مجاناً لعضوات شي أونز",
      titlePart1: "دليل المستثمرة لأول مرة في",
      titlePart2: "عقارات دبي",
      description: "كل ما لم يشرحه لكِ أحد من قبل — عقود المشاريع قيد الإنشاء، خطط الدفع الشهرية الميسرة، ضمانات دائرة الأراضي والأملاك، وما يجب الانتباه إليه. كُتب لأجل المرأة، بأيدي خبيرات متمرسات.",
      bullets: [
        "كيف يعمل الاستثمار العقاري قيد الإنشاء في دبي خطوة بخطوة",
        "كيفية التفاوض على شروط الدفع الميسرة مع كبار المطورين",
        "حسابات الضمان الحكومية والأطر القانونية لحماية حقوقكِ",
      ],
      placeholder: "أدخلي بريدكِ الإلكتروني",
      btn: "احصلي على الدليل فوراً",
      sending: "جاري الإرسال...",
      spamNote: "سنرسل الدليل مباشرة إلى بريدكِ الإلكتروني. نلتزم بعدم إرسال رسائل غير مرغوب فيها.",
      successTitle: "تم إرسال الدليل!",
      successDesc: "يرجى تفقد صندوق الوارد في بريدكِ الإلكتروني للحصول على رابط التحميل المباشر.",
    },
  },
};
