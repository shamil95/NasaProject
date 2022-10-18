import { ReactComponent as HeadIcon} from "../assets/footerhead.svg";
import "./Input-area.css"

const InputArea = () => {
  return (
    <div className="input-area-container">
      <HeadIcon/>
      <h2>Stay with us</h2>
      <div className="input-area">
        <input className="input" placeholder="Enter your email" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  )
}

export default InputArea
