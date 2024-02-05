import React from "react";
import './single.scss'
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import Chart from "../../componets/chart/Chart";
import Tables from "../../componets/table/Tables";
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="tittle">Infomation</h1>
                        <div className="item">
                            <img src="https://th.bing.com/th?id=ORMS.d1c79f8b7214acc24a65ef5fab23f78b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0" 
                            alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle"> Xuan Ther</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">Xuanther@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+1 234 456 334</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">DN</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">VietNam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                         <Chart aspect ={3 / 1}/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="tittle">Last Transaction</h1>
                     <Tables/>
                </div>

            </div>
        </div>
    )
}

export default Single 