import { ProductRow } from '../feature/ProductRow';
import { Section } from '../layout/Section';

type IMenuProps = {
  id: string;
  title: string;
};

const Menu = (props: IMenuProps) => (
  <Section
    id={props.id}
    title={props.title}
    description="Alguma descrição"
    maxLimited="max-w-screen-xl"
  >
    <div className="flex flex-wrap">
      <ProductRow
        title="Cheesecake"
        price="60"
        priceCompletion="(1,5kg)"
        description="Coberturas:"
        image="/assets/images/cheesecake.jpg"
        imageAlt="Cheesecake"
      />
      <ProductRow
        title="Croissant"
        price="12"
        priceCompletion="/und"
        description="..."
        image="/assets/images/croissant.jpg"
        imageAlt="Croissant"
      />
      <ProductRow
        title="Biscoito Palmier"
        price="4"
        priceCompletion="/und"
        description="..........."
        image="/assets/images/palmier.jpg"
        imageAlt="Biscoito Palmier"
      />
    </div>
  </Section>
);

export { Menu };
