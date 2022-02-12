import { useContext } from "react";
import ReactSlider from "react-slider";
import ThumbContext from "../../context/thumb";


export const Slider = ({ qtd, action }) => {
    const { state, setState } = useContext(ThumbContext);

    function alterThumb(current) {
        setState({ ...state, thumb: current })
    }

    return (
        <section>
            <ReactSlider
                className="horizontal-slider"
                markClassName="example-mark"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                marks
                min={0}
                max={qtd - 1}
                value={state.thumb}
                onChange={(currentIndex) => { action(); alterThumb(currentIndex) }}
            />
        </section>
    );
};