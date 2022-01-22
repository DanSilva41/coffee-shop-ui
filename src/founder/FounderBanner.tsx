import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IFounderProps = {
  title: string;
  description: string;
  name: string;
  image: string;
};

const FounderBanner = (props: IFounderProps) => (
  <div className="text-center flex flex-col p-2 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-gray-800 rounded-md">
    <div className="text-center">
      <div className="text-2xl font-semibold">
        <div className="text-white">{props.title}</div>
      </div>
      <div className="text-lg font-semibold">
        <div className="text-primary-500">{props.description}</div>
      </div>
    </div>
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      <Image
        src={props.image}
        alt={props.name}
        width="250"
        height="250"
        className="rounded-full"
      />
      <div className="text-2xl font-semibold text-center">
        <Link href={AppConfig.socials.instagram}>
          <a target="_blank" title="Saiba mais sobre ela">
            <div className="text-pink-300">{props.name}</div>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export { FounderBanner };
