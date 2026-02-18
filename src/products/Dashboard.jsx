import { Link, Outlet } from "react-router-dom"

export const Dashboard = () => {
    return(
        <div>
            <h1>Product Dashboard Page</h1>
            <Link to="product1">Product List Page</Link> <br />
            <Link to="product2">Product preview page</Link>
            <Outlet/>
        </div>
    )
}    