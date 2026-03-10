"use client";

import { cn } from "@/lib/utils";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[26rem] select-none flex-col justify-between rounded-xl border-[0.75px] border-border bg-background p-4 shadow-sm transition-all duration-700",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn("text-lg", iconClassName)}>{icon}</span>
        <p className={cn("text-sm font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-xs text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards = [] }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = cards.length ? cards : [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2", className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1" },
    { title: "Card 3", description: "Description 3", className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10" },
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {defaultCards.map((card, i) => (
        <DisplayCard key={i} {...card} />
      ))}
    </div>
  );
}
