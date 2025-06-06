"use client";

import Image from "next/image";

const CustomImage = () => {
  return (
    <Image
      src="/me.png"
      alt="Sandro Dezerio"
      loader={({ src }) => src}
      priority
      unoptimized
      width={200}
      height={200}
      className="w-full h-full object-cover"
    />
  );
};

export default CustomImage;
