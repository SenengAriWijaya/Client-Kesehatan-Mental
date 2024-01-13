import InputForm from "../Elements/Input/Index";

const Form = () => {
    return(
        <form>
            <InputForm label="Username" type="text" placeholder="username" name="username"></InputForm>
            <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
        </form>
    )
}

export default Form