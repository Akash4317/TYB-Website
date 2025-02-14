import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useContent = (type: string) => {
  const { data, error, isLoading } = useSWR(`/media/${type}`, fetcher);

  return {
    data,
    isLoading,
    isError: error
  };
}

export const useSingleContent = (id: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `/media/blogs/${id}` : null,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error
  };
}
