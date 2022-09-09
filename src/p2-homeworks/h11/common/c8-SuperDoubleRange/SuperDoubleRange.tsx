import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    style={{width: '300px'}}
                //getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
