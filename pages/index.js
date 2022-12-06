import HomeItem from '../components/HomeItem';
import Layout from '../components/Layout';
import WaterMark from './waterMark';

const Home = () => {
  return (
    <Layout>
      <div className="">
        <HomeItem />
      </div>
    </Layout>
  );
};

export default Home;

// <>
// {/* <WaterMark /> */}
//   <Layout title="Home Page">
//     <div className="grid grid-cols-1 mx-4 gap-4 sm:gap-2 md:grid-cols-3 lg:grid-cols-3">
//       {myData.homeScreens.map((home) => (
//         <HomeItem home={home} key={home.slug} />
//       ))}
//     </div>
//   </Layout>
// </>
