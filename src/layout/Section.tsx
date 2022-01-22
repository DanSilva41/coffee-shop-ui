import { ReactNode } from 'react';

type ISectionProps = {
  id?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  maxLimited?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`mx-auto ${props.yPadding ? props.yPadding : 'py-16'} ${
      props.maxLimited ? props.maxLimited : 'max-w-full'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center font-raleway">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-normal uppercase">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
