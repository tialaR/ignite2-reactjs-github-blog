import { formatRelative, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatTimeZoneDate = ({
    createdDate,
    updatedDate
  }: {
    createdDate: string;
    updatedDate: string;
  }) => {
    const parsedCreatedDate = parseISO(createdDate);
    const parsedUpdatedDate = parseISO(updatedDate);

    const formatedDate = formatRelative(
      parsedCreatedDate,
      parsedUpdatedDate, { locale: ptBR }
    );

    return formatedDate;
  }  