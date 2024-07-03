import { Flex } from 'antd';
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { putLikes } from '../../services/photoServices';
import { photoI } from './interfaces';

interface FormatDateProps {
  photo: photoI;
  data: photoI[];
  setData: (data: photoI[]) => void;
}

export function Photo({ photo, data, setData }: FormatDateProps) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (id: string, likes: number) => {
    setLiked(!liked);
    let newLikes = likes;
    if (liked) {
      newLikes -= 1;
    } else {
      newLikes += 1;
    }
    putLikes(id, newLikes);
    const newData = data.map((photo: photoI) =>
      photo.id === id ? { ...photo, likes: newLikes } : photo
    );
    setData(newData);
  };

  return (
    <Flex wrap='wrap' gap={'1rem'} key={photo.id}>
      <img
        alt=''
        src={`https://random.dog/${photo.url}`}
        style={{
          height: 'calc(100vh - 200px)',
          display: 'inline-block',
        }}
      ></img>
      <Flex
        gap={'1rem'}
        style={{
          width: '20%',
          display: 'inline-block',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>{photo.likes} </p>
        {liked ? (
          <LikeFilled onClick={() => handleLikeClick(photo.id, photo.likes)} />
        ) : (
          <LikeOutlined
            onClick={() => handleLikeClick(photo.id, photo.likes)}
          />
        )}
      </Flex>
    </Flex>
  );
}
