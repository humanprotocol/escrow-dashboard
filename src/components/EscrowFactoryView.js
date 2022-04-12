import React, { useState, useEffect } from "react";
import {
  Divider,
  Typography,
  Paper,
  Card,
  Stack,
  Link,
  Box,
  CardContent,
} from "@mui/material";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TablePagination,
} from "@mui/material";

function createData(network, escrow, eip, escrowCounters, balance) {
  return { network, escrow, eip, escrowCounters, balance};
}

export default function Escrow(props) {
  const { count, address, eventsUrl, scanner, contractData, networkMap } = props;
  const [rows, setRows] = useState([]);

  // useEffect(() =>{
  //   setRows([]);
  // }, [address])

  useEffect(() => {
    setRows([createData(...contractData), ...rows])
  }, contractData)

  const columns = [
    {id: 'network', label: 'NetWork', minWidth: 150},
    { id: "escrow", label: "Latest Escrow", minWidth: 170 },
    {
      id: "eip",
      label: "Eip20",
      minWidth: 170,
    },
    { id: "escrowCounters", label: "Amount of jobs", minWidth: 100 },
    { id: "balance", label: "HMToken Balance", minWidth: 150}
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card className="main-container">
      <Paper className="table-wrap" sx={{marginBottom: '10px'}}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={`header_row_${column.id}`}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const net = rows[index].network;
                  const escrowAddr = rows[index].escrow.toUpperCase();
                  if( address.toUpperCase() !== escrowAddr && address !== '')
                    return 
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`body_row_${index}`}
                    >
                      { columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              index === 1 && 
                              <Link
                                href={`${ net === "Polygon" ? `${networkMap['polygon'].scanner}` : `${networkMap['rinkeby'].scanner}`}/address/${value}`}
                                target="_blank"
                                rel="noreferrer"
                                align="center"
                              >
                                {value}
                              </Link>
                            }
                            { index !== 1  && value }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="table-pagenation">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>
      <Events url={`${networkMap['polygon'].scanner}/address/${networkMap['polygon'].defaultFactoryAddr}#events`} scanner={networkMap['polygon'].scanner} />
      <Events url={`${networkMap['rinkeby'].scanner}/address/${networkMap['rinkeby'].defaultFactoryAddr}#events`} scanner={networkMap['rinkeby'].scanner} />
    </Card>
  );
}

function CardTextBlock({ title, value }) {
  return (
    <>
      <Divider textAlign="center" sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Divider>
      <Typography variant="body2" textAlign="center">
        {value}
      </Typography>
    </>
  );
}

function Events({ url, scanner }) {
  return (
    <Box className="table-footer" sx={{paddingTop: '0px'}}>
      <Stack direction="row" alignItems="center">
        <Box mr={2} className='color--02' sx={{fontWeight:'600'}}>All deployed escrows</Box>
        <Link
          className="mr-3"
          href={url}
          target="_blank"
          rel="noreferrer"
          align="center"
        >
          {scanner}
        </Link>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: 11,
        }}
      >
        Each event has a payload of ERC20 token address and Escrow Address.
        Change the type of the second argument to "Address" to see an Escrow
        address
      </Typography>
    </Box>
  );
}
