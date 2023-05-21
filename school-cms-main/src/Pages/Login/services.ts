import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { setUser } from "src/Store/Reducers/userSlice";
import { login } from "@Api/AuthApi";

export default function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });

      if (res) {
        if (res.user.role !== "admin") {
          toast.warn("Tài khoản không phải admin!");
          return;
        }
        dispatch(setUser(res));
        navigate("/");
        toast.success("Đăng nhập thành công!");
      }
    } catch (error) {
      toast.error("Vui lòng nhập đúng tên đăng nhập và mật khẩu!");
    }
  };

  return {
    username,
    password,
    setPassword,
    setUsername,
    handleLogin
  };
}
