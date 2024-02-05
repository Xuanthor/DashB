import React  from "react";
import './home.scss'
import Sidebar from '../../componets/sidebar/Sidebar'
import Navbar from "../../componets/navbar/Navbar";
import Widget from "../../componets/widget/Widget";
import Featured from "../../componets/featured/Featured";
import Chart from "../../componets/chart/Chart";
import Tables from "../../componets/table/Tables";


const Home = () =>{
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart aspect={2/ 1}/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest transaction</div>
                <Tables/>
            </div>
            </div>
        </div>
    )
}

export default Home