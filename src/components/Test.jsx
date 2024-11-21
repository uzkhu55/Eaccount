<Card
  key={index}
  className={`${
    index === 0 ? "text-white" : "text-gray-800"
  } shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2`}
>
  <CardContent
    className={`p-6 ${
      index === 0 ? "hover:bg-[#2B4B8C]" : "hover:bg-[#2B4B8C] hover:text-white"
    }`}
  >
    <div
      className={`w-12 h-12 rounded flex items-center justify-center ${
        index === 0 ? "" : "bg-[#2B4B8C]"
      } mb-4`}
    >
      <Icon
        className={`h-6 w-6 ${index === 0 ? "text-white" : "text-white"}`}
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
    <p className={`${index === 0 ? "text-white/90" : "text-gray-600"}`}>
      {service.description}
    </p>
  </CardContent>
</Card>;
