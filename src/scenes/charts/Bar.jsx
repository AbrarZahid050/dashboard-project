import { Box } from "@mui/material";
import BarGraph from "../../components/BarGraph";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar chart to visualise the data" />
      <Box height="75vh">
        <BarGraph />
      </Box>
    </Box>
  );
};

export default Bar;
