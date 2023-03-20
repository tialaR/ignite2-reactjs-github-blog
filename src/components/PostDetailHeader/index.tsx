import React from 'react';

import accessIcon from '../../assets/icons/access.svg';
import dateIcon from '../../assets/icons/date.svg';
import githubIcon from '../../assets/icons/github.svg';
import commentsIcon from '../../assets/icons/comments.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';

import * as S from './styles';

type PostDetailHeaderProps = {
    title: string;
    github: string;
    date: string;
    comments: number;
    onBack: () => void;
    onSeeInGitHub: () => void;
}

const PostDetailHeader: React.FC<PostDetailHeaderProps> = ({ onBack, onSeeInGitHub, title, github, date, comments }) => {
  return (
    <S.PostDetailHeaderContainer> 
        <S.PostDetailHeader>
            <S.PostDetailBackButton onClick={onBack}>
                <img src={arrowLeftIcon} alt="" />
                <span>VOLTAR</span> 
            </S.PostDetailBackButton>
            <S.PostDetailAccessButton onClick={onSeeInGitHub}>
                <span>VER NO GITHUB</span> 
                <img src={accessIcon} alt="" />
            </S.PostDetailAccessButton>
        </S.PostDetailHeader>

        <S.PostDetailMainContainer>
            <h2>{title}</h2>
        </S.PostDetailMainContainer>

        <S.PostDetailFooterContainer>
                <div>
                    <img src={githubIcon} alt="" />
                    <span>
                        {github}
                    </span>
                </div>
                <div>
                    <img src={dateIcon} alt="" />
                    <span>
                        {date}
                    </span>
                </div>
                <div>
                    <img src={commentsIcon} alt="" />
                    <span>
                        {comments} comentário
                    </span>
                </div>
        </S.PostDetailFooterContainer>
    </S.PostDetailHeaderContainer>
  );
}

export default PostDetailHeader;