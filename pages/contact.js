import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Layout title={`contact`}>
        <Navbar />
        <div className=" flex flex-col h-screen mt-[7rem]">
          <div className="flex mx-auto top-[4rem] fixed">
            <h1 className="bg-blue-900 w-screen justify-center h-10 flex items-center mx-auto">
              <p className="text-white uppercase text-sm md:text-xl lg:text-2xl">
                contact school of engineering and allied science
              </p>
            </h1>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};
export default Contact;
