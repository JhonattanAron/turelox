import { Box } from "@mui/material";
import TableFac from "../../components/admin/TableFac";
import Debts from "../../components/admin/debts";
import Layout from "../../hocs/layouts/layout";

import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Paid from "../../components/admin/paid";
import TablePaid from "../../components/admin/TablePaid";
import ButtonsAdd from "../../components/admin/ButtonsAdd";
import FiltroPorFecha from "../../components/searchs/FiltroPorFecha";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Deficift from "../../components/admin/deficift";
import ModalComponent from "../../components/utils/ModalComponent";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [value, setValue] = useState("1"); // Cambiado a cadena
  const [filterDate, setFilterDate] = useState("");
  const [verififilter, setverfiFilter] = useState(false);
  const totalDebts = useSelector(
    (state: RootState) => state.dashboard_data.total_fatures
  );
  const giveDate = (date: string) => {
    setFilterDate(date);
    console.log(filterDate);
    if (date.length > 1) {
      setverfiFilter(true);
    } else {
      setverfiFilter(false);
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const facturas = {
    tipe: "Abonos",
    color: "green",
    value: totalDebts.toString(),
    porcent: "75",
  };
  const data2 = {
    tipe: "Por Pagar",
    color: "red",
    value: "350",
    porcent: "50",
  };

  return (
    <>
      <Layout>
        <div className="flex relative xl:overflow-hidden overflow-x-scroll justify-around">
          <Debts data={facturas} />
          <Paid data={data2} />
          <Deficift data={data2} />
        </div>
        <div className="w-full">
          <ButtonsAdd />
          <FiltroPorFecha dateSend={giveDate} />
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} centered>
                <Tab label="Facturas" value="1" />
                <Tab label="Pagos" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className="w-full">
              <ModalComponent
                styles="py-2 px-4 absolute z-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                icon={<ArrowTopRightOnSquareIcon className="w-6" />}
              >
                <div className="h-[80vh] w-[80vw] overflow-scroll xl:px-8 shadow-2xl">
                  <TableFac date={filterDate} filter={verififilter} />
                </div>
              </ModalComponent>
              <div className="h-[32vh] overflow-scroll xl:px-8 shadow-2xl">
                <TableFac date={filterDate} filter={verififilter} />
              </div>
            </TabPanel>
            <TabPanel value="2" className="w-full">
              <TablePaid />
            </TabPanel>
          </TabContext>
        </div>
      </Layout>
    </>
  );
}
