import { Background } from '../background/Background';
import { AboutDescription } from '../feature/AboutDescription';
import { Section } from '../layout/Section';

type IAboutProps = {
  id: string;
  title: string;
};

const About = (props: IAboutProps) => (
  <Section id={props.id} title={props.title} maxLimited="max-w-screen-xl">
    <Background color="bg-gray-100">
      <AboutDescription
        title="Sonho real 💭"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
    </Background>
  </Section>
);

export { About };
