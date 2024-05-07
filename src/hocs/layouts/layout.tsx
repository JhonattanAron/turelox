import { ReactNode } from "react";
import NavBar from "../../components/navigation/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LatMenu from "../../components/navigation/latMenu";

interface Params {
  children: ReactNode;
}

export default function Layout(param: Params) {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  return (
    <>
      {Session ? (
        <div>
          <NavBar />
          <div className="sm:flex items-center h-[100vh]">
            <LatMenu />
            <div className="sm:pt-0 pt-[8vh]">{param.children}</div>
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
