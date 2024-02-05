import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = ({type})=>{
    let data;
   const amount =100;
   const diff =20;
     switch(type)
     {
        case"user":
        data={
            title:"USER",
            isMoney:false,
            link:"See all users",
            icon: <PersonOutlineOutlinedIcon 
                className="icon" 
                style={
                    {
                        color:"crimson",
                        backgroundColor:"rgb(255,0,0,0.2)"
                    }
                     } /> 
        }
        break;
        case"order":
        data={
            title:"ORDER",
            isMoney:false,
            link:"View all orders",
            icon: <PersonOutlineOutlinedIcon 
            className="icon"
            style={
                {
                    color:"yellow",
                    backgroundColor:"rgb(255,0,0,0.2)"
                }
                 } /> 
        }
        break;
        case"earning":
        data={
            title:"EARNING",
            isMoney:true,
            link:"View net earning",
            icon: <PersonOutlineOutlinedIcon 
            className="icon"
            style={
                {
                    color:"green",
                    backgroundColor:"rgb(255,0,0,0.2)"
                }
                 } /> 
        }
        break;
        case"balance":
        data={
            title:"BALANCE",
            isMoney:true,
            link:"See detail",
            icon: <PersonOutlineOutlinedIcon 
            className="icon"
            style={
                {
                    color:"purple",
                    backgroundColor:"rgb(255,0,0,0.2)"
                }
                 } 
            /> 
        }
        break;
        default:
        break;
     }

    return(
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                 <KeyboardArrowUpOutlinedIcon/>
                 {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
export default Widget