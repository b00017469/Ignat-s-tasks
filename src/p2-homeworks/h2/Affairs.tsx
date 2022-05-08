import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (filer: FilterType) => {
        props.setFilter(filer)
    }
    const setHigh = (filer: FilterType) => {
        props.setFilter(filer)
    }
    const setMiddle = (filer: FilterType) => {
        props.setFilter(filer)
    }
    const setLow = (filer: FilterType) => {
        props.setFilter(filer)
    }

    return (
        <div>

            {mappedAffairs}

            <SuperButton className={s.button} onClick={() => setAll('all')}>All</SuperButton>
            <SuperButton className={s.button} onClick={() => setHigh('high')}>High</SuperButton>
            <SuperButton className={s.button} onClick={() => setMiddle('middle')}>Middle</SuperButton>
            <SuperButton className={s.button} onClick={() => setLow("low")}>Low</SuperButton>
        </div>
    )
}

export default Affairs
