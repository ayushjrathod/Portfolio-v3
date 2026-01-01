import { aboutData } from "@/lib/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-4xl mt-12 md:mt-24 px-4 md:px-0">
      <p className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 dark:text-white">{aboutData.title}</p>
      <div className="relative w-48 md:w-[300px] h-[400px] mx-auto mb-4">
        <Image
          src={aboutData.image}
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 192px, 300px"
          className="object-contain"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="text-base md:text-xl text-left mb-4 dark:text-gray-300 space-y-4">
        {aboutData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
