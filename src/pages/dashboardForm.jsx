import Form from "../Components/Fragment/Form";
import Sidebar from "../Components/Fragment/Sidebar";

const DashboardForm = () => {
    return(
        <div className="flex">
            <Sidebar></Sidebar>
            <Form></Form>
        </div>
    )
}

export default DashboardForm