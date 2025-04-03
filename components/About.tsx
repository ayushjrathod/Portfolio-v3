import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-4xl mt-24">
      <p className="text-3xl font-bold text-center mb-8">About Me</p>
      <Image src="/aboutme.png" alt="Hero Image" width={400} height={400} className="mx-auto mb-4" />
      <p className="text-2xl text-left mb-4">
        Hey, Ayush here, a passionate software engineer with a knack for crafting innovative solutions. I am really
        passionate about solving problems with AI powered solutions.
        <br />
        <br /> I try to stay ahead of the curve. New tech? Bring it on. Stagnation? Not my style. I am Versatile as this
        Tech. industry moves fast. <br />
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
