import { useState } from 'react';

import api from '../../services/api';

type UserResponse = {
    avatar_url: string;
    login: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
    html_url: string;
}

export type User = {
    avatarUrl: string;
    username: string;
    name: string;
    company: string;
    description: string;
    followers: number;
    linkProfile: string;
}

const useGetUser = () => {
  const [response, setResponse] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>(undefined);

  const getUser = async ({username}: {username: string}) => {
    try {
      setIsLoading(true);

      const {data} = await api.get<UserResponse>(`users/${username}`);    

      setResponse({
        avatarUrl: data?.avatar_url,
        username: data?.login,
        name: data?.name,
        company: data?.company,
        followers: data?.followers,
        description: data?.bio,
        linkProfile: data?.html_url,
      });
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, isError, getUser };
};

export { useGetUser };
