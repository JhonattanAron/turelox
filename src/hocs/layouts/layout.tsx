import { ReactNode } from "react";
import NavBar from "../../components/navigation/NavBar";

interface Params {
  children: ReactNode;
}

export default function Layout(param: Params) {
  return (
    <>
      <NavBar />
      <div className=" sm:pt-[8vh]">{param.children}</div>
    </>
  );
}
