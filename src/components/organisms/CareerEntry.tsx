import React from "react";
import { H3, H4 } from "../typography/Headings";
import { Paragraph } from "../typography/Paragraph";
import { SkillPill } from "../atoms/SkillPill";
import { ExternalLink } from "../molecules/ExternalLink";

interface CareerEntryProps {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  bodyContent: React.ReactNode;
  skills: string[];
  className?: string;
}

export const CareerEntry: React.FC<CareerEntryProps> = ({
  period,
  title,
  company,
  companyUrl,
  bodyContent,
  skills,
  className = "",
}) => {
  return (
    <div
      className={`bg-yellow-200/5 rounded-lg p-4 -mx-4 lg:mx-0 bg:bg-yellow-200/0 transition-all mb-16 ${className}`}
    >
      <H4 className="mb-1">{period}</H4>
      <H3>
        {title} at{" "}
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          company
        )}
      </H3>

      <div className="mt-8">{bodyContent}</div>

      <ul className="flex gap-2 flex-wrap mt-8">
        {skills.map((skill, index) => (
          <SkillPill key={index}>{skill}</SkillPill>
        ))}
      </ul>
    </div>
  );
};
