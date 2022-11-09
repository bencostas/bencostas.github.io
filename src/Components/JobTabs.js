import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const JobTabs = ({ data }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='text-center rounded-3xl shadow-xl text-left self-auto w-full lg:w-3/5 xl:w-2/5 h-max'>
        <Box
            sx={{ fontFamily: "sans-serif", bgcolor: 'background.paper', display: 'flex', height: "100%", width: "100%", borderRadius: "1.5rem"}}
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
                    }
                }}
                style={{minWidth: "10.5em"}}
                sx={{ borderRight: "1px", borderColor: 'divider', textAlign: "left" }}
            >
                {data.map((tabData, index) => (
                    <Tab
                        label={tabData.company}
                        {...a11yProps(index)}
                    />
                ))}

            </Tabs>
            {data.map((tabData, index) => (
                <TabPanel
                    value={value}
                    index={index}
                >
                    <div className='text-left font-sans text-clip'>
                        <div className="text-xl font-sans">
                            {tabData["title"]} @ {tabData["company"]}
                        </div>
                        {tabData["date"]}
                        <ul className="text-base list-outside list-disc">
                            {tabData["desc"].map((d, i) => {
                                return (<li key={i}>{d}</li>)
                            })}
                        </ul>
                    </div>

                </TabPanel>
            ))}
        </Box>
        </div>
    );
}

export default JobTabs;