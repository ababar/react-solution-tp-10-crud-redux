import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data=>data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:count+1,
            name:name,
            email:email
        }))
        navigate('/')
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default AddUser