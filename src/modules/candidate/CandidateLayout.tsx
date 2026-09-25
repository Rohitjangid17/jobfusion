import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { CANDIDATE_MENU_ITEMS } from "../../core/config/menu/candidateMenu";

const CandidateLayout = () => {
    return (
        <DashboardLayout
            menuItems={CANDIDATE_MENU_ITEMS}
        >
            <main className="h-full overflow-hidden">
                <Outlet />
            </main>
        </DashboardLayout>
    );
};

export default CandidateLayout;