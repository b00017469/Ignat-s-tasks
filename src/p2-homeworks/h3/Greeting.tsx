import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement> )=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.ok // need to fix with (?:)
    const isDisabled = error !== '' || name === ''

    return (
        <div className={s.greetingClass}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            <button onClick={addUser} disabled={isDisabled} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <div><span className={s.errorMessage}>{error}</span></div>
        </div>
    )
}

export default Greeting
