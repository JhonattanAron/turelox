import { Box, Tabs } from "@mui/material";
import TableFac from "../../components/admin/TableFac";
import Debts from "../../components/admin/debts";
import Layout from "../../hocs/layouts/layout";

import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Paid from "../../components/admin/paid";
import TablePaid from "../../components/admin/TablePaid";
import ButtonsAdd from "../../components/admin/ButtonsAdd";
import Form from "../../components/forms/Form";

export default function Dashboard() {
  const [value, setValue] = useState("1"); // Cambiado a cadena

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const data1 = {
    tipe: "Abonos",
    color: "green",
    value: "350",
    porcent: "100",
  };
  const data2 = {
    tipe: "Por Pagar",
    color: "red",
    value: "350",
    porcent: "70",
  };
  return (
    <Layout>
      <div className="flex justify-center">
        <Debts data={data1} />
        <Paid data={data2} />
      </div>
      <div className="w-full">
        <ButtonsAdd />
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
  );
}
