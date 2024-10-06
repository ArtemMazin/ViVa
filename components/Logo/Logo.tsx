import Image from 'next/image';
import React from 'react';
import styles from './Logo.module.css';
import Link from 'next/link';

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Link href="/">
      <Image
        src={src}
        width={90}
        height={36}
        priority={true}
        alt="Товарный знак HMG"
        className={styles.logo}
      />
    </Link>
  );
};

export default Logo;
