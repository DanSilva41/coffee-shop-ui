export const NavbarsConfig = {
  menu: {
    title: 'Menu',
    router: 'menu',
    isBottom: false,
  },
  about: {
    title: 'Sobre',
    sectionTitle: 'Sobre nós',
    router: 'about',
    isBottom: false,
  },
  founder: {
    title: 'Fundadora',
    router: 'founder',
    isBottom: false,
  },
  contact: {
    title: 'Contato',
    router: 'contact',
    isBottom: false,
  },
  order: {
    title: 'Encomende agora',
    router:
      'https://api.whatsapp.com/send?phone=5561994481561&text=Ol%C3%A1,%20quero%20fazer%20uma%20encomenda',
    isBottom: true,
  },
};

export const AppConfig = {
  site_name: `At Jhully's`,
  title: `At Jhully's`,
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'pt-BR',
  socials: {
    instagram: {
      main: 'https://instagram.com/atjhullys',
      alt: 'https://instagram.com/jhullygleicinay',
    },
  },
  navbars: [
    NavbarsConfig.menu,
    NavbarsConfig.about,
    NavbarsConfig.founder,
    NavbarsConfig.contact,
    NavbarsConfig.order,
  ],
};
