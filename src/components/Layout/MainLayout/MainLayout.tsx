import Header from "../Header";
import Footer from "../Footer";
import MainLayoutClient from "./MainLayout.client";

interface MainLayoutProps {
  children: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainLayoutClient>
      <Header />

      <div id='children-container'>{children}</div>

      <Footer />
    </MainLayoutClient>
  );
};

export default MainLayout;
