import { FundOutlined, LikeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export function SiderApp() {
  const navigate = useNavigate();

  return (
    <Layout.Sider
      trigger={null}
      style={{
        height: '100vh',
        width: '15%',
      }}
    >
      <div className='demo-logo-vertical' />
      <Menu
        style={{ marginTop: '4rem' }}
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['/']}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: '/',
            icon: <FundOutlined />,
            label: 'Главная',
          },
          {
            key: '/likes',
            icon: <LikeOutlined />,
            label: 'Избранное',
          },
        ]}
      />
    </Layout.Sider>
  );
}
