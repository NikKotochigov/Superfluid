import { DashboardLayout } from "./dashboard-layout";

const Layout = ({children}) => {
    return ( <>
<DashboardLayout>
        {children}
        </DashboardLayout>

    </> );
}
 
export default Layout;