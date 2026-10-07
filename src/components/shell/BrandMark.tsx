import Link from 'next/link';
import Image from 'next/image';

export function BrandMark() {
  return (
    <Link href="/" className="brand-mark">
      <Image
        src="/logo.svg"
        alt="123 Design"
        width={120}
        height={120}
        className="brand-mark__logo"
        priority
      />
    </Link>
  );
}
