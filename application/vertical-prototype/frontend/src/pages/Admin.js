import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import axios from 'axios';
import './Admin.css';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  root: {
    minWidth: 60,
    marginBottom: 5,
  },
  table: {
    minWidth: 700,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Admin() {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [commission, setCommission] = React.useState(0);
  const [totalBooks, setTotalBooks] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get(`http://${window.location.hostname}:3001/sold_books`)
      .then((response) => {
        console.log(response.data);
        setTotalBooks(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://${window.location.hostname}:3001/total_commission`)
      .then((response) => {
        console.log(totalAmount);
        setCommission(response.data.commission);
      })
      .catch((e) => console.log(e));
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://${window.location.hostname}:3001/total_books`)
      .then((response) => {
        setTotalAmount(response.data.totalAmount);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="admin__page">
      <Navigation />
      <div className="admin__div">
        <h1 className="total__heading"> Transaction Summary</h1>
        <div className="totalContainer">
          <div className="tr">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">Title</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="center">Date</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {totalBooks.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.title}
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        ${row.price}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.post_time}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className="side">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h3" className="total__card">
                  Total Sales Amount
                </Typography>

                <Typography
                  variant="body2"
                  component="h2"
                  className="total__card__amount"
                >
                  ${totalAmount}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h3" className="total__card">
                  Total Commission
                </Typography>

                <Typography
                  variant="body2"
                  component="h2"
                  className="total__card__amount"
                >
                  ${commission}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
