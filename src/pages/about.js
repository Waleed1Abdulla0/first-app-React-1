import React from "react";
import Header from "../compo/header";
import Footer from "../compo/footer";
import MainContint from "../compo/MainContint";
export default function about() {
  return (
    <>
      <Header />
      <>
        <MainContint PageName={"About Page"} />
      </>
      <Footer />
    </>
  );
}
