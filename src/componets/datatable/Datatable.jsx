import React, { useState } from "react";
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
// import { userRows } from '../../datatablesc'
import { Link } from "react-router-dom";

import { useEffect } from "react"
import { fetchAllUser } from "../../service/userService";
const Datatable = () => {
    const actionClumns = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>

                        <div className="deleteButton">Delete</div>
                        <div className="updateButton">Update</div>
                    </div>
                )
            }
        }
    ]
    const [listUsers, setListUsers] = useState([]);
    console.log(listUsers)
    //fetchdat
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        const res = await fetchAllUser();
        if (res && res.data.data && res.data.data.result)
            setListUsers(res.data.data.result);  
    }

   //get id
    const getRowId = (row) => row._id;
     /// data userColumns
    const userColumns = [
        { field: '_id', headerName: 'ID', width: 70 },
        {
            field: "user", headerName: "User", width: 230, renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.image} alt="avatar" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: "email", headerName: "Email", width: 230, },
        { field: "age", headerName: "Age", width: 100, },
        {
            field: "role", headerName: "Role", width: 230,
            renderCell: (params) => {
                return (
                    <div className={`status ${params.row.status}`}>
                        {params.row.role}
                    </div>
                )
            }
        }
    ]
    return (
        <div className="datatable">
            <div className="datatableTittle">
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Add new
                </Link>
            </div>
            <DataGrid
                rows={listUsers}
                columns={userColumns.concat(actionClumns)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 3 },
                    },
                }}
                pageSizeOptions={[3, 6, 9]}
                checkboxSelection
                getRowId = {getRowId}
                onRowSelectionModelChange={(data) => {
                    // console.log(da)
                }}
            />
        </div>
    )
}

export default Datatable