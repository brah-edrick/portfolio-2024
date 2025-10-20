import React from "react";
import Image from "next/image";
import { InvertOnLightMode } from "../atoms/InvertOnLightMode";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle: string;
  mainTitle: React.ReactNode;
  socialNav: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  mainTitle,
  socialNav,
}) => {
  return (
    <div className="lg:sticky lg:h-screen pt-24 top-0 px-8 sm:px-4 mb-32 lg:mb-0">
      <section className="flex flex-col">
        <div>
          <div className="border-solid border-4 border-yellow-400 rounded-full w-16 h-16 lg:w-24 lg:h-24 overflow-hidden mb-2">
            <InvertOnLightMode as="div">
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={200}
                height={200}
                className="mb-4 saturate-100"
              />
            </InvertOnLightMode>
          </div>
          {title}
          <h2 className="text-sm text-yellow-200">{subtitle}</h2>
          <h3 className="text-4xl font-bold leading-normal my-6">
            {mainTitle}
          </h3>
        </div>

        {socialNav}
      </section>
    </div>
  );
};
