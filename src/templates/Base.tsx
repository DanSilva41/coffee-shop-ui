import ScrollToTop from 'react-scroll-to-top';

import { Meta } from '../layout/Meta';
import { AppConfig, NavbarsConfig } from '../utils/AppConfig';
import { About } from './About';
import { Footer } from './Footer';
import { Founder } from './Founder';
import { Menu } from './Menu';
import { Welcome } from './Welcome';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Welcome />
    <Menu id={NavbarsConfig.menu.router} title={NavbarsConfig.menu.title} />
    <About
      id={NavbarsConfig.about.router}
      title={NavbarsConfig.about.sectionTitle}
    />
    <Founder
      id={NavbarsConfig.founder.router}
      title={NavbarsConfig.founder.title}
    />
    <Footer />
    <ScrollToTop smooth style={{ width: '30px' }} />
  </div>
);

export { Base };
