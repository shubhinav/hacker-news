import "./ErrorMessage.css"
import { Icon } from '@iconify/react';

export default function ErrorMessage(){
    return(
        <div className="error-message container">
            <Icon icon="akar-icons:chat-error" className="error-message-icon"/>
            <h2 className="error-message-title">Something went wrong.</h2>
            <p>Try refreshing the page, or try after some time.</p>
        </div>
    )
}