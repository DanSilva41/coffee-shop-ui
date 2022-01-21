import Image from 'next/image';

type IChefBannerProps = {
  title: string;
  subtitle: string;
  image: string;
};

const ChefBanner = (props: IChefBannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      <Image
        src={props.image}
        alt={props.subtitle}
        width="250"
        height="250"
        className="rounded-full"
      />
      <div className="text-2xl font-semibold">
        <div className="text-primary-500">{props.subtitle}</div>
      </div>
    </div>
  </div>
);

export { ChefBanner };
