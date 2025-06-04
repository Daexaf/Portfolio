import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay for staggered animations
          setTimeout(() => {
            node.classList.add("visible");
          }, delay);
        } else {
          node.classList.remove("visible");
        }
      },
      {
        threshold: 0.1, // Trigger earlier
        rootMargin: "0px 0px -100px 0px", // Better trigger point
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
