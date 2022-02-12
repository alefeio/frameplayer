import { useContext, useEffect, useState } from "react";
import ThumbContext from "./context/thumb";

import { FramePlayer } from "./components/FramePlayer";
import { images } from "./components/Images";

import './styles.scss'

export function App() {
  const { state, setState } = useContext(ThumbContext);

  function alterImgs(imgs) {
    setState({ ...state, imgs })
  }

  useEffect(() => {
    alterImgs(images)
  }, [])

  return (
    <div className="App">
      <FramePlayer frames={images} fps={0.2} />
    </div>
  );
}
