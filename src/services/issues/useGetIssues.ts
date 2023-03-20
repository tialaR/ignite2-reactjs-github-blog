import { useState } from 'react';

import api from '../../services/api';

type IssueResponse = {
    id: string;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
    number: number;
}

export type Issue = {
    id: string;
    title: string;
    resume: string;
    createdDate: string;
    updatedDate: string;
    issueNumber: number;
}

const useGetIssues = () => {
  const [response, setResponse] = useState<Issue[]>([] as Issue[]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>(undefined);

  const getIssues = async ({ issue }: { issue: string }) => {
    try {
      setIsLoading(true);

      const {data} = await api.get<{ items: IssueResponse[] }>(`search/issues`, {
        params: {
            q: issue
        }
      });
      
      setResponse(data?.items?.map(item => ({
        id: item?.id,
        title: item?.title,
        resume: item?.body,
        createdDate: item?.created_at,
        updatedDate: item?.updated_at,
        issueNumber: item?.number,
      })));
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, isError, getIssues };
};

export { useGetIssues };
