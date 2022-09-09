import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {
    AlternativeSuperDoubleRange, OnChangeType
} from "./common/c8-SuperDoubleRange/AlternativeSuperDoubleRange";
import style from './HW11.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const doubleChange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    const alternativeDoubleChange = ({value1, value2}: OnChangeType) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={style.span}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}// сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={style.span}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={doubleChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={style.span}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            <AlternativeSuperDoubleRange value1={value1}
                                         value2={value2}
                                         min={0}
                                         max={100}
                                         onChange={alternativeDoubleChange}/>
            <hr/>
        </div>
    )
}

export default HW11
