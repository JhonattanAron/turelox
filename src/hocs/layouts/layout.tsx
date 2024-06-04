import { ReactNode } from "react";
import NavBar from "../../components/navigation/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LatMenu from "../../components/navigation/latMenu";

interface Params {
  children: ReactNode;
}

export default function Layout(param: Params) {
  const isLoggedIn = useSelector((state: RootState) => state.session.isLogin);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <NavBar />
          <div className="xl:flex items-center h-[100vh]">
            <LatMenu />
            <div className="xl:pt-0 pt-[8vh]">{param.children}</div>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
          <div className="pt-[8vh]">{param.children}</div>
        </div>
      )}
    </>
  );
}
