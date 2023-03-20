import React from 'react';

import * as S from './styles';

type PostCardProps = {
    title: string;
    resume: string;
    time: string;
    onPostCardClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, resume, time, onPostCardClick }) => {
  return (
    <S.PostCardContainer onClick={onPostCardClick}>
        <S.PostCardHeaderContainer>
          <S.PostTitle>{title}</S.PostTitle>
          <S.Time>{time}</S.Time>
        </S.PostCardHeaderContainer>

        <S.PostResume>
          <p>
            {resume}
          </p>
        </S.PostResume>

    </S.PostCardContainer>
  );
}

export default PostCard;