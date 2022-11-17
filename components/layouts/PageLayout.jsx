import Container from '../common/Container';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Topbar from '../common/Topbar';

const PageLayout = ({ children }) => {
  return (
    <div className="font-poppins text-brand-dark-blue">
      <Container className="px-0">
        <Topbar />
        <Navbar />
      </Container>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
