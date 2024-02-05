import  React from "react";
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Tables = () => {
    const rows = [
        {
            id: 123123,
            product: "nitro 5",
            image: "https://th.bing.com/th?id=ORMS.d1c79f8b7214acc24a65ef5fab23f78b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
            customer: "xxx",
            date: "1 March",
            amount: 128,
            method: "Cash on delivery",
            status: "Approved"
        },
        {
            id: 123123,
            product: "nitro 5",
            image: "https://th.bing.com/th?id=ORMS.d1c79f8b7214acc24a65ef5fab23f78b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
            customer: "xxx",
            date: "1 March",
            amount: 128,
            method: "Cash on delivery",
            status: "Pending"
        },
        {
            id: 123123,
            product: "nitro 5",
            image: "https://th.bing.com/th?id=ORMS.d1c79f8b7214acc24a65ef5fab23f78b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
            customer: "xxx",
            date: "1 March",
            amount: 128,
            method: "Cash on delivery",
            status: "Approved"
        }
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking Id</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer </TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount </TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell"> Status</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell >{row.id}</TableCell>
                            <TableCell className="tableCell" align="right">
                            <div className="cellWrapper">
                                <img src={row.image} alt="" className="image" />
                                {row.product}
                            </div>
                             </TableCell>
                            <TableCell className="tableCell" >{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables