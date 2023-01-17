import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Layout from '../components/Layout';
import '../styles/globals.css';
// import WaterMark from './WaterMark';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <WaterMark /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
