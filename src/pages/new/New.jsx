import React, { useState } from "react";
import './new.scss'
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
const New = ({ inputs, title }) => {
    const [file,setFile] = useState("");
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file):
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_I5jjsPlWmtmeJNv23u_U3BJ-J9nZDhGtraHkePX8Ufb0vjA&s"
                        }
                            alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file" >Image:<DriveFolderUploadIcon className="icon" /></label>
                                <input onChange={e=>setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
                            </div>
                            {inputs.map((inputs) => (
                                <div className="formInput" key={inputs.id}>
                                    <label >{inputs.label}</label>
                                    <input type={inputs.type} placeholder={inputs.placeholder} />
                                </div>
                            ))}


                            <button>Sent</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New