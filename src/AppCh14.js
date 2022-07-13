import {useState} from "react";
import axios from "axios";

const AppCh14 = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=b94ae4a26b1540389e2c4db18efe6b1f');
            setData(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    )

};

export default AppCh14