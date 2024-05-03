import DashboardDrawer from "@/components/dashboard/DashboardSidebar/DashboardSidebar"

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <DashboardDrawer>
        {children}
      </DashboardDrawer>
    )
  }
  
  export default DashboardLayout