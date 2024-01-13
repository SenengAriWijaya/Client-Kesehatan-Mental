import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form>
            <InputForm label="Username" type="text" placeholder="username" name="username"></InputForm>
            <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
            <Button className="bg-blue-600 w-full hover:bg-blue-700" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin