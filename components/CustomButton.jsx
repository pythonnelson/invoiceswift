import Link from "next/link";

const CustomButton = ({ className, title, icon, href }) => {
  return (
    <Link href={href} className={className}>
      {title}
      {icon}
    </Link>
  );
};

export default CustomButton;
