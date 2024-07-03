import { Layout } from 'antd';
import { Photos } from '../carousel/Photos';
import { Route, Routes } from 'react-router-dom';
import { PhotosLiked } from '../carouselLiked/PhotosLiked';

export function ContentApp() {
  return (
    <Layout.Content
      style={{
        margin: '1rem',
        padding: 24,
        textAlign: 'center',
        minHeight: 'calc(100vh - 60px)',
        background: 'white',
        borderRadius: 8,
      }}
    >
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/likes' element={<PhotosLiked />} />
      </Routes>
    </Layout.Content>
  );
}
