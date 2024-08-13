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
          <div className="xl:flex items-center bg-black pt-[8vh] h-[100vh]">
            <div className="h-full">
              <LatMenu />
            </div>
            <div className="bg-white w-full h-full overflow-y-auto">
              {param.children}
            </div>
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
