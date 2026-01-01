import { profileData } from "@/lib/data";
import { MoonIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-2xl p-4 md:p-6 rounded-lg">
      <div className="flex flex-col items-start space-y-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24 md:w-30 md:h-30 overflow-hidden rounded-full mx-2 my-4 md:my-8">
          <Image
            src={profileData.image}
            alt={`${profileData.name} profile photo`}
            width={200}
            height={200}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover"
            sizes="(max-width: 768px) 96px, 120px"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <p className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">Hey, I&apos;m {profileData.name}.</p>
          <div className="flex items-center text-3xl md:text-5xl font-bold dark:text-white">{profileData.title}</div>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
          Engineering intelligent solutions and pushing tech boundaries. Developer by day, visionary innovator by{" "}
          <span className="inline-flex items-center">
            <MoonIcon className="w-3 h-3 md:w-4 md:h-4 mx-1" aria-hidden="true" /> night.
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
          <a
            href={profileData.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black text-base rounded-2xl px-8 md:px-12 py-2 m-1 font-semibold inline-block hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get CV
          </a>
          <div className="w-full md:w-auto text-base md:text-xl flex items-center px-8 md:px-12 py-2 bg-green-100 dark:bg-green-900 rounded-2xl">
            <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
            <span className="text-green-800 dark:text-green-100 text-sm md:text-base">{profileData.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
