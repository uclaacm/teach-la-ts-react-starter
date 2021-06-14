import '../styles/Footer.scss';

import TeachLALOGO from '../assets/teachla-logo.svg';

function Footer(): JSX.Element {
  return (
    <div id="footer">
      <h3>
        Made with ❤️ by
        {' '}
        {' '}
        <a
          href="https://teachla.uclaacm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img id="tla-logo" src={TeachLALOGO} alt="teach la logo!" />
        </a>
      </h3>
    </div>
  );
}

export default Footer;
