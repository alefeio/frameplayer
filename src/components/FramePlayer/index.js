import { useContext, useState, useRef } from "react";
import ThumbContext from "../../context/thumb";

import { Slider } from "../Slider";
import { Play } from "../Play";

export function FramePlayer({ frames, fps }) {
    const { state, setState } = useContext(ThumbContext);
    const [status, setStatus] = useState(false)
    const timerRef = useRef()

    const frame = (1 / fps) * 1000

    function play() {
        setStatus(true)

        let thumbnail = state.thumb

        timerRef.current = setInterval(() => {
            thumbnail = thumbnail >= frames.length - 1 ? 0 : thumbnail + 1
            alterThumbs(thumbnail)            
        }, frame)
    }

    function pause() {
        setStatus(false)
        clearInterval(timerRef.current)
    }

    function back() {
        const newThumb = state.thumb === 0 ? frames.length - 1 : state.thumb - 1

        setStatus(false)
        clearInterval(timerRef.current)
        setState({ ...state, thumb: newThumb })
    }

    function advance() {
        const newThumb = state.thumb === frames.length - 1 ? 0 : state.thumb + 1

        setStatus(false)
        clearInterval(timerRef.current)
        setState({ ...state, thumb: newThumb })
    }

    function alterThumbs(thumb) {
        setState({ ...state, thumb })
    }

    return (
        <>
            <section>
                <img src={frames[state.thumb]} className="img" />
            </section>
            <Slider qtd={frames.length} action={pause} />
            <Play status={status} pl={!status ? play : pause} rt={back} ad={advance} />
        </>
    )
}