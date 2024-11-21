import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Smartphone,
  RefreshCw,
  Search,
  Star,
  Shield,
} from "lucide-react";

function ServiceCard({ icon, title, description, featured = false }) {
  return (
    <Card
      className={`h-full hover:bg-slate-200 hover:text-black ${
        featured
          ? "bg-[#5B34EA] text-white hover:bg-slate-100 hover:text-black"
          : "bg-white"
      }`}
    >
      <CardContent className="pt-6 cursor-pointer ">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
            featured ? "bg-white/20" : "bg-blue-900  "
          }`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p
          className={`text-sm ${featured ? "text-white/90" : "text-gray-500 "}`}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Service() {
  const services = [
    {
      icon: <Cloud className={`w-6 h-6 text-white`} />,
      title: "Үүлэн систем",
      description:
        "Орчин үеийн бизнесийн хэрэгцээг хангах интеграцилагдсан үүлэн шийдлүүд, дэвшилтэт үйлчилгээ болон системийн оновчлол.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Мобайл програм",
      description:
        "Таны тодорхой бизнесийн шаардлага болон хэрэглэгчийн хүлээлтэд нийцсэн захиалгат мобайл програмууд.",
    },
    {
      icon: <RefreshCw className={`w-6 h-6 text-white]`} />,
      title: "Системийн удирдлага",
      description:
        "Таны бизнесийг хэвийн ажиллуулахад чиглэсэн иж бүрэн системийн удирдлагын шийдлүүд.",
    },
    {
      icon: <Search className={`w-6 h-6 text-white`} />,
      title: "Шинжилгээний үйлчилгээ",
      description:
        "Таны бизнесийн шийдвэр гаргалтад зориулсан дэвшилтэт шинжилгээ болон өгөгдлийн тайлан.",
    },
    {
      icon: <Star className={`w-6 h-6 text-white`} />,
      title: "Тамга үйлчилгээ",
      description:
        "Таны байгууллагын тусгай хэрэгцээг хангах өндөр чанарын үйлчилгээ.",
    },
    {
      icon: <Shield className={`w-6 h-6 text-white]`} />,
      title: "Аюулгүй байдлын шийдлүүд",
      description:
        "Таны бизнесийн эд хөрөнгө болон мэдээлэл хамгаалахад зориулагдсан бат бөх аюулгүй байдал.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-900 font-extrabold text-[12px]">
          Санхүүгийн хяналтыг гар утаснаасаа
        </span>
        <h2 className="text-4xl font-bold mb-4 ">Манай үйлчилгээ</h2>
        <p className="text-gray-600">
          Орчин үеийн технологи болон мэргэжлийн дэмжлэгээр таны байгууллагыг
          амжилттай хөгжүүлэх иж бүрэн шийдлүүд.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            featured={service.featured}
          />
        ))}
      </div>
    </div>
  );
}
