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
        title="Sonho real 💤💭"
        description={
          <>
            <p>
              A At Jhully&apos;s surgiu de um sonho,{' '}
              <strong>literalmente</strong>! <br />A fundadora estava dormindo e
              sonhou que fazia algumas entregas e quando acordou pensou:
              <em>&quot;porque não?&quot;</em>, esse sonho deixou de ser
              simplesmente um sonho adormecido, e passou a ser um sonho durante
              seus dias. Dias pensando em como seria o cardápio, cada receita,
              como vender seu produto, na vastidão e desafios do
              empreendedorismo. <br />E então aqui está o resultado de muita
              pesquisa e dedicação para oferecer a você não só sobremesas e
              massas deliciosas mas uma nova experiência, leve e única!
              <br />
              <br /> Seja bem-vindo e aproveite.
            </p>
          </>
        }
        image="/assets/images/about.svg"
        imageAlt="Vamos lá!"
      />
    </Background>
  </Section>
);

export { About };
