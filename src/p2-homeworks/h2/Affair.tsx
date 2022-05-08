import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div className={s.affairs}>
            <span className={s.affairName}>{props.affair.name}</span>
            <span className={s[props.affair.priority]}> {props.affair.priority}</span>
            <SuperButton className={s.button + ' ' + s.buttonDel} onClick={() => deleteCallback(props.affair._id)}>X</SuperButton>
        </div>
    )
}

export default Affair
