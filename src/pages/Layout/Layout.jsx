
import { Outlet } from "react-router-dom"
import Navbar from "../../shared/components/navbar/Navbar"
import "./Layout.css"
import { Footer } from "../../shared/components/footer/Footer"

export const Layout = () => {
    return (
        <main className="main__container">
            <Navbar />
            <Outlet ></Outlet>
            <Footer />
        </main>
    )
}


