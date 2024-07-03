import React, { useEffect, useState } from 'react';
import { Carousel, Flex, Spin } from 'antd';
import { getLikedPhotos } from '../../services/photoServices';

export function PhotosLiked() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getLikedPhotos().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spin />;
  return (
    <>
      <h1>Избранное</h1>
      <Carousel autoplay style={{ textAlign: 'center', background: 'white' }}>
        {data.map((photo: { id: string; url: string; likes: number }) => {
          return (
            <Flex wrap='wrap' gap={'1rem'} key={photo.id}>
              <img
                alt=''
                src={`https://random.dog/${photo.url}`}
                style={{
                  height: 'calc(100vh - 250px)',
                  display: 'inline-block',
                }}
              ></img>
            </Flex>
          );
        })}
      </Carousel>
    </>
  );
}
