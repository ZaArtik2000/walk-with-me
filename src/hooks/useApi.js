import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import http from "../lib/http.js";

export function useApiQuery({
  key,
  url,
  params,
  enabled = true,
  select,
  staleTime,
  ...axiosConfig
}) {
  return useQuery({
    queryKey: Array.isArray(key) ? key : [key, params],
    queryFn: async () => {
      const { data } = await http.get(url, { params, ...axiosConfig });
      return data;
    },
    enabled,
    select,
    staleTime,
  });
}

export function useApiMutation({ url, method = "post" }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await http.request({ url, method, data: payload });
      return data;
    },
    onSuccess: () => {
      // Consumers may selectively invalidate in their own onSuccess handlers
    },
  });
}
