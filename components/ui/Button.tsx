import Link from "next/link";

type ButtonProps = {
  href: string;
  title: string;
};

export default function Button({ href, title }: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-primary-500 font-bold px-6 py-3 text-black hover:bg-primary-600 duration-200"
    >
      {title}
    </Link>
  );
}
