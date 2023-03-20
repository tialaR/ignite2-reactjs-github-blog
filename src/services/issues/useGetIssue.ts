import { useState } from 'react';

import api from '../../services/api';

type IssueResponse = {
    title: string;
    body: string;
    html_url: string;
    comments: number;
    created_at: string;
    updated_at: string;
    user: {
      login: string;
    }
}

export type Issue = {
    title: string;
    resume: string;
    htmlUrl: string;
    comments: number;
    createdDate: string;
    updatedDate: string
    user: string;
}

const useGetIssue = () => {
  const [response, setResponse] = useState<Issue>({} as Issue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>(undefined);

  const getIssue = async ({ owner, repo, id }: { owner: string; repo?: string; id: string }) => {
    try {
      setIsLoading(true);

      const repoAux = 'reactjs-github-blog-challenge'

      const {data} = await api.get<IssueResponse>(`repos/${owner}/${repo ? repo : repoAux}/issues/${id}`);

      setResponse({
        title: data?.title,
        resume: data?.body,
        comments: data?.comments,
        htmlUrl: data?.html_url,
        user: data?.user?.login,
        createdDate: data?.created_at,
        updatedDate: data?.updated_at
      });
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, isError, getIssue };
};

export { useGetIssue };
