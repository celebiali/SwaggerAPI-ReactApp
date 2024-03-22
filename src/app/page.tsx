"use client";
import { useState } from "react";
import { AuthService } from "../services/content/Auth/AuthService";
import { userLoginQuery } from "../models/entities/content/User";
import { useRouter } from "next/navigation";

const Home = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginQuery, setLoginQuery] = useState<userLoginQuery>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const userService = new AuthService();
  const handleLogin = async () => {
    setError("");
    setLoading(true);
    const user: any = await userService.Login(loginQuery);
    const token = user.data.data.token;
    localStorage.setItem("userToken", token);
    setLoading(false);
    if (user && user.data.data.token != "") {
      router.push("/dashboard", { scroll: false });
    } else {
      setError("Kullanıcı adı veya şifre hatalı.");
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={loginQuery.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginQuery.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleLogin} disabled={loading}>
        Login
      </button>
    </div>
  );
};
export default Home;
