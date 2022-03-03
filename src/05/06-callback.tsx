import React, {ChangeEvent, MouseEvent} from "react";

/*
const callback = (): number => {
    alert("hey");
    return 12;
}
window.setTimeout(callback, 1000)
*/

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="delete" onClick={search}>search</button>
    </div>

}