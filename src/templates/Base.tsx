import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Chef } from './Chef';
import { Footer } from './Footer';
import { Menu } from './Menu';
import { Welcome } from './Welcome';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Welcome />
    <Menu />
    <About />
    <Chef />
    <Footer />
  </div>
);

export { Base };
