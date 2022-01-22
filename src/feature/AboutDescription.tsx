import className from 'classnames';
import { useRouter } from 'next/router';

type IAboutDescriptionProps = {
  title: string;
  description?: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const AboutDescription = (props: IAboutDescriptionProps) => {
  const verticalFeatureClass = className('flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': props.reverse,
  });

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6 font-raleway">
        <h3 className="text-3xl text-gray-900 font-light">{props.title}</h3>
        {props.description ? (
          <div className="mt-6 text-xl leading-9">{props.description}</div>
        ) : (
          ''
        )}
      </div>

      <div className="w-full sm:w-1/2 pl-6 sm:pl-12 md:pl-20 lg:pl-28 img-animation">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="rounded-md text-center"
        />
      </div>
    </div>
  );
};

export { AboutDescription };
