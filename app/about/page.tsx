import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { imageSlider, metadata, ourStory } from "@/constants/data";

const AboutPage = () => {
  return (
    <div className="mx-auto container max-md:px-6">
      <div className="my-10">
        <h1 className="text-4xl font-bold max-md:text-2xl">{metadata.title}</h1>
        <p className="text-lg font-instrument">{metadata.tagline}</p>
      </div>
      <Carousel>
        <CarouselContent>
          {imageSlider.map((image) => (
            <CarouselItem key={image.image}>
              <div className="w-[full]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={image.image}
                    alt="Image"
                    className="rounded-md object-cover -mt-[10%]"
                    fill
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div>
        <h1 className="text-4xl font-bold max-md:text-2xl">{ourStory.title}</h1>
        {ourStory.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg my-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
