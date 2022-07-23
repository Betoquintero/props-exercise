import React from 'react';


export default function Card (props){
    const {name, age, isPremium, country} = props.client
    const premium = isPremium ? 'premium' : null
    const clientPremium = isPremium ? 'yes' : 'no'
    let greeting = ''
    if (country === 'de'){
        greeting = 'Hallo'
    } else if (country === 'en'){
        greeting = 'Hello'        
    } else if (country === 'fr'){
        greeting = 'Bonjour'
    } else if (country === 'es'){
        greeting='Hola'
    }
        

    return (
        <div className={'card ' + premium}>
            <h2>{greeting} {name}!</h2>
            <p>Age: {age}</p>
            <p>Is it a premium client? {clientPremium}</p>

        </div>
    )
}