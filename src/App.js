import "@google/model-viewer";
import cube from './assets/cubeLUT.glb';
import stex from './assets/stex.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="logostex" src={stex} alt="" />
      <model-viewer id="viewer" src={cube} shadow-intensity="1" ar ar-modes="webxr scene-viewer quick-look" camera-controls min-camera-orbit="auto auto 100%" max-camera-orbit="auto auto 100%" min-field-of-view="45deg" max-field-of-view="45deg" environment-image="neutral" auto-rotate autoplay></model-viewer>
    </div>
  );
}
export default App;