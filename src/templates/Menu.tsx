import { ProductRow } from '../feature/ProductRow';
import { Section } from '../layout/Section';

type IMenuProps = {
  id: string;
  title: string;
};

const Menu = (props: IMenuProps) => (
  <Section id={props.id} title={props.title} maxLimited="max-w-screen-xl">
    <div className="flex flex-wrap">
      <ProductRow
        title="Cheesecake"
        price="60"
        priceCompletion="(inteiro)"
        description={
          <>
            Com uma base crocante de biscoito, o Tradicional Cheesecake
            surpreende com a leveza de seu cremoso recheio de baunilha.
            <br /> A cobertura você escolhe:
            <br />
            <em>
              geleia de morango; chantilly com morango; chocolate branco;
              chocolate ao leite ou sem cobertura para acompanhar o seu café.
            </em>
          </>
        }
        image="/assets/images/cheesecake.jpg"
        imageAlt="Cheesecake"
      />
      <ProductRow
        title="Croissant"
        price="8"
        priceCompletion="(unidade)"
        description={
          <>
            O Crocante Croissant, perfeitamente folhado pode ser recheado com:{' '}
            <br />
            <em>
              mussarela; presunto e queijo; avelã; doce de leite ou pode ser
              puro para acompanhar a manteiga de sua preferência.
            </em>
          </>
        }
        image="/assets/images/croissant.jpg"
        imageAlt="Croissant"
      />
      <ProductRow
        title="Biscoito Palmier"
        price="4"
        priceCompletion="(unidade)"
        description={
          <>
            O Amanteigado Palmier em formato de coração veio para adoçar - com
            equílibrio - o seu paladar numa perfeita combinação de açúcar e
            canela sobre a massa folhada.
          </>
        }
        image="/assets/images/palmier.jpg"
        imageAlt="Biscoito Palmier"
      />
    </div>
  </Section>
);

export { Menu };
