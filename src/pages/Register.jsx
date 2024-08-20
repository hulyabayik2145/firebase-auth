import { useState } from "react";
import { register } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
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
        <div className="mt-1">
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
          Kayıt ol
        </button>
      </div>
    </form>

    //   <input
    //     type="text"
    //     placeholder="e posta adresi giriniz"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <br />
    //   <input
    //     type="password"
    //     placeholder="parola giriniz"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <br />
    //   <button type="submit" disabled={!email || !password}>
    //     Kayıt Ol
    //   </button>
  );
};

export default Register;
