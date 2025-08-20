import React from "react";

interface ExperienceItemProps {
  duration: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export default function ExperienceItem({
  duration,
  title,
  company,
  description,
  tags,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-4 gap-6 border-b border-border-muted pb-8 pt-8">
      {/* Date Range */}
      <div className="col-span-1 text-sm font-medium text-text-secondary">
        {duration}
      </div>

      {/* Job Details */}
      <div className="col-span-3 space-y-3">
        <h3 className="text-lg font-heading font-semibold text-text-primary flex flex-col">
          {title}
          <span className="text-accent-primary hover:text-accent-hover cursor-pointer transition-colors text-sm">
            {company}
          </span>
        </h3>
        {/*<p className="text-sm leading-relaxed text-text-secondary font-sans">
          {description}
        </p>*/}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface text-accent-secondary text-xs px-3 py-1 rounded-full border border-border-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
