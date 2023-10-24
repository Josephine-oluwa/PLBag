import useSWR from "swr";
import { getOneUser } from "../apis/authApi";

// export const useOneUsers = () => {
//     const { data, error, isLoading } = useSWR('/api/get-app', getOneUser)
//     console.log(data)
//     return { data, error, isLoading }
// }
export const useOneUser = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `/${id}/api/get-one/`,() => getOneUser(id)
  );
  console.log(data);
  return { data, error, isLoading };
};

// api/get-one