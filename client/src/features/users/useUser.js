import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../../service/apiAuth";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  console.log(user);

  return { user, isLoading };
};
