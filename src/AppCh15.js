import ColorBox from "./ch15ContextAPI/components/ColorBox";
import ColorContext, {ColorProvider} from "./ch15ContextAPI/contexts/color";
import SelectColors from "./ch15ContextAPI/components/SelectColors";

const AppCh15 = () => {
    return (
        <div>
            <ColorProvider>
                <div>
                    <SelectColors/>
                    <ColorBox/>
                </div>
            </ColorProvider>
        </div>
    )

}
export default AppCh15;