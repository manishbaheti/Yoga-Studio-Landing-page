import { Clock, Calendar, MapPin, Heart, Sun, Activity } from 'lucide-react';

export const BRAND = {
  name: "Chakraa Yoga Lab",
  tagline: "Yoga for Flexibility, Balance & Mental Wellbeing",
  location: "The Karate School, Level 1, 72/76 Portman St, Oakleigh VIC 3166",
  email: "nidhibaheti@yahoo.co.in",
  instructor: "Nidhi Maheshwari",
  logo: "https://lh3.googleusercontent.com/d/1VUznRy2HPGyfmrvag_PZxK1iqs4FCLRD" // Path to the uploaded gold tree logo
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
    title: "Mental Health & Reset",
    description: "Modern life is demanding. Reclaim your focus with specialized yoga designed for a complete mental wellness reset."
  },
  {
    icon: Activity,
    title: "Flexibility & Movement",
    description: "Ease persistent stiffness and improve your range of motion with flows that prioritize functional flexibility and balance."
  },
  {
    icon: Sun,
    title: "Breathwork & Energy",
    description: "Learn essential yoga breathwork techniques that restore your natural energy levels and calm the nervous system."
  }
];

export const SOLUTIONS = [
  {
    title: "Beginner Friendly Environment",
    description: "Perfect for those exploring yoga for the first time. We provide a supportive space where every movement is tailored to you."
  },
  {
    title: "Tailored 1-on-1 Sessions",
    description: "Looking for personalized attention? We offer private tailored yoga sessions to help you reach your specific health and mobility goals."
  },
  {
    title: "Convenient Local Studio",
    description: "Located on Portman St, we are the go-to studio for the Oakleigh and Huntingdale communities, just steps from the station."
  }
];

export const SCHEDULE = [
  {
    day: "Wednesday",
    time: "10:00 AM – 11:00 AM",
    name: "Mid-Week Wellness",
    focus: "Gentle Flow & Breathwork",
    icon: Sun
  },
  {
    day: "Sunday",
    time: "9:00 AM – 10:00 AM",
    name: "Weekend Reset",
    focus: "Flexibility & Balance",
    icon: Calendar
  }
];

export const PLANS = [
  {
    name: "Weekly Calm",
    frequency: "1 Class / Week",
    options: "Wednesday OR Sunday",
    price: "$165",
    period: "for 1 term",
    perClass: "~$18.33 per class",
    bestFor: "Managing stress with a non-intimidating commitment.",
    isPrimary: false
  },
  {
    name: "Flex & Flow",
    frequency: "2 Classes / Week",
    options: "Wednesday AND Sunday",
    price: "$295",
    period: "for 1 term",
    perClass: "~$16.38 per class",
    bestFor: "Maximum flexibility and fast-tracking stress relief.",
    isPrimary: true,
    tag: "Best Value"
  }
];