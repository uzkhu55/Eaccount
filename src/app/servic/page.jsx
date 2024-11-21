import Service from "@/components/ServiceGrid";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[350px] pt-[150px]">
      <div className="flex flex-col justify-center items-center gap-5 rounded-lg border-solid border-blue-700 w-full h-[250px]">
        <h1 className="text-blue-900 font-mono font-bold text-3xl">
          E-Account үйлчилгээ
        </h1>
        <span className="text-slate-400">
          E-account бол таны бизнесийн үйл ажиллагааны өдөр тутмын борлуулалт,
          <br />
          зардал, төлбөр тооцоог бүртгэн санхүү, татвар, НДШ, НӨАТ-ын тайланг{" "}
          <br />
          цаг тухай бүрт дижитал системийн тусламжтай мэргэжлийн нягтлан бодогч{" "}
          <br />
          нар бэлтгэн илгээж таны цаг завыг хэмнэх гэрээт цахим үйлчилгээ юм.
        </span>
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
};

export default page;
