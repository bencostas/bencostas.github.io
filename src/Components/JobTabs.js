import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const JobTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="text-center text-left self-auto w-full lg:w-3/5 xl:w-2/5 h-max">
      <Box
        sx={{
          fontFamily: "sans-serif",
          bgcolor: "background.paper",
          display: "flex",
          height: "100%",
          width: "100%",
          borderRadius: "1.5rem",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: 180, // fixed width for tab section
            minWidth: 180,
            maxWidth: 180,
          }}
        >
          {data.map((tabData, index) => (
            <Tab
              key={index}
              label={tabData.company}
              {...a11yProps(index)}
              sx={{ alignItems: "flex-start", textAlign: "left" }}
            />
          ))}
        </Tabs>

        <Box sx={{ flexGrow: 1 }}>
          {data.map((tabData, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className="text-left font-sans text-clip">
                <div className="text-xl font-sans">
                  {tabData.title} @ {tabData.company}
                </div>
                {tabData.date}
                <ul className="text-base list-outside list-disc pl-4">
                  {tabData.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default JobTabs;
