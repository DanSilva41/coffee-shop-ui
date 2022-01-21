import { ReactNode } from 'react';

type IBackgroundImageProps = {
  children: ReactNode;
  image: string;
  overlay?: boolean;
};

const BackgroundImage = (props: IBackgroundImageProps) => (
  <div className={props.image}>
    <div className="lg:overlay">{props.children}</div>
  </div>
);

export { BackgroundImage };
