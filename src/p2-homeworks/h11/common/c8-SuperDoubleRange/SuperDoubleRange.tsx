import * as React from 'react';
import {Box, Slider} from "@material-ui/core";
import {ChangeEvent} from "react";


function valuetext(value: number) {
    return `${value}°C`;
}

type SuperDoubleRangePropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
    value1: number
    value2: number
}

export default function SuperDoubleRange({value1, value2, ...props}: SuperDoubleRangePropsType) {
    const [value, setValue] = React.useState<number[]>([value1, value2]);

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: 300 }}>
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