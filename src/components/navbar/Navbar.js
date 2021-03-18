
import * as React from 'react';
import { Link } from "react-router-dom";

import SearchIcon from '../../assets/magnifying-glass.svg';
import UserAvatar from '../../assets/img_avatar.png';

import BarChart from '../../assets/subnav/bar-chart.svg';
import Cloud from '../../assets/subnav/cloud.svg';
import Demography from '../../assets/subnav/demography.svg';

import Graph from '../../assets/subnav/graph.svg';
import Overview from '../../assets/subnav/overview.svg';
import Question from '../../assets/subnav/questions.svg';

import Profile from '../../assets/subnav/profile-plus.svg';
import Addon from '../../assets/subnav/add-on.svg';
import List from '../../assets/subnav/list.svg';

import "./Navbar.css";

const Navbar = () => {
    return (
        <>
{/* ===================== Header section start =================  */}
            <div className="header">
                <div className="logo">
                    <div>
                        <h5>Mckinsey <br /> <span>&nbsp; & Company</span></h5>
                    </div>
                    <ul className="main-nav">
                        <li><Link to="/about-client">About Client</Link></li>
                        <li><Link to="/mange-survey">Mange Survey</Link></li>
                        <li><Link className="diagnose-active" to="/diagnose" >Diagnose</Link> </li>
                        <li><Link to="/recommend" >Recommend</Link> </li>
                        <li><Link to="/take-action" >Take Action</Link> </li>
                    </ul>
                </div>
                <div className="header-right-icon">
                    <div>
                        <img className="user-icon" src={UserAvatar} alt="User-Icon" />
                        <img className="search-icon" src={SearchIcon} alt="Search-Icon" />
                        <div className="report">Report</div>
                    </div>
                </div>
            </div>
{/* ================= Header section end ===================  */}

{/* ================= Sub Navbar section start =================  */}

            <div className='sub-navbar-section'>
                <ul className="sub-nav">
                    <li>
                        <img src={Overview} alt="Icon-Overview" />
                        <Link to="/overview">Overview</Link>
                    </li>
                    <li>
                        <img src={List} alt="Icon-Scorecard" />
                        <Link to="/scorecard">Scorecard</Link>
                    </li>
                    <li>
                        <img src={Profile} alt="Icon-Profile" />
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className="demographics">
                        <img src={Demography} alt="Icon-Demography" />
                        <Link to="/demographics" >Demographics</Link>
                    </li>
                    <li>
                        <img src={Graph} alt="Icon-Benchmarks" />
                        <Link to="/benchmarks">Benchmarks</Link>
                    </li>

                    <li>
                        <img src={Question} alt="Icon-Questions" />
                        <Link to="/profile">Questions</Link>
                    </li>
                    <li>
                        <img src={BarChart} alt="Icon-Practics-Ranking" />
                        <Link to="/practics-ranking">Practics Ranking</Link>
                    </li>
                    <li>
                        <img src={Cloud} alt="Icon-Text Analysis" />
                        <Link to="/text-analysis">Text Analysis</Link>
                    </li>
                    <li>
                        <img src={Addon} alt="Icon-Text-Analysis" />
                        <Link to="/add-on">Add On</Link>
                    </li>

                </ul>
            </div>
{/* ================= Sub Navbar section end =================  */}
        </>
    );
};
export default Navbar;