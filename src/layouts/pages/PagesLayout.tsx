import { Outlet } from "react-router-dom";

const PagesLayout = () => {

    return (
        <>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default PagesLayout;