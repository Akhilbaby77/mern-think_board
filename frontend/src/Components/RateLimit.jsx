import "./RateLimit.css"

const RateLimit=()=>{

    return(
        <div className="rate-limit">

           <div className="img"> <img className="charge-img" src="image.png" alt="error" /></div>
            <div>
                <h4>Rate Limit Reached</h4>
                <p>Too many attempts. Please wait a moment</p>
                <p className="light-text">try again in sometime</p>

            </div>
            
        </div>
    )


}
export default RateLimit