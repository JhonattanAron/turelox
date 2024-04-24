import React from "react";
import Layout from "../../hocs/layouts/layout";

export default function Error404() {
  return (
    <Layout>
      <div className="relative h-screen overflow-hidden bg-indigo-900">
        <img
          alt="404"
          src="https://images.unsplash.com/photo-1485847791529-09ed2263da0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full font-mono">
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
              Pagina No Encontrada
            </h1>
            <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
