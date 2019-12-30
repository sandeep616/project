import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('400 Castlereagh St, Haymarket NSW 2000, Australia', 'Settlement', 6.0, 'a month ago'),
  createData('196 Stacey Street, Bankstown NSW, Australia', 'Opportunity', 9.0, 'a day ago'),
  createData('169 Macquarie Street, Parramatta NSW, Australia', 'Opportunity', 16.0, '2 days ago'),
  createData('168 Kent Street, Sydney NSW, Australia', 'Settlement', 3.7, '2 days ago'),
  createData('1644 Logan Road, Mount Gravatt QLD, Australia', 'Settlement', 16.0,'a day ago'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <Container fixed>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property address</TableCell>
            <TableCell align="right">Features</TableCell>
            <TableCell align="right">Satus</TableCell>
            <TableCell align="right">Last update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}