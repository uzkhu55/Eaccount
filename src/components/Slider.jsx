import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const works = [
  {
    artist: "user1",
    art: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "user2",
    art: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "user3",
    art: "https://plus.unsplash.com/premium_photo-1661774987792-17a95638d874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    artist: "user4",
    art: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "user5",
    art: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "user6",
    art: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "user7",
    art: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full whitespace-nowrap flex justify-center items-center gap-16 cursor-pointer py-20">
      <div className="flex w-max space-x-4 p-4 ">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0 ">
            <div className="overflow-hidden rounded-md cursor-pointer">
              <Image
                src={artwork.art}
                alt={`Ажилтан ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover "
                width={600}
                height={400}
              />
            </div>
            <figcaption className=" text-lg">
              Ажилтан <span className="font-semibold">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
