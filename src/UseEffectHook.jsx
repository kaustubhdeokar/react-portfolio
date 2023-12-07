import { useEffect, useState } from 'react'
import './App.css'

function UseEffectHook() {

    const [characterId, setCharacterId] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`).
            then(response => response.json()).
            then(character => console.log(character))
    }, [characterId])

    function incrementCharacterId() {
        setCharacterId((characterId) => characterId + 1);
    }

    return (<>
        <h2>Use Effect Hook</h2>
        <p>
            <button onClick={incrementCharacterId}>Next character</button>
        </p>
        <div>
            Check console log for character's information
            <p>id:{characterId}</p>
            <p>On characterId's value change, function defined in useEffect is triggered.</p>
        </div>

    </>)
}


export default UseEffectHook