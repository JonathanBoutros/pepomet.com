import "./main.css"

const Main = () => {
    return(
        <div className="container">
            <div className="content">
                <div className="messageContent">
                    <p></p>
                </div>
            </div>
            <div className="inputContent">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Write your Quotes" 
                    />
                <button className="btn">Send</button>
            </div>
        </div>
    );    
}

export default Main;