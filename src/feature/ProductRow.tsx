import className from 'classnames';
import Image from 'next/image';

type IProductRowProps = {
  title: string;
  price: string;
  priceCompletion: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const ProductRow = (props: IProductRowProps) => {
  const verticalFeatureClass = className(
    'w-full',
    'sm:w-1/2',
    'md:w-1/2',
    'lg:w-1/3',
    'xl:w-1/3',
    'text-center'
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full">
        <h3 className="text-3xl mb-2 text-gray-900 font-semibold">
          {props.title}
        </h3>
        <span className="text-xl -mt-2">R$ {props.price}</span>
        <span className="text-sm">{` ${props.priceCompletion}`}</span>
      </div>
      <div className="w-full">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width="250"
          height="180"
        />
      </div>
      <div className="w-full">
        <div className="text-xl leading-9">{props.description}</div>
      </div>
    </div>
  );
};

export { ProductRow };