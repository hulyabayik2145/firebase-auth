import { useState } from "react";
import { login } from "../firebase";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <form
      className="max-w-xl mx-auto grid gap-y-4 py-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Adresiniz
        </label>
        <div>
          <input
            type="email"
            name="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-100"
            placeholder="you@exaple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Parolanız
        </label>
        <div>
          <input
            type="password"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 vlock w-full sm:text-sm border-gray-100"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          disabled={!email || !password}
          className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-cone focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          type="submit"
        >
          Giriş Yap
        </button>
      </div>
    </form>
  );
};

export default Login;
