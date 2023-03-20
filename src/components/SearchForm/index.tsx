import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import * as S from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

type SearchFormProps = {
  onSearchContent: (_: string) => void;
  publications: number;
}

const SearchForm: React.FC<SearchFormProps> = ({ 
  onSearchContent,
  publications
 }) => {
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting, // Retorna true ou false que diz se o formulário está enviando ainda as informações ou não
    },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchContent(data: SearchFormInputs) {
    onSearchContent(data?.query)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchContent)}>
      <S.PublicationsContainer>
        <span>Publicações</span>
        <span>{publications} publicações</span>
      </S.PublicationsContainer>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </S.SearchFormContainer>
  )
}

export default SearchForm;