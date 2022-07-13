import {useContext} from "react";
import ColorContext from "../contexts/color";

const Title = ()=> {

    const {state} = useContext(ColorContext);

    return(
        <div>
            <h1>{state.color}</h1>
        </div>
    )


}
export default Title;