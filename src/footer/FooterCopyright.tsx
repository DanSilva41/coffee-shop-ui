import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Todos os direitos reservados {new Date().getFullYear()} {AppConfig.title}.
    <br></br>
    Desenvolvido por{' '}
    <a href="https://thesolution-tech.tk/" target="_blank" rel="noreferrer">
      The Solution Tech
    </a>
    .
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
