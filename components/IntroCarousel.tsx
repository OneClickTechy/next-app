"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const slides = [
  {
    eyebrow: "A little more human",
    title: "Your gold has a story.",
    emphasis: "Let it take you somewhere new.",
    description: "Whether it’s an old chain, a broken bangle or jewellery you no longer wear, we make it easier to understand its value — and decide what comes next.",
    link: "/about-us/",
    linkLabel: "Learn about MG Gold Mart",
  },
  {
    eyebrow: "Clear from the start",
    title: "Know what your gold is worth.",
    emphasis: "See every step for yourself.",
    description: "We explain how weight, purity and the day’s market price shape your offer, so you can make an informed decision with confidence.",
    link: "/sell-used-gold/",
    linkLabel: "Explore spot cash for gold",
  },
  {
    eyebrow: "Always your decision",
    title: "Take your time.",
    emphasis: "There’s no pressure to sell.",
    description: "Ask questions, understand the valuation and choose what feels right. You stay in control from the first conversation to the final decision.",
    link: "/about-us/",
    linkLabel: "Our promise to you",
  },
  {
    eyebrow: "A helpful next step",
    title: "A new beginning can be simple.",
    emphasis: "We’re here when you need us.",
    description: "Selling old gold, arranging instant cash or releasing pledged jewellery starts with a straightforward conversation with our Coimbatore team.",
    link: "/contact-us/",
    linkLabel: "Talk to our team",
  },
];

export default function IntroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useGSAP(() => {
    gsap.fromTo(
      ".intro-slide-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, { dependencies: [activeIndex], scope: container });

  const showPrevious = () => setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % slides.length);

  return (
    <section className="editorial-intro" ref={container}>
      <div
        className="editorial-intro-inner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(event.currentTarget.matches(":hover"));
          }
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const startX = touchStartX.current;
          const endX = event.changedTouches[0]?.clientX;
          touchStartX.current = null;
          if (startX === null || endX === undefined) return;
          if (endX - startX > 48) showPrevious();
          if (startX - endX > 48) showNext();
        }}
      >
        <div data-reveal className="intro-side-note">
          <span className="eyebrow">{activeSlide.eyebrow}</span>
          <div className="intro-carousel-progress" role="group" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`intro-carousel-dot${index === activeIndex ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <span className="intro-side-number" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div data-reveal className="intro-copy">
          <div key={activeSlide.title} className="intro-slide-content">
            <h2 className="display-font">{activeSlide.title}<br /><em>{activeSlide.emphasis}</em></h2>
            <div className="intro-bottom">
              <p>{activeSlide.description}</p>
              <div className="intro-carousel-actions">
                <a href={activeSlide.link} className="round-link" aria-label={activeSlide.linkLabel}>
                  <ArrowUpRight size={19} />
                </a>
                <button type="button" className="round-link intro-carousel-nav" aria-label="Previous slide" onClick={showPrevious}>
                  <ArrowLeft size={18} />
                </button>
                <button type="button" className="round-link intro-carousel-nav" aria-label="Next slide" onClick={showNext}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
