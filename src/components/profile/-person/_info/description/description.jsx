import React from 'react'
import description from './../../../../../css/profile/-person/_info/_description/_description.module.css'

const Description = () => {
    return (
        <div className={description.description}>
            <h3 className={description.title}>Discription</h3>
            <div className={description.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia facere dolorum veniam numquam, esse sequi est repellat asperiores cumque ratione iste at harum. Necessitatibus consequatur doloribus corrupti iste assumenda. </div>
        </div>
    )
}

export default Description