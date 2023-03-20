import React, { useEffect } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import PostDetailHeader from '../../components/PostDetailHeader';

import { useGetIssue } from '../../services/issues/useGetIssue';

import * as S from './styles';

const PostDetail: React.FC = () => {
  const navigate = useNavigate();
  let { issueNumber } = useParams();

  const {state} = useLocation();
  const { username, repo, date } = state;

  const { getIssue, response: issue } = useGetIssue();

  useEffect(() => {
    issueNumber && getIssue({
      owner: username,
      id: issueNumber
    });
  }, [username, repo, issueNumber]);
  
  return(
    <S.PostsContainer>        
      <PostDetailHeader
        title={issue?.title}
        github={issue?.user}
        date={date}
        comments={issue?.comments}     
        onBack={() => navigate('/')} 
        onSeeInGitHub={() => window.open(issue?.htmlUrl)}
      />

      <S.PostDetailContentContainer>
        <S.PostDetailMainContainer>
          <p>
            {issue?.resume}
          </p>
        </S.PostDetailMainContainer>

        {/* <S.PostDetailFooterContainer>
          <span>
            let foo = 42; &nbsp; &nbsp; &nbsp; // foo is now a number <br />
            foo = ‘bar’;  &nbsp; &nbsp; &nbsp; // foo is now a string <br />
            foo = true;  &nbsp; &nbsp; &nbsp; // foo is now a boolean
          </span>
        </S.PostDetailFooterContainer> */}
      </S.PostDetailContentContainer>
    </S.PostsContainer>
  );
}

export default PostDetail;