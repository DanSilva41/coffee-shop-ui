import { ChefBanner } from '../chef/ChefBanner';
import { Section } from '../layout/Section';

const Chef = () => (
  <Section id="chef" title="Chef" maxLimited="max-w-screen-xl">
    <ChefBanner
      title="Conheça as mãos por trás dessas delícias"
      subtitle="Jhully Silva"
      image="/assets/images/chef.jpg"
    />
  </Section>
);

export { Chef };
