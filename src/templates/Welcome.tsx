import { BackgroundImage } from '../background/BackgroundImage';
import { CompanyPresentation } from '../hero/CompanyPresentation';
import { Section } from '../layout/Section';
import { Navbar } from '../navigation/Navbar';
import { Logo } from './Logo';

const Welcome = () => (
  <BackgroundImage image="bg-main-background bg-no-repeat bg-cover bg-center">
    <Section yPadding="py-6" maxLimited="max-w-screen-xl">
      <Navbar logo={<Logo />} />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <CompanyPresentation
        title={
          <>
            {'\n'}
            <span className="text-white">{"At Jhully's"}</span>
          </>
        }
      />
    </Section>
  </BackgroundImage>
);

export { Welcome };
