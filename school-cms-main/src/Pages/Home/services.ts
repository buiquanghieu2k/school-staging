import { useSelector } from "react-redux";

import { IRootState } from "src/Store/configureStore";

export default function useHome() {
  const currentUser = useSelector((state: IRootState) => state.user);

  return {
    currentUser
  };
}
