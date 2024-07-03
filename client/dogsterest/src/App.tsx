import { Layout } from 'antd';
import { SiderApp } from './components/layout/SiderApp';
import { HeaderApp } from './components/layout/HeaderApp';
import { ContentApp } from './components/layout/ContentApp';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SiderApp />
        <Layout>
          <HeaderApp />
          <ContentApp />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
