import React from "react";
import { Button } from "./ui/button";
import Slider from "./Slider";

const Worker = () => {
  const products = [
    {
      name: "Санхүүгийн тайлан",
      icon: "https://i.pinimg.com/736x/30/bf/c2/30bfc28dea656ad415ae6790affc13d8.jpg",
    },
    {
      name: "Татварын төлөвлөлт",
      icon: "https://i.pinimg.com/736x/68/f4/58/68f4584c1a76ed3eb21ab70e47386b7f.jpg",
    },
    {
      name: "Аудитын хэрэгслүүд",
      icon: "https://i.pinimg.com/736x/68/f4/58/68f4584c1a76ed3eb21ab70e47386b7f.jpg",
    },
    {
      name: "Дагаж мөрдөх",
      icon: "https://i.pinimg.com/736x/68/f4/58/68f4584c1a76ed3eb21ab70e47386b7f.jpg",
    },
  ];

  return (
    <div className=" bg-gradient-to-br flex flex-col justify-center items-center pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {products.map((product) => (
            <div key={product.name} className="text-center">
              <div className="w-16 h-16 mx-auto mb-2">
                <img
                  src={product.icon}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>
              <p className="text-sm text-gray-600">{product.name}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Санхүүгийн тайлан
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
                Хялбаршуулсан систем
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Санхүүгийн мэдээллээ бидний тусламжтайгаар хэрэгжих боломжтой
              ойлголт болгон хувирга иж бүрэн тайлангийн систем. Нягтлан
              бодогчид болон үнэн зөв, үр ашигтай байхыг шаарддаг санхүүгийн
              мэргэжилтнүүд.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Demo туршаад үзээрэй <div className="ml-2 h-4 w-4"></div>
              </Button>
              <Button>Заавар үзэх</Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="aspect-video bg-gray-900 relative">
                  <div className="w-[600px] h-[400px] object-cover text-white">
                    <img className="object-cover" src="/logo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-100 rounded-full p-4">
              <div className="w-32">
                <div className="p-4 flex items-center gap-2">
                  <div className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Quick Start</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border-solid bg-slate-300 hover:bg-slate-200 cursor-pointer">
            <h3 className="font-semibold mb-2">Автомат тайлангууд</h3>
            <p className="text-sm text-gray-600">
              Хэдхэн товшилтоор санхүүгийн дэлгэрэнгүй тайланг гарга
            </p>
          </div>

          <div>
            <div className="p-6 rounded-lg border-solid bg-slate-300 hover:bg-slate-200 cursor-pointer">
              <h3 className="font-semibold mb-2">Бодит цагийн Analytics</h3>
              <p className="text-sm text-gray-600">
                Өөрийн санхүүгийн хэмжигдэхүүнийг бодит цаг хугацаанд динамикаар
                хянаарай хяналтын самбарууд
              </p>
            </div>
          </div>
          <div>
            <div className="p-6 rounded-lg border-solid bg-slate-300 hover:bg-slate-200 cursor-pointer">
              <h3 className="font-semibold mb-2">Дагаж мөрдөхөд бэлэн</h3>
              <p className="text-sm text-gray-600">
                Суурилуулсан зохицуулалтын тайлангийн загваруудыг дагаж
                мөрдөөрэй
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Worker;
