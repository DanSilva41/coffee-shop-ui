import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  withTitle?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <>
      <span className={`text-white inline-flex items-center ${fontStyle}`}>
        <Image
          src="/assets/images/logo.jpg"
          alt="Logo"
          width="50"
          height="50"
          className="rounded-full"
        />
        {props.withTitle ? (
          <span className="ml-2">{AppConfig.site_name}</span>
        ) : (
          ''
        )}
      </span>
    </>
  );
};

export { Logo };
