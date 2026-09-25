import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { ADMIN_MENU_ITEMS } from "../../core/config/menu/AdminMenu";

const AdminLayout = () => {
    return (
        <DashboardLayout
            menuItems={ADMIN_MENU_ITEMS}
        >
            <main className="h-full overflow-hidden">
                <Outlet />
            </main>
        </DashboardLayout>
    );
};

export default AdminLayout;