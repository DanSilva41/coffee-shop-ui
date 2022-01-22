import { FounderBanner } from '../founder/FounderBanner';
import { Section } from '../layout/Section';

type IFounderProps = {
  id: string;
  title: string;
};

const Founder = (props: IFounderProps) => (
  <Section id={props.id} title={props.title} maxLimited="max-w-screen-xl">
    <FounderBanner
      title="Conheça as mãos por trás das levíssimas preparações"
      name="Jhully Gleicinay"
      description={
        <>
          <p>
            &quot;Meus agradecimentos ao meu melhor amigo e marido Danilo Silva,
            pelo apoio em todo o processo e criação do site, e à minha família
            por me encorajar.&quot;
          </p>
        </>
      }
      image="/assets/images/chef.jpg"
    />
  </Section>
);

export { Founder };
