import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { SUPER_ADMIN_MENU_ITEMS } from "../../core/config/menu/SuperAdminMenu";

const SuperAdminLayout = () => {
    return (
        <DashboardLayout
            menuItems={SUPER_ADMIN_MENU_ITEMS}
        >
            <main className="h-full overflow-hidden">
                <Outlet />
            </main>
        </DashboardLayout>
    );
};

export default SuperAdminLayout;