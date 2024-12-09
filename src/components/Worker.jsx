import React from "react";
import { Button } from "./ui/button";
import { ScrollAreaHorizontalDemo } from "./Slider";

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
              <Button className="bg-white hover:bg-black hover:text-white p-6 text-[16px] font-semibold">
                гэрээ байгуулах
              </Button>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative inset-0 z-10 bg-white w-[700px] h-[400px] object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2022/02/24/108777-681686580_large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div
            className="p-6 rounded-lg border-solid bg-slate-300 hover:bg-slate-200 cursor-pointer
          
          "
          >
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
        <div className="w-full h-auto">
          <ScrollAreaHorizontalDemo />
        </div>
      </div>
    </div>
  );
};

export default Worker;
