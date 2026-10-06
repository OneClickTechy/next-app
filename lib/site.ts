export const site = {
  name: "MG Gold Mart",
  phone: "+919514415588",
  displayPhone: "+91 95144 15588",
  phones: [
    { label: "0422 4521211", href: "tel:04224521211" },
    { label: "9025971078", href: "tel:+919025971078" },
    { label: "9514415588", href: "tel:+919514415588" },
  ],
  email: "mathimggold64@gmail.com",
  branches: [
    {
      name: "Gandhipuram Branch",
      address: "1st Floor, Rajeshwari Complex, Dr Rajendra Prasad Rd, near Bandhan Bank, Cross Cut, Gandhipuram, Coimbatore, Tamil Nadu 641012",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.243798106991!2d76.9688685!3d11.0203262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584e1f36a58d%3A0x41665d44dbe470b3!2sMG%20Gold%20Mart%20-%20Gold%20Buyers%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1791283175251!5m2!1sen!2sin"
    },
    {
      name: "Saibaba Colony Branch",
      address: "No 361, GKM Complex, Alagesan Rd, Nesavaalar Colony, Saibaba Colony, Coimbatore, Tamil Nadu 641011",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2082938987764!2d76.94645609999999!3d11.022993099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8592c531fe685%3A0x4497d3a1ffa939c0!2sMG%20Gold%20Mart!5e0!3m2!1sen!2sin!4v1791283204299!5m2!1sen!2sin"
    }
  ],
  description: "MG Gold Mart, your trusted and best old gold buyers in Coimbatore, offers instant cash for your gold. Sell your gold today and get the best value.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  {
    label: "Resources",
    href: "/gold-calculator/",
    children: [
      { label: "Gold Calculator", href: "/gold-calculator/" },
      { label: "FAQs", href: "/faq/" },
    ],
  },
  { label: "Contact", href: "/contact-us/" },
];

export const serviceItems = [
  {
    number: "01",
    title: "Spot Cash for Gold",
    description: "Turn old, broken or unwanted gold into a transparent offer and same-visit payment.",
    href: "/sell-used-gold/",
    image: "/assets/images/buy-gold.jpg",
  },
  {
    number: "02",
    title: "Instant Cash",
    description: "A quick, secure way to access the value of your gold, with every step explained.",
    href: "/instant-cash/",
    image: "/assets/images/instant-cash.jpg",
  },
  {
    number: "03",
    title: "Release Pledged Gold",
    description: "Personal guidance to help you release pledged jewellery from banks and pawnbrokers.",
    href: "/relese-pledged-gold/",
    image: "/assets/images/pledged.jpg",
  },
  {
    number: "04",
    title: "MG DigiGold",
    description: "Buy, sell, and manage 24K pure digital gold securely from your mobile phone.",
    href: "/digigold/",
    image: "/assets/images/mobile.webp",
  },
];
