import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, auth, emailVerification } from "../firebase";
import { logout as logoutHandle } from "./store/auth";

import { useNavigate } from "react-router-dom";
import UpdateProfile from "../components/updateProfile";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const HandleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await emailVerification();
  };

  if (user) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-4">
        <h1 className="flex gap-x-4 items-center">
          {auth.currentUser.photoURL && (
            <img src="user.photoURL" className="w-10 h-10 rounded-full" />
          )}
          Oturumunuz Açık ({user.email})
          <button
            onClick={HandleLogout}
            className="h-8 rounded px-4 text-sm text-white bg-indigo-700"
          >
            Çıkış yap
          </button>
          {!user.emailVerified && (
            <button
              onClick={handleVerification}
              className="h-8 rounded px-4 text-sm text-white bg-indigo-700"
            >
              E-posta Onayla
            </button>
          )}
        </h1>

        <UpdateProfile />
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto grid gap-y-4 py-4">
      <button className="bg-red-600 text-white ">
        <Link to="/register">Kayıt Ol</Link>
      </button>
      <button className="bg-blue-700 text-white">
        <Link to="/login">Giriş Yap</Link>
      </button>
    </div>
  );
};

export default Home;
