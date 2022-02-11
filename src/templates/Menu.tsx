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
            Com uma base crocante de biscoito, o{' '}
            <strong>Tradicional Cheesecake</strong> surpreende com a leveza de
            seu cremoso recheio de baunilha.
            <br /> Opções de cobertura:
            <br />
            <em>
              geleia de morango caseira; goiabada; chocolate branco; chocolate ao leite ou sem
              cobertura para acompanhar o seu café.
            </em>
          </>
        }
        image="/assets/images/cheesecake.jpg"
        imageAlt="Cheesecake"
      />
      <ProductRow
        title="Biscoito Palmier"
        price="4"
        priceCompletion="(unidade)"
        description={
          <>
            O <strong>Amanteigado Palmier</strong> em formato de coração veio
            para adoçar - com equílibrio - o seu paladar numa perfeita
            combinação de açúcar e canela sobre a massa folhada.
          </>
        }
        image="/assets/images/palmier.jpg"
        imageAlt="Biscoito Palmier"
      />
      <ProductRow
        title="Croissant"
        price="8"
        priceCompletion="(unidade)"
        description={
          <>
            O <strong>Crocante Croissant</strong>, perfeitamente folhado pode
            ser recheado com: <br />
            <em>
              mussarela; presunto e queijo <br />
              ou pode ser puro para acompanhar a manteiga de sua preferência.
            </em>
          </>
        }
        image="/assets/images/croissant.jpg"
        imageAlt="Croissant"
      />
      <ProductRow
        title="Sanduíche de Croissant"
        price="15"
        priceCompletion="(unidade)"
        description={
          <>
            O <strong>Delicioso Sanduíche Natural de Croissant</strong> vai te
            surpreender!
            <br />
            Recheio: <em>cream cheese, mussarela, presunto, tomate e alface.</em>
          </>
        }
        image="/assets/images/sanduich-croissant.jpg"
        imageAlt="Croissant"
      />

      <ProductRow
        title="Croissants Doces"
        price="10"
        priceCompletion="(unidade)"
        description={
          <>
            Para os amantes do <strong>doce</strong>, essa opção é para você.
            Uma onda de gostosuras que te dão água na boca.
            <br />
            <em>
              Chocolate, chocolate com morango, creme branco com morango ou doce
              de leite no <strong>Crocante Croissant</strong> com crosta
              caramelizada.
            </em>
          </>
        }
        image="/assets/images/sweet-croissant.jpeg"
        imageAlt="Croissants Doces"
      />
      <ProductRow
        title="Salada Caesar"
        price="25"
        moreDescription={
          <>
            (somente aos <strong>Sábados</strong>)
          </>
        }
        description={
          <>
            Uma opção leve e saudável para o seu almoço do fim de semana - nossa{' '}
            <strong>Salada Caesar</strong> - leva um delicioso{' '}
            <em>
              molho temperado, alface americana, croûtons e parmesão ralado.
            </em>{' '}
            <br />
            <br />
            Disponível também com frango grelhado.
          </>
        }
        image="/assets/images/caesar-salad.jpg"
        imageAlt="Croissant"
      />
    </div>
  </Section>
);

export { Menu };
