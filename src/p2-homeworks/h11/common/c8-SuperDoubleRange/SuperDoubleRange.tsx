import * as React from 'react';
import {Box, Slider} from "@material-ui/core";
import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState} from "react";


function valuetext(value: number) {
    return `${value}°C`;
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value1: number
    value2: number
    onChangeRange: (value: number) => void

}

export default function SuperDoubleRange({value1, value2, ...props}: SuperDoubleRangePropsType) {

    const [value, setValue] = React.useState<number[]>([value1, value2]);

    const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
        setValue(value as number[]);
        console.log(value)
    };

    useEffect(() => {
        setValue([value1, value2])
    },[value1])

    useEffect(() => {
        props.onChangeRange && props.onChangeRange(value[0])
    },[value[0]])

    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}