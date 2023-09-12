import React, { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';

const ImageAIComponent = () => {
  const webcamContainerRef = useRef(null);
  const labelContainerRef = useRef(null);

  useEffect(() => {
    const URL = './my_model/';
    let model, webcam, labelContainer, maxPredictions;

    async function init() {
      const modelURL = URL + 'model.json';
      const metadataURL = URL + 'metadata.json';

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      webcamContainerRef.current.appendChild(webcam.canvas);
      labelContainer = labelContainerRef.current;
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
      }
    }

    async function loop() {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }

    async function predict() {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }
    }

    init(); // Inicie a IA de imagens quando o componente for montado.

    return () => {
      // Faça a limpeza quando o componente for desmontado, se necessário.
    };
  }, []);

  return (
    <div>
      <div>Teachable Machine Image Model</div>
      <div ref={webcamContainerRef}></div>
      <div ref={labelContainerRef}></div>
    </div>
  );
};

export default ImageAIComponent;
