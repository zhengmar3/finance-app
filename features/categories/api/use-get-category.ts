import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetCategory = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["category", { id }],
    queryFn: async () => {
      fetch("/api/categories");

      const response = await client.api.categories[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("An error occurred while fetching category");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
