import React, { Component } from 'react';
import Download from '../../assets/download.svg';
import Filter from '../../assets/filter.svg';
import RightArrow from '../../assets/angle-arrow-down.svg'
import './index.css';

class Demo extends Component {
    componentDidMount() {
        window.onscroll = function() {myFunction()};

            var tableHead = document.getElementById("tableHeader");
            var sticky = tableHead.offsetTop;

            function myFunction() {
            if (window.pageYOffset >= sticky) {
                tableHead.classList.add("sticky")
            } else {
                tableHead.classList.remove("sticky");
            }
        }
    }
    render() {
    return (<>
        <div className="toolbox tool-section">
            <div>Toolbox</div>
            <img src={RightArrow} alt="RightArrow" width="20px" height="20px" /></div>
        <h2 className="demograp">Demographics</h2>
        <div className="tab-section">
            <div>
                <div className="side-tab">Practics</div>
                <div className="side-tab-section">Outcomes</div>
            </div>
            <div>
                <div className="select">
                    <select >
                        <option>Department</option>
                        <option>Department</option>
                        <option>Department</option>
                        <option>Department</option>
                    </select>

                </div>
                <img className="icons" src={Download} alt="Icon" />
                <div className="sec-row">Download</div>
                <img className="icons" src={Filter} alt="Icon" />
                <div className="sec-row"> Filter</div>
            </div>
        </div>
{/* ========================== Side list Start ==================================== */}
        <div className="side-section">
            <aside className="side">
                <ul className="side-list">
                    <li>Shared Version</li>
                    <li>Role Clarity</li>
                    <li>Stratic Clarity</li>

                    <li>Employee Enviornment</li>
                    <li>Custom Focus</li>
                    <li>Competitive Insights</li>

                    <li>Bussiness Partnerships</li>
                    <li>Authoritative Leadership</li>
                    <li>Consultative Leadership</li>

                    <li>Supportive Leadership</li>
                    <li>Challenging Leadership</li>
                    <li>Consultative Leadership</li>

                    <li>Supportive  Leadership</li>
                    <li>Top-down Innovation</li>
                    <li>Knowledge Sharing</li>

                    <li>Capturing Clarity</li>
                    <li>People Performance Review</li>
                    <li>Support Leadership</li>

                    <li>Knowledge Sharing</li>
                    <li>Employee Enviornment</li>
                    <li>Shared Vision</li>

                    <li>Consultative Leadership</li>
                    <li>Competitive Insights</li>
                    <li>Top-down Innovation</li>

                    <li>Authoritative Leadership</li>
                    <li>Customer Focus</li>
                    <li>Shared Vision</li>

                    <li>Sharing Vision</li>
                    <li>Role Clarity Enviornment</li>
                    <li>Share Vision</li>
                    <li>Share Vision</li>
                </ul>
            </aside>
{/* ========================== Side list End ==================================== */}

            <div className="table-section">
{/* ========================== Table Section Start ==================================== */}
    
                <div className="custom-table">
                    <div className="t-head" id="tableHeader">
                        <ul className="t-row">
                            <li className="t-h">Company</li>
                            <li className="t-h">Accounting</li>
                            <li className="t-h">Addmistrative Support</li>
                            <li className="t-h">Architecture</li>
                            <li className="t-h">Business Analysis</li>
                            <li className="t-h">Broker/Dealer</li>
                            <li className="t-h">Business Support</li>
                            <li className="t-h">Addmistrative Support</li>
                            <li className="t-h">Business Analysis</li>
                        </ul>
                    </div>
                    {/* <br/> */}
                    <div className="t-body">
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul><ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        <ul className="t-row">
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>
                            <li className="t-data">73</li>

                        </ul>
                        
                        
                    </div>
                </div>
{/* ========================== Table Section End ==================================== */}

{/* ========================== Benchmark Section Start ==================================== */}

                <ul className="benchmark">
                    <li>BENCHMARK:</li>
                    <li className="bench" />
                    <li>Top Decile</li>
                    <li className="marker top-decile" />

                    <li>Top Quartile</li>
                    <li className="marker top-quar" />

                    <li>Quartile 2</li>
                    <li className="marker quartile-2" />

                    <li>Quartile 3</li>
                    <li className="marker quartile-3" />

                    <li>Bottom Quartile</li>
                </ul>
{/* ========================== Benchmark Section End ==================================== */}

            </div>
        </div>
    </>)
    }
};

export default Demo;