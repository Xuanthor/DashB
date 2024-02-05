import React  from "react";
import './navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () =>{
    return(
        <div className="navbar">
          <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                < SearchIcon />
            </div>
            <div className="items">
                    <div className="item">
                      <LanguageIcon className="icon"/> English
                    </div>
                    <div className="item">
                      <DarkModeIcon className="icon"/> 
                    </div>
                    <div className="item">
                      <FullscreenExitIcon className="icon"/>
                    </div>
                    <div className="item">
                      <NotificationsIcon className="icon"/> 
                      <div className="counter">1</div>
                    </div> 
                    
                    <div className="item">
                      <ChatBubbleOutlineIcon className="icon"/>
                      <div className="counter">2</div>
                    </div>
                    <div className="item">
                      < ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                      <img src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/anh-nen-dep-cho-dien-thoai-4k-111941448-19-14-31-10.jpg" 
                       alt="abc" className="avatar"/>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Navbar