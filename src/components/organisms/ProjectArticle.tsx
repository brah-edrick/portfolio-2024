import React from "react";
import Image from "next/image";
import { InvertOnLightMode } from "../atoms/InvertOnLightMode";
import { ExternalLink } from "../molecules/ExternalLink";
import { Paragraph } from "../typography/Paragraph";
import { SkillPill } from "../atoms/SkillPill";
import { H3 } from "../typography/Headings";

interface ProjectArticleProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  bodyContent: React.ReactNode;
  skills: string[];
  className?: string;
}

export const ProjectArticle: React.FC<ProjectArticleProps> = ({
  title,
  href,
  imageSrc,
  imageAlt,
  bodyContent,
  skills,
  className = "",
}) => {
  return (
    <article
      className={`group bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all mb-8 ${className}`}
    >
      <div className="grid grid-rows-1 grid-cols-1 w-full rounded-lg mb-4 overflow-clip border border-yellow-200 border-opacity-25">
        <InvertOnLightMode
          className="brightness-75 group-hover:brightness-100 transition-all"
          as="div"
        >
          <Image alt={imageAlt} src={imageSrc} width={1600} height={900} />
        </InvertOnLightMode>
      </div>

      <ExternalLink href={href}>
        <H3>{title}</H3>
      </ExternalLink>

      <div className="mt-8">{bodyContent}</div>

      <ul className="flex gap-2 flex-wrap mt-8">
        {skills.map((skill, index) => (
          <SkillPill key={index}>{skill}</SkillPill>
        ))}
      </ul>
    </article>
  );
};
