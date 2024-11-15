import React from 'react';
import Image from "next/image";

function Header(){
    return(
        <div>
            <Image src='/'
            alt='logo'
                   width={50}
                   height={50}
            />
        </div>
    )
}

export default Header
