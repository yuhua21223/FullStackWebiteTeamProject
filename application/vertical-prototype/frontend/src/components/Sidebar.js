/**
 * Filename: Sidebar.js
 * Description: This file creates the side bar for explore now page
 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Books from '../pages/Books';
import axios from 'axios';
import { setPosts } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 450,
    position: 'absolute',
    margin: 5,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [paidBooks, setPaidBooks] = React.useState([]);

  const dispatch = useDispatch();

  const handleChange = (e, value) => {
    console.log('This is coming From Explore ' + value);

    const searchData = {
      searchField: e.target.innerText,
      searchType: 'department',
      searchTable: 'paidbooks',
    };
    console.log(searchData);
    if (searchData.searchField === 'ALL BOOKS') {
      axios
        .get(`http://${window.location.hostname}:3001/allbooks`)
        .then((response) => {
          console.log(response);

          if (!response.data.msg) {
            dispatch(setPosts(response.data));
          } else {
            dispatch(setPosts(response.data.results));
            console.log(response.data.results);
          }
        });
      return;
    }
    console.log(searchData);

    axios
      .get(
        `http://${window.location.hostname}:3001/allbooksbydept/${searchData.searchField}`,
        searchData
      )
      .then((response) => {
        console.log(response);

        if (!response.data.msg) {
          dispatch(setPosts(response.data));
          console.log(response.data);
        } else {
          dispatch(setPosts(response.data.results));
          console.log(response.data.results);
        }
      });
  };

  React.useEffect(() => {
    axios
      .get(`http://${window.location.hostname}:3001/allbooks`)
      .then((response) => {
        console.log(response);

        if (!response.data.msg) {
          dispatch(setPosts(response.data));
        } else {
          dispatch(setPosts(response.data.results));
          console.log(response.data.results);
        }
      });
  });

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="All Books" {...a11yProps(0)} />
        <Tab label="Computer" {...a11yProps(1)} />
        <Tab label="Economics" {...a11yProps(2)} />
        <Tab label="Law" {...a11yProps(3)} />
        <Tab label="Biology" {...a11yProps(4)} />
        <Tab label="Physics" {...a11yProps(5)} />
        <Tab label="History" {...a11yProps(6)} />
        <Tab label="Astronomy" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Books paidBooks={paidBooks} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Books />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Books />
      </TabPanel>
    </div>
  );
}
