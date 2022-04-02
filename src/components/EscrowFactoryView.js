import React, { useState } from "react";
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

function createData(escrow, childCounter, duration) {
  return { escrow, childCounter, duration};
}

export default function Escrow(props) {
  const { count, address, latestEscrow, eventsUrl, scanner } = props;

  const columns = [
    { id: "escrow", label: "Escrow", minWidth: 170 },
    { id: "escrowCounter", label: "Escrow Counter", minWidth: 100 },
    {
      id: "duration",
      label: "Duaration",
      minWidth: 170,
      format: (value: number) => value.toLocaleString("en-US"),
    }
  ];

  const rows = [
    createData("0x45eBc3eAE6DA485097054ae10BA1A0f8e8c7f794", 354, 32873),
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
      {/* <CardContent>
        <CardTextBlock title="Address" value={address} />
        <CardTextBlock title="Latest Escrow" value={latestEscrow} />
        <CardTextBlock title="Amount of jobs" value={count} />
      </CardContent> */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >

        <Typography variant="body1" 
          sx={{
            fontSize: "18px",
            color: "var(--primary-text)",
            fontWeight: "900",
            padding: "15px",
          }}>
          Address: <span style={{color: "green"}}>{address}</span>      
        </Typography>
        
        <Typography variant="body1"
          sx={{
            fontSize: "18px",
            color: "var(--primary-text)",
            fontWeight: "900",
            padding: "15px",
          }}>
          Amount of jobs: <span style={{color: "green"}}>{count}</span>    
        </Typography>
      </Box>
      <Paper className="table-wrap">
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
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`body_row_${row.code}`}
                    >
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        console.log(index);
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              index === 0 && 
                              <Link
                                className="mr-3"
                                href={eventsUrl}
                                target="_blank"
                                rel="noreferrer"
                                align="center"
                              >
                                {value}
                              </Link>
                            }
                            { index !== 0 && (column.format && typeof value === "number"
                              ? column.format(value)
                              : value)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Events url={eventsUrl} scanner={scanner} />
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
    <Box className="table-footer">
      {/* <Stack direction="row" alignItems="center">
        <Box mr={2}>All deployed escrows</Box>
        <Link
          className="mr-3"
          href={url}
          target="_blank"
          rel="noreferrer"
          align="center"
        >
          {scanner}
        </Link>
      </Stack> */}

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
    // <Box textAlign="center">
    //   <Divider sx={{ mt: 1 }}>
    //     <Typography variant="body2" color="text.secondary">
    //       All deployed escrows
    //     </Typography>
    //   </Divider>
    //   <Link href={url} target="_blank" rel="noreferrer" align="center">
    //     {scanner}
    //   </Link>
    //   <Typography
    //     variant="body2"
    //     color="text.secondary"
    //     sx={{
    //       fontSize: 11,
    //     }}
    //   >
    //     Each event has a payload of ERC20 token address and Escrow Address
    //   </Typography>
    //   <Typography
    //     variant="body2"
    //     color="text.secondary"
    //     sx={{
    //       fontSize: 11,
    //     }}
    //   >
    //     Change the type of the second argument to "Address" to see an Escrow
    //     address
    //   </Typography>
    // </Box>
  );
}
