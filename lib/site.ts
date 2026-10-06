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
  address: "No.44A, Rajeshwari Complex, 100 Feet Road, Gandhipuram, Coimbatore - 641 012",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.956833168375!2d76.9688687!3d11.020671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41665d44dbe470b3!2sMG%20Gold%20Mart%20-%20Gold%20Buyers%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1628215069467!5m2!1sen!2sin",
  description: "MG Gold Mart, your trusted and best old gold buyers in Coimbatore, offers instant cash for your gold. Sell your gold today and get the best value.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  {
    label: "Services",
    href: "/sell-used-gold/",
    children: [
      { label: "Spot Cash for Gold", href: "/sell-used-gold/" },
      { label: "Instant Cash", href: "/instant-cash/" },
      { label: "Release Pledged Gold", href: "/relese-pledged-gold/" },
    ],
  },
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
];
