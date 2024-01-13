import { Fragment, useState } from "react"

const Card = (props) => {
    const {children} = props
    return (
        <div className="container mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between my-3">
            {children}
        </div>         
    )
}

const Header = (props) => {
    const {children} = props

    return (
        <div className="flex items-center py-4 bg-orange-100">
        {children}
        </div>
    )
}

const Body = (props) => {
    const {data} = props

    return (
        <div className="items-center py-12">
            <h1 className="font-bold text-center text-2xl">{data}</h1>
        </div>
    )
}

Card.Header = Header
Card.Body = Body

export default Card