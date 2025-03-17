// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg", // Raptors game hero image
  "https://images.unsplash.com/photo-1573497019418-2d8b1df28e62?q=80&w=500", // Crowd excitement
  "https://images.unsplash.com/photo-1601917114060-9f531a3b1765?q=80&w=500", // Arena atmosphere
];

export const prizeContent = {
  title: "Live Raptors Experience Giveaway",
  description: "Win two lower bowl tickets to see the Toronto Raptors in action on Friday, March 28, 2025. Experience the thrill of live NBA basketball with prime seating that lets you catch every slam-dunk and game-winning shot up close.",
  features: [
    "Two lower bowl tickets to a Toronto Raptors game",
    "Experience the electrifying atmosphere of live NBA action",
    "Perfect for an unforgettable date night or a family outing",
    "Prize valued between $300 - $400",
    "Exclusive opportunity for true Raptors fans",
  ],
  value: "$300 - $400",
};

// Header section
export const headerContent = {
  title: "Win a Night Out at the Raptors Game!",
  description: "Score two lower bowl tickets to experience the thrill of live NBA basketball. Enter now for your chance to catch the Toronto Raptors live on March 28, 2025!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

// Navigation section
export const navigationContent = {
  title: "Raptors Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Getting started is easy! Follow these simple steps to enter our Raptors ticket giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and hit submit."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share this giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Check your email and confirm your entry to complete the process."
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Share for more chances" 
    },
    { 
      icon: "Gift", 
      title: "Exclusive Event", 
      desc: "Experience live NBA action" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry and secure your chance to win."
  },
  currentEntries: 482
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older residing in the Greater Toronto Area can enter this giveaway."
    },
    {
      question: "When is the giveaway running?",
      answer: "The promotion starts on March 3, 2025 and the draw will be held on March 21, 2025."
    },
    {
      question: "How is the winner selected?",
      answer: "The winner will be chosen randomly from all valid entries using a certified selection tool to ensure fairness."
    },
    {
      question: "How will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim the prize."
    },
    {
      question: "Can I enter more than once?",
      answer: "Each person may enter once. Additional entries can be earned by sharing the giveaway on social media (up to 3 additional entries)."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, your information will only be used for this giveaway and will not be shared with third parties."
    }
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share the giveaway on social media for additional entry opportunities",
    "Mark your calendar with the draw date so you don’t miss the announcement"
  ],
  importantNotice: "All winners will be contacted via the email provided during entry. Please check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  brokerage: {
    name: "Sales Genius",
    address: "Toronto, ON"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "Sales Genius brings exclusive experiences and premium giveaways to Toronto sports fans.",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  quickLinks: ["Home", "About", "Giveaways", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Sales Genius",
    address: "Toronto, ON"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "Sales Genius",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025 23:59:59")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'red-600',
    light: 'red-400',
    dark: 'red-800',
    gradient: 'from-red-500 to-red-700',
    text: 'red-700',
    textLight: 'red-500',
    textDark: 'red-900',
    hover: 'red-700',
    border: 'red-200',
    background: 'red-50',
    accent: 'red-100',
    accentDark: 'red-300',
  },
  secondary: {
    main: 'black',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'black',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-red-100/70 via-red-50/40 to-transparent',
    countdownBg: 'from-red-800 to-red-950',
    countdownText: 'from-red-200 to-red-400',
    prizeTitle: 'from-red-700 to-red-500',
    button: 'from-red-500 to-red-600',
    buttonHover: 'from-red-600 to-red-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(239,68,68,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};