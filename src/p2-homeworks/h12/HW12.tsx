import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";


export const themes: Array<string> = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme); // useSelector

    const dispatch = useDispatch()

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let value = e.currentTarget.value
        dispatch(changeThemeAC(value))
    }

    // useDispatch,
    // onChangeCallback


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={themes}
                    onChange={onChangeCallback}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
