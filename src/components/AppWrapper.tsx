import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";
import { HeaderSections } from "./shared/globalTypes";

export interface WrapperProps {
  section: HeaderSections;
  children?: JSX.Element;
}

export default function AppWrapper(props: WrapperProps) {
  return (
    <div className="app">
      <Header section={props.section} />
      {props.children}
      <Footer />
    </div>
  );
}
