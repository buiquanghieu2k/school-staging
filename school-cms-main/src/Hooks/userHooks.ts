import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { resetUser } from "src/Store/Reducers/userSlice";

export default function useUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetUser());
    navigate("/login");
    toast.success("Đăng xuất thành công!");
  };

  return {
    handleLogout
  };
}
