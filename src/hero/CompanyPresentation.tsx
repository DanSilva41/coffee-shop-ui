import { ReactNode } from 'react';

type ICompanyPresentationProps = {
  title: ReactNode;
  description?: string;
  button?: ReactNode;
};

const CompanyPresentation = (props: ICompanyPresentationProps) => (
  <header className="text-center">
    <h1
      id="site-title"
      className="font-rochester text-8xl sm:text-11xl font-normal whitespace-pre-line leading-hero -mt-12 mb-20"
    >
      {props.title}
    </h1>
    {props.description ? (
      <div className="text-2xl mt-4 mb-16">{props.description}</div>
    ) : (
      ''
    )}

    {props.button}
  </header>
);

export { CompanyPresentation };
