import { Clock, Calendar, MapPin, Heart, Sun, Activity } from 'lucide-react';

export const BRAND = {
  name: "Chakra Yoga Labs",
  tagline: "Find Your Balance and Flexibility",
  location: "The Karate School, Level 1, 72/76 Portman St, Oakleigh VIC 3166",
  email: "hello@chakrayogalabs.com.au", // Placeholder based on domain in banner
  launchDate: "February 1st, 2026",
  instructor: "Nidhi Maheshwari"
};

export const NAVIGATION = [
  { name: 'Schedule', href: '#schedule' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About Nidhi', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PAIN_POINTS = [
  {
    icon: Activity,
    title: "High Mental Stress",
    description: "The mental load never stops, leaving you feeling depleted and anxious."
  },
  {
    icon: Activity,
    title: "Stiffness & Discomfort",
    description: "Years of sitting mean your body feels rigid, limiting daily movement."
  },
  {
    icon: Sun,
    title: "Low Energy",
    description: "You need an activity that restores you, rather than drains you."
  }
];

export const SOLUTIONS = [
  {
    title: "Specialized Focus",
    description: "Movements tailored to gently improve flexibility and functional body movement in mature bodies."
  },
  {
    title: "Anxiety Reduction",
    description: "Incorporating breathwork and mindfulness proven to significantly lower mental stress."
  },
  {
    title: "Convenient Location",
    description: "Held at The Karate School near Oakleigh Station for easy access."
  }
];

export const SCHEDULE = [
  {
    day: "Wednesday",
    time: "10:00 AM – 11:00 AM",
    name: "Weekly Wellness",
    focus: "Gentle Flow & Deep Flexibility",
    icon: Sun
  },
  {
    day: "Sunday",
    time: "9:00 AM – 10:00 AM",
    name: "Weekend Reset",
    focus: "Stress Reduction & Core Movement",
    icon: Calendar
  }
];

export const PLANS = [
  {
    name: "Weekly Calm",
    frequency: "1 Class / Week",
    options: "Wednesday OR Sunday",
    price: "$295",
    period: "for 3 months",
    perClass: "~$24.60 per class",
    bestFor: "Managing stress with a non-intimidating commitment.",
    isPrimary: false
  },
  {
    name: "Flex & Flow",
    frequency: "2 Classes / Week",
    options: "Wednesday AND Sunday",
    price: "$495",
    period: "for 3 months",
    perClass: "~$20.60 per class",
    bestFor: "Maximum flexibility and fast-tracking stress relief.",
    isPrimary: true,
    tag: "Best Value"
  }
];