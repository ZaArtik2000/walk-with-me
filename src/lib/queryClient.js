import { QueryClient } from "@tanstack/react-query";

export function createAppQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          const status = error?.response?.status;
          if (status === 404) return false;
          return failureCount < 2;
        },
        staleTime: 30_000,
        gcTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}
