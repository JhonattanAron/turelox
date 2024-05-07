import { useSelector } from "react-redux";
import LoginForm from "../../components/login/loginFomr";
import Layout from "../../hocs/layouts/layout";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (Session) {
      navigate("/");
    }
  }, [Session, navigate]);

  return <Layout>{Session ? <>{}</> : <LoginForm />}</Layout>;
}
