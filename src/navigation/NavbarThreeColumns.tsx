import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  centerChildren: ReactNode;
  rightChildren: ReactNode;
};

const NavbarThreeColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav className="pl-40">
      <ul className="navbar flex font-medium text-xl text-white">
        {props.centerChildren}
      </ul>
    </nav>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
        {props.rightChildren}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarThreeColumns };
