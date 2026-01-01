import { profileData, socialData } from "@/lib/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-4">
            <p className="text-xs md:text-sm dark:text-gray-300">
              © {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 md:space-x-6">
            {socialData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors group"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={`${social.name} Logo`}
                  width={social.width}
                  height={social.height}
                  className="m-2 md:m-4 dark:invert transform transition-transform group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
