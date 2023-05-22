interface ExperienceItemProps {
  timeline: string;
  title: string;
  company: string;
}

export default function ExperienceItem(props: ExperienceItemProps) {
  const { timeline, title, company } = props;

  return (
    <li className="grid grid-cols-2 items-center py-2 gap-8 border-t border-b border-zinc-700">
      <h2 className="text-8xl font-head uppercase font-bold">{timeline}</h2>
      <div className="flex flex-col gap-1">
        <p className="text-5xl">{title}</p>
        <p className="text-3xl">{company}</p>
      </div>
    </li>
  );
}
