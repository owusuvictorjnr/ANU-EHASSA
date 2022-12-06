import Layout from '../components/Layout';
import { myData } from '../utils/data';
import HomeItem from '../components/HomeItem';
import WaterMark from './waterMark'

const Home = () => {
  return (
    <>
    {/* <WaterMark /> */}
      <Layout title="Home Page">
        <div className="grid grid-cols-1 mx-4 gap-4 sm:gap-2 md:grid-cols-3 lg:grid-cols-3">
          {myData.homeScreens.map((home) => (
            <HomeItem home={home} key={home.slug} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
