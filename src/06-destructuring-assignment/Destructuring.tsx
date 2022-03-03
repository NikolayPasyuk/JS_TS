import React, {useState} from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string; name?:string }>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

function useDimychState(m: string) {
    return [m, function () {
    }]
}

function useDimychState2(m: string) {
    return {
        message: m,
        setMessage: function () {
        }
    }
}

const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    const [message, setMessage] = useDimychState("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>{man.name}</div>
    </div>
}