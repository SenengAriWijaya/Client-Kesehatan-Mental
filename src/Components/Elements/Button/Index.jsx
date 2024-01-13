const Button = (props) => {
    const {children, className = "bg-black", type = "button"} = props
    return (
      <button className= {`h-10 px-6 font-semibold rounded-md ${className} text-white`} type={type}>
        {children}
      </button>
    )
}

export default Button