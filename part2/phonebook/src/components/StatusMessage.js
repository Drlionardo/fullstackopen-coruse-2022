import {useEffect} from "react";

export const StatusMessage = ({message, setMessage, isError}) => {
    useEffect(() => {
        if (message !== null) {
            const timer = setTimeout(() => setMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    });

    if (message !== null) {
        console.log(isError)
        console.log(message)
        return (<div className={isError ? 'error' : 'notification'}> {message}</div>)
    } else {
        return null
    }
}