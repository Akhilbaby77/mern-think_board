import "./NavBar.css"

import { useNavigate } from "react-router-dom"

const NavBar = ()=>{

    const navigate = useNavigate()

return(
    <div className="NavBar">
    <div className="ThinkBoard"><h1 className="Nav-Title">ThinkBoard</h1></div>
    <div><button className="add-note" onClick={()=>navigate("/create")}>+ New Note</button></div>
</div>

)

}
export default NavBar