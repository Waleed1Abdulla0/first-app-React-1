import Header from "../compo/header";
import Footer from "../compo/footer";
import MainContint from "../compo/MainContint";
export default function home() {
  return (
    <>
      <Header />
      <>
        <MainContint PageName={"Home Page"} />
      </>
      <Footer />
    </>
  );
}
