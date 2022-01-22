import { FounderBanner } from '../founder/FounderBanner';
import { Section } from '../layout/Section';

type IFounderProps = {
  id: string;
  title: string;
};

const Founder = (props: IFounderProps) => (
  <Section id={props.id} title={props.title} maxLimited="max-w-screen-xl">
    <FounderBanner
      title="Conheça as mãos por trás dessas delícias"
      description="....."
      name="Jhully Silva"
      image="/assets/images/chef.jpg"
    />
  </Section>
);

export { Founder };
