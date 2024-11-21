"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PieChart } from "lucide-react";

function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isAnimating]);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return <>{count}</>;
}

export default function Component() {
  const statsRef = useRef(null);
  const isVisible = useIntersectionObserver(statsRef);

  return (
    <div className="min-h-screen bg-blue-100/80 flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="bg-blue-900 p-4 rounded-lg inline-block mb-8">
          <PieChart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Нийт хандалтын тоо
        </h1>
        <p className="text-lg text-blue-800/80">20 жилийн туршлагатай </p>
      </motion.div>

      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
      >
        {[
          { number: 170, label: "Үйлчлүүлэгчид", suffix: "+" },
          { number: 3, label: "Хэмнэлт", prefix: "$", suffix: "M" },
          { number: 1350, label: "Кредит оноо", suffix: "+" },
          { number: 146, label: "Холбогдсон байгууллага" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              {stat.prefix}
              {isVisible && <CountUp end={stat.number} />}
              {stat.suffix}
            </div>
            <div className="text-sm text-blue-800/80 font-medium">
              {stat.label}
            </div>
            <div className="w-16 h-1 bg-blue-900 mt-4" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Button
          variant="outline"
          className="bg-white hover:bg-blue-50 text-blue-900 border-blue-900"
        >
          Дэлгэрэнгүй
        </Button>
        <span className="text-blue-900 font-medium">OR</span>
        <Button className="bg-blue-900 hover:bg-blue-800 text-white">
          Холбогдох{" "}
        </Button>
      </motion.div>
    </div>
  );
}
