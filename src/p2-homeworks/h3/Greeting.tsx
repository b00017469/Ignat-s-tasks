import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement> )=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPress:(e:KeyboardEvent<HTMLInputElement> )=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.ok // need to fix with (?:)
    const isDisabled = error !== '' || name === ''

/*    const keyPressHandler =(e:KeyboardEvent<HTMLInputElement>) =>{
        if (!isDisabled && e.charCode===13){
            addUser()
        }
    }*/

    return (
        <div className={s.greetingClass}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={keyPress}
                   className={inputClass}/>
            <button onClick={addUser} disabled={isDisabled} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <div><span className={s.errorMessage}>{error}</span></div>
        </div>
    )
}

export default Greeting
