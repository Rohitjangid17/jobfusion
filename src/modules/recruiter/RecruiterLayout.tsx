import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { RECRUITER_MENU_ITEMS } from "../../core/config/menu/recruiterMenu";

const RecruiterLayout = () => {
    return (
        <DashboardLayout
            menuItems={RECRUITER_MENU_ITEMS}
        >
            <main className="h-full overflow-hidden">
                <Outlet />
            </main>
        </DashboardLayout>
    );
};

export default RecruiterLayout;