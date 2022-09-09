import { apply, css, tw } from "@twind";

interface DateProps {
  date: string;
  isWhite?: boolean;
}

const niceDate = (date: string): string => {
  const d = new Date(date);
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

export function Published({ date, isWhite = false }: DateProps) {
  return (
    <time
      class={tw`${isWhite && "text-white"}`}
      dateTime={date}
    >
      {date}
    </time>
  );
}
