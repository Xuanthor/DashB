import { useEffect } from "react"
import { fetchAllUser } from "./service/userService"



export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.image} alt="avatar" />
                    {params.row.userName}
                </div>
            )
        }
    },
    { field: "email", headerName: "Email", width: 230, },
    { field: "age", headerName: "Age", width: 100, },
    { field: "status", headerName: "Status", width: 230, 
    renderCell: (params) => {
        return (
            <div className={`status ${params.row.status}`}>
               {params.row.status}
            </div>
        )
    }}
]
export const userRows = [
    {
        id: 1,
        image: "https://th.bing.com/th?id=ORMS.d1c79f8b7214acc24a65ef5fab23f78b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
        name: "Ther",
        age: 20,
        email: "nguyenxuxantho1@gmail.com",
        status: "Approved"
    }
];


