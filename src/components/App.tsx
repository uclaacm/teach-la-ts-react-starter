import logo from "../assets/logo.svg";
import "../styles/App.scss";
import AppWrapper from "./AppWrapper";
import { HeaderSections } from "./shared/globalTypes";

function App(): JSX.Element {
  return (
    <div className="app">
      <AppWrapper section={HeaderSections.DEFAULT_SECTION} />
    </div>
  );
}

export default App;
