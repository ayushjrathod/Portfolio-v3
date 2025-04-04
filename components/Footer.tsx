import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-4">
            <p className="text-xs md:text-sm dark:text-gray-300">
              © {new Date().getFullYear()} Ayush Rathod. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 md:space-x-6">
            <a
              href="mailto:ayushjrathod@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors group"
              aria-label="Email"
            >
              <Image
                src="/socials/email.svg"
                alt="Logo"
                width={32}
                height={32}
                className="m-2 md:m-4 dark:invert transform transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors group"
              aria-label="LinkedIn"
            >
              <Image
                src="/socials/linkedin.svg"
                alt="Logo"
                width={24}
                height={24}
                className="m-2 md:m-4 dark:invert transform transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://twitter.com/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors group"
              aria-label="Twitter"
            >
              <Image
                src="/socials/x.svg"
                alt="Logo"
                width={28}
                height={28}
                className="m-2 md:m-4 dark:invert transform transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors group"
              aria-label="GitHub"
            >
              <Image
                src="/socials/github.svg"
                alt="Logo"
                width={28}
                height={28}
                className="m-2 md:m-4 dark:invert transform transition-transform group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
