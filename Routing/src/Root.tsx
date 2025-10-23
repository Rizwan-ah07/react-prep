import { NavLink, Outlet } from "react-router-dom"

const Root = () => {
    return(
        <div className="container">
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="page1">Page 1</NavLink>
                    <NavLink to="page2">Page 2</NavLink>
                </nav>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Root;