import React from "react";
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={3} />
                </div>
                <p className="title">Total sales make today</p>
                <p className="amount">200$</p>
                <p className="desc">
                    Last payments may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target1</div>
                        <div className="itemResult">
                            <KeyboardArrowUpOutlinedIcon />
                            <div className="resultAmount">$1.21k</div>
                        </div>

                    </div>
                    <div className="item">
                        <div className="itemTitle">Target2</div>
                        <div className="itemResult negative">
                            <KeyboardArrowUpOutlinedIcon />
                            <div className="resultAmount">$1.22k</div>
                        </div>

                    </div>
                    <div className="item">
                        <div className="itemTitle">Target3</div>
                        <div className="itemResult position ">
                            <KeyboardArrowUpOutlinedIcon />
                            <div className="resultAmount">$1.23k</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured