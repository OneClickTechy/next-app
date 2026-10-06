import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Ramesh K.",
    location: "Saibaba Colony",
    text: "Very professional service. They tested my old gold chains right in front of me using their laser machine. The valuation was higher than other shops in Gandhipuram. Received payment to my account instantly.",
    rating: 5
  },
  {
    name: "Priya Lakshmi",
    location: "RS Puram",
    text: "I was hesitant to sell my mother's old jewellery, but the team at MG Gold Mart made the whole process transparent and pressure-free. Their 0% melting deduction policy is genuine.",
    rating: 5
  },
  {
    name: "Senthil Kumar",
    location: "Peelamedu",
    text: "Used their pledged gold release service. They came to the bank with me, cleared the loan, and paid me the remaining balance immediately. Very smooth experience and highly trustworthy.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-5 bg-[#fbf8f2]">
      <div className="max-w-[1220px] mx-auto">
        <SectionTitle 
          centered 
          eyebrow="Customer Stories" 
          title="What Coimbatore says about us." 
          description="We take pride in offering a transparent, respectful, and highly professional service. Here is what our customers have experienced."
        />
        
        <div className="mt-16 grid md:grid-cols-3 gap-6" data-stagger>
          {testimonials.map((review, idx) => (
            <div data-stagger-item key={idx} className="bg-white p-8 sm:p-10 border border-[#30000b]/5 shadow-sm hover:shadow-md transition-shadow duration-500 rounded-sm">
              <div className="flex gap-1 mb-8 text-[#f4bf2f]">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#55564f] text-[1.05rem] italic leading-relaxed mb-10">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#f0ede4] flex items-center justify-center font-bold text-[#790019]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#30000b] text-sm">{review.name}</h4>
                  <span className="text-xs text-[#77776f]">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
