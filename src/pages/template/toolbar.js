import React from "react";

const ToolBar = () => {
    return (<>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

          
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" 
                        href="/#" 
                        id="searchDropdown" 
                        role="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw"></i>
                </a>
              
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </li>

         
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
              
                <span className="badge badge-danger badge-counter">1+</span>
                </a>
                
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="/#">
                    <div className="mr-3">
                    <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                    </div>
                    </div>
                    <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">Ready To DDAL</span>
                    </div>
                </a>
               
                <a className="dropdown-item text-center small text-gray-500" href="/#">Show All Alerts</a>
                </div>
            </li>

            
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                
                <span className="badge badge-danger badge-counter">7</span>
                </a>
               
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                    Message Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="/#">
                    <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                    <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                    <div className="text-truncate">sex sex bot2 Tul?</div>
                    <div className="small text-gray-500">Emiya </div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/#">
                    <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                    <div className="status-indicator"></div>
                    </div>
                    <div>
                    <div className="text-truncate">정글차이 무엇?</div>
                    <div className="small text-gray-500">Top</div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/#">
                    <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                    <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                    <div className="text-truncate">너 사람?</div>
                    <div className="small text-gray-500">Mother</div>
                    </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/#">
                    <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                    <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                    <div className="text-truncate">Hello World</div>
                    <div className="small text-gray-500">Zazi</div>
                    </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="/#">Read More Messages</a>
                </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

             
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Chae Dawoo</span>
               
                </a>
                
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="/#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                </a>
                <a className="dropdown-item" href="/#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                </a>
                <a className="dropdown-item" href="/#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#logout_modal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>
                </div>
            </li>

            </ul>

            </nav>
    
    
    
    </>);
}
export default ToolBar;