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
      className="font-rochester text-9xl font-normal whitespace-pre-line leading-hero"
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
