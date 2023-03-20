import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import SearchFormContainer from '../../components/SearchForm';
import PostCard from '../../components/PostCard';
import Profile from '../../components/Profile';

import { formatTimeZoneDate } from '../../helpers/dateFormats';

import { Issue, useGetIssues } from '../../services/issues/useGetIssues';
import { useGetUser } from '../../services/user/useGetUser';

import * as S from './styles';

const Posts: React.FC = () => {
  const navigate = useNavigate();

  const { response: userData, getUser } = useGetUser();
  const { response: issues, getIssues } = useGetIssues();

  const [currentSearchIssue, setCurrentSearchIssue] = useState('');

  useEffect(() => {
    getUser({ username: 'rocketseat-education' })
  }, []);
  

  useEffect(() => {
    if (currentSearchIssue) {
      getIssues({ issue: currentSearchIssue })
    }
  }, [currentSearchIssue]);  

  
  return(
    <S.PostsContainer>
        <Profile 
          avatar={userData?.avatarUrl} 
          name={userData?.name} 
          username={userData?.username} 
          deescription={userData?.description} 
          followers={userData?.followers} 
          company={userData?.company} 
          linkProfile={userData?.linkProfile}
        />

        <S.FormContainer>
          <SearchFormContainer onSearchContent={(issue: string) => setCurrentSearchIssue(issue)} publications={issues?.length} />
        </S.FormContainer>

          <S.PostListContainer>
            {issues?.map((item: Issue) => (
              <PostCard 
                key={item?.id}
                title={item?.title}
                resume={item?.resume}
                time={formatTimeZoneDate({
                  createdDate: item?.createdDate,
                  updatedDate: item?.updatedDate
                })}
                onPostCardClick={() => 
                  navigate(`/post-detail/${item?.issueNumber}`, 
                  { state: { 
                    username: userData?.username, 
                    repo: item?.title, 
                    date: formatTimeZoneDate({
                      createdDate: item?.createdDate,
                      updatedDate: item?.updatedDate
                  }) 
                }})}
              />
            ))}
          </S.PostListContainer>
    </S.PostsContainer>
  );
}

export default Posts;