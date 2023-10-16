import { Box } from "@mui/material";

const TabPanel = ({ value, index, children }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
);

export default TabPanel;

