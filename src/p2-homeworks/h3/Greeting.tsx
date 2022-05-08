import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.ok // need to fix with (?:)
    const isDisabled = error !== '' || name === ''

    return (
        <div className={s.greetingClass}>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            onKeyPress={keyPress}
                            className={inputClass}
            />
            <SuperButton onClick={addUser} disabled={isDisabled} className={s.button}> add</SuperButton>
            <span>{totalUsers}</span>
            <div><span className={s.errorMessage}>{error}</span></div>
        </div>
    )
}

export default Greeting
