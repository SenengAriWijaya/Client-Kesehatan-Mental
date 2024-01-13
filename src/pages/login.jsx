import AuthLayout from "../Components/Layout/AuthLayout";
import FormLogin from "../Components/Fragment/FormLogin";

const LoginPages = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPages