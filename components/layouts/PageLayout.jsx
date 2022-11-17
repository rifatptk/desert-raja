import Container from '../common/Container';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Topbar from '../common/Topbar';

const PageLayout = ({ children }) => {
  return (
    <div className="font-poppins text-brand-dark-blue">
      <Container className="px-0 md:px-20 absolute top-0 left-0 right-0 z-50">
        <Topbar />
        <Navbar />
      </Container>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
