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

export default function Dashboard() {
  const [value, setValue] = useState("1"); // Cambiado a cadena
  const totalDebts = useSelector(
    (state: RootState) => state.dashboard_data.total_fatures
  );

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
        <div className="flex relative sm:overflow-hidden overflow-x-scroll justify-around">
          <Debts data={facturas} />
          <Paid data={data2} />
          <Deficift data={data2} />
        </div>
        <div className="w-full">
          <ButtonsAdd />
          <FiltroPorFecha />
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} centered>
                <Tab label="Facturas" value="1" />
                <Tab label="Pagos" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className="w-full">
              <TableFac />
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
