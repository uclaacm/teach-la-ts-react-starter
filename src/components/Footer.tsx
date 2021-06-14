import "../../styles/Footer.scss";

import TeachLALOGO from "../../../assets/shared/logos/teachla-logo.svg";

function Footer(): JSX.Element {
  return (
    <div id={"footer"}>
      <h3>
        Made with ❤️ by{" "}
        {" "}
        <a
          href={"https://teachla.uclaacm.com"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {" "}
          <img id={"tla-logo"} src={TeachLALOGO} />
        </a>
      </h3>
      <p id={"disclaimer"}>
        Not sponsored by or affiliated with Youtube or its subsidiaries.
      </p>
    </div>
  );
}

export default Footer;
