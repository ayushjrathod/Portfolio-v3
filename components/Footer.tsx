import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-4">
            <p className="text-sm">© {new Date().getFullYear()} Ayush Rathod. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Image src="/socials/linkedin.svg" alt="Logo" width={30} height={30} className="m-4" />
            </a>
            <a
              href="https://twitter.com/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <Image src="/socials/x.svg" alt="Logo" width={35} height={35} className="m-4" />
            </a>
            <a
              href="https://github.com/ayushjrathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <Image src="/socials/github.svg" alt="Logo" width={35} height={35} className="m-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
