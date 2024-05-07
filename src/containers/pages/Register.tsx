import { useSelector } from "react-redux";
import RegisterForm from "../../components/login/RegisterForm";
import Layout from "../../hocs/layouts/layout";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (Session) {
      navigate("/");
    }
  }, [Session, navigate]);
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
}
