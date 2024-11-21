"use client";

import {
  BarChart3,
  DollarSign,
  Diamond,
  ArrowLeftRight,
  Percent,
  CreditCard,
  Facebook,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Component from "@/components/Stats";
import Linear from "@/components/Linear";

const page = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Юу байх1",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",
      bgColor: "bg-[#2B4B8C]",
    },
    {
      icon: DollarSign,
      title: "Юу байх2",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",
      bgColor: "bg-white",
    },
    {
      icon: Diamond,
      title: "Юу байх3",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",
      bgColor: "bg-white",
    },
    {
      icon: ArrowLeftRight,
      title: "Юу байх4",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",

      bgColor: "bg-white",
    },
    {
      icon: Percent,
      title: "Юу байх5",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",

      bgColor: "bg-white",
    },
    {
      icon: CreditCard,
      title: "Юу байх6",
      description:
        "Бизнесийн агуу зүйлийг хэзээ ч нэг хүн хийдэггүй. Тэдгээрийг хүмүүсийн баг хийдэг.",

      bgColor: "bg-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b to-white pt-20">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            className="w-screen h-screen"
            src="https://i.pinimg.com/736x/f2/90/50/f29050c0d54fb56dd67213927877b8b6.jpg"
            alt="Logo"
          />
        </div>
        <div className="  z-10 relative">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-20 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 text-4xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight"
            >
              Манай технологи хөгжлийг хурдасгана
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            >
              Дэвшилтэд технологи ашиглан таны бизнесийн ашгийг нэмэгдүүлж,
              хяналтыг сайжруулна
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                className="bg-white text-[#6B46C1] hover:bg-white/90 px-8 py-6 text-lg font-medium"
                size="lg"
              >
                Бидэнтэй холбогдох e
              </Button>
            </motion.div>
          </motion.main>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`${service.bgColor} ${
                  index === 0 ? "text-white" : "text-gray-800"
                } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2`}
              >
                <CardContent className="p-6  ">
                  <div
                    className={`w-12 h-12 rounded flex items-center justify-center ${
                      index === 0 ? "" : "bg-[#2B4B8C]"
                    } mb-4`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        index === 0 ? "text-white" : "text-white"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p
                    className={`${
                      index === 0 ? "text-white/90" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-[#2B4B8C] p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="bg-[#4B699B] p-3 rounded">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Холбогдох</h2>
              <p className="text-white/80"></p>
            </div>
          </div>
          <Button className="bg-white text-[#2B4B8C] hover:bg-white/90 flex items-center gap-2">
            Залгах
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative pb-16">
          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(120)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-[#2B4B8C] mb-6 relative inline-block">
              Харилцагчийн сэтгэгдэл
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2B4B8C]" />
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Нягтлан бодох бүртгэлийн Юникус онлайн системийг манай байгууллага
              2011 оноос хойш төв болон хөдөө орон нутгийн бүх салбартаа ашиглаж
              байгаа билээ. Энэ систем нь ашиглахад хялбар, манай монголын
              нөхцөл тохирсон систем гэж үзэж байна. Бид Юникус систем
              ашигласнаар тайлан гаргах, нэгтгэхтэй холбоотой цаг хугацаа,
              зардлыг 80% хэмэж чадсан. Гаалийн Ерөнхий газар, Ерөнхий нябо
              Г.Бат-Эрдэнэ Нягтлан бодох бүртгэлийн Юникус онлайн системийг
              манай байгууллага 2010 оноос хойш төв болон хөдөө орон нутгийн бүх
              салбартаа ашиглаж байгаа билээ. Энэ систем нь ашиглахад энгийн
              хялбар, бид Юникус системийг ашигласнаар тайлан гаргах, нэгтгэхтэй
              холбоотой цаг хугацаа, зардлыг 80% хэмэж чадсан.
            </p>
            <Button
              variant="outline"
              className="border-[#2B4B8C] text-[#2B4B8C] hover:bg-[#2B4B8C] hover:text-white"
            >
              Read more
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/logo.png"
              alt="Business meeting with financial charts"
              className="w-full h-auto rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
      <Component />
      <Linear />

      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl flex items-center justify-center flex-col gap-4 md:text-4xl font-bold text-[#2B4B8C] mb-6">
          Асуулт байна уу? Бидэнтэй чөлөөтэй холбогдоорой
          <a
            className="flex items-center"
            target="blank"
            href="
          https://www.facebook.com/victory.tse
        "
          >
            <Facebook />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default page;
