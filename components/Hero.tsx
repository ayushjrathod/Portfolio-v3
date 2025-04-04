import { MoonIcon } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="max-w-2xl p-6 bg-white dark:bg-black rounded-lg">
      <div className="flex flex-col items-start space-y-4">
        {/* Profile Image */}
        <div className="relative w-30 h-30 overflow-hidden rounded-full mx-2 my-8">
          <Image src="/test5.jpeg" alt="Mia Carter profile photo" width={150} height={2} className="object-cover" />
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <p className="text-4xl font-bold tracking-tight dark:text-white">Hey, I&apos;m Ayush Rathod.</p>
          <div className="flex items-center text-5xl font-bold dark:text-white">Developer & Innovator</div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Engineering intelligent solutions and pushing tech boundaries. Developer by day, visionary innovator by{" "}
          <span className="inline-flex items-center">
            <MoonIcon className="w-4 h-4 mx-1" /> night.
          </span>
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="/AyushRathod.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black text-base rounded-2xl px-12 py-2 m-1 font-semibold inline-block hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get CV
          </a>
          <div className="text-xl flex items-center px-12 py-2 bg-green-100 dark:bg-green-900 rounded-2xl">
            <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
            <span className="text-green-800 dark:text-green-100 text-base">Available for new project</span>
          </div>
        </div>
      </div>
    </div>
  );
}
