import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../../service/apiUser";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  return { user, isLoading };
};
