/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Layout from "../../hocs/layouts/layout";
import { useEffect, useState } from "react";

export default function VerfiedMailPage() {
  let { token } = useParams();
  const [response, setResponse] = useState("Verficado Correo....");

  const getVerfiedMail = () => {
    fetch(`http://localhost:8085/verified-mail/${token}`)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.response);
      })
      .catch((error) => {
        setResponse(error);
      });
  };

  useEffect(() => {
    getVerfiedMail();
  }, []);

  return (
    <Layout>
      <div className="px-6 py-6 m-6 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
            {response}
          </h2>
          <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
            Gracias Por Usar Tureflox
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <a
              href="/login"
              className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
            >
              Login In
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
