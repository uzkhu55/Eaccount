"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function SkillBar({ skill, percentage }) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{skill}</span>
        <span className="text-blue-900 font-semibold">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full">
        <motion.div
          className="h-full bg-blue-900 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Linear() {
  const chartData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Label",
        data: [10, 20, 27, 25, 23, 25, 23, 25],
        borderColor: "rgb(209, 213, 219)",
        tension: 0.4,
      },
      {
        label: "Title",
        data: [0, 18, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const stats = [
    { value: 78, label: "Хөрөнгө" },
    { value: 85, label: "Хөрөнгө", suffix: "%" },
    { value: 65, label: "Хөрөнгө", suffix: "k" },
    { value: 89, label: "Хөрөнгө", suffix: "M" },
    { value: 35, label: "Хөрөнгө", suffix: "/hr" },
    { value: 99, label: "Хөрөнгө", suffix: "%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Бүтээгдэхүүн үнэлгээ
          </h2>
          <div className="max-w-2xl mx-auto">
            <SkillBar skill="Зээл" percentage={93} />
            <SkillBar skill="Financial Planning" percentage={91} />
            <SkillBar skill="Tax Solution" percentage={96} />
            <SkillBar skill="Risk Analysis" percentage={89} />
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto border-2 border-blue-200 rounded-full flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-blue-900">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-700">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
