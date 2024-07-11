import {ReactNode} from 'react'

interface SocialProps{
    url:string;
    children:ReactNode;
}

export function Social({url, children}: SocialProps){
return(
    <a href="#">
      {children}
    </a>
)
}