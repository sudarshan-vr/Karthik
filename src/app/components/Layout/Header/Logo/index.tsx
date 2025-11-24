import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={270}
        height={90}
        style={{ width: "auto", height: "90px" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
