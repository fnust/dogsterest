import React, { useEffect, useState } from 'react';
import { Carousel, Spin } from 'antd';
import { getPhotos } from '../../services/photoServices';
import { photoI } from './interfaces';
import { Photo } from './Photo';

const defaultData: photoI[] = [];

export function Photos() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    setLoading(true);
    getPhotos().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spin />;
  return (
    <>
      <h1>DOGSTEREST</h1>
      <Carousel autoplay style={{ textAlign: 'center', background: '#f5f5f5' }}>
        {data.map((photo: photoI) => {
          return (
            <Photo
              photo={photo}
              data={data}
              setData={(newData) => setData(newData)}
            />
          );
        })}
      </Carousel>
    </>
  );
}
