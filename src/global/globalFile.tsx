import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const signUser = atomWithStorage("mainUser", {} || null);

const useUser = () => {
  return useAtom(signUser);
};

export default useUser;
