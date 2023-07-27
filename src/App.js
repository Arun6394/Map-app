import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MapArea from './components/MapArea/MapArea';
import RegionInfo from './components/RegionInfo/RegionInfo';
import Footer from './components/Footer/Footer';

const App = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  return (
    
   <div className='main' direction-flex >
     <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <MapArea selectedRegion={selectedRegion} />
        <RegionInfo /> {/* Add the RegionInfo component */}
        <Footer />
      </Layout>
    </Layout>
   </div>
  );
};

export default App;
