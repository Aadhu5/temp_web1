import react from 'react'
import { useSelector, useDispatch } from 'react-redux'
const actions = {
    type: 'Show'
  }
export default function Contact() {
    const bb = useSelector((state)=> state.state)
    const xx = useDispatch()

    return (
        <div>
            dddd {bb}
            <button onClick={() => xx(actions)}>mmmmm</button>
        </div>
    )
}