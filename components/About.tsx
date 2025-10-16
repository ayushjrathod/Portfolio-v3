import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-4xl mt-12 md:mt-24 px-4 md:px-0">
      <p className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 dark:text-white">About Me</p>
      <div className="relative w-48 md:w-[300px] h-[400px] mx-auto mb-4">
        <Image
          src="https://res.cloudinary.com/cnserver/image/upload/f_auto,q_auto,w_300,h_400,c_fit/uj21grms05fyvppbkv2m"
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 192px, 300px"
          className="object-contain"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <p className="text-base md:text-xl text-left mb-4 dark:text-gray-300">
        Hey, Ayush here, a passionate software engineer with a knack for crafting innovative solutions. I am really
        passionate about solving problems with AI powered solutions.
        <br />
        I try to stay ahead of the curve. New tech? Bring it on. Stagnation? Not my style. I am Versatile as this Tech.
        industry moves fast. <br />
        <br />
        I believe in continuous learning and growth. Every project is a chance to learn something new and push my
        boundaries. <br />
        <br />
        When I&apos;m not writing code, you&apos;ll find me on the badminton court for a dose of adrenaline or diving
        into the latest video game. Quiet nights? Books or battling some epic chords on my guitar (still a work in
        progress, but hey, gotta start somewhere).
        <br />
        <br /> Let&apos;s break the mold and create something awesome together. Buckle up, it&apos;s gonna be a wild
        ride.
      </p>
    </div>
  );
};

export default About;
