import className from 'classnames';
import { useRouter } from 'next/router';

type IAboutDescriptionProps = {
  title: string;
  description?: string;
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
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        {props.description ? (
          <div className="mt-6 text-xl leading-9">{props.description}</div>
        ) : (
          ''
        )}
      </div>

      <div className="w-full sm:w-1/2 p-6 img-animation">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export { AboutDescription };
