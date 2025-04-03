import { MoonIcon } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="max-w-4xl p-6 bg-white rounded-lg">
      <div className="flex flex-col items-start space-y-4">
        {/* Profile Image */}
        <div className="relative w-40 h-40 overflow-hidden rounded-full mx-2 my-8">
          <Image src="/test5.jpeg" alt="Mia Carter profile photo" width={150} height={2} className="object-cover" />
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <p className="text-6xl font-bold tracking-tight">Hey, I&apos;m Ayush Rathod.</p>
          <div className="flex items-center text-7xl font-bold">Developer & Innovator</div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-2xl">
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
            className="bg-black text-white text-xl rounded-2xl px-12 py-6 m-1 font-semibold inline-block"
          >
            Get CV
          </a>
          <div className="text-xl flex items-center px-12 py-6 bg-green-100 rounded-2xl">
            <div className="w-2 h-2 mr-2 bg-green-500 rounded-full "></div>
            <span className="text-green-800">Available for new project</span>
          </div>
        </div>
      </div>
    </div>
  );
}
