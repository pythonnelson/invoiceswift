import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-blue-500 font-extrabold sm:block md:block">
      Invoice
      <span className="text-fuchsia-500 uppercase font-bold">Swift</span>
    </Link>
  );
};

export default Logo;
