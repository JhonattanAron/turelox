export default function TableFac() {
  return (
    <div className="container max-w-3xl px-4 mx-auto sm:px-8 ">
      <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-2xl">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Nombre
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Fecha Factura
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                      12/09/2020
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">Pendiente</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
