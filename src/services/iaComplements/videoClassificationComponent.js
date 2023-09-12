import React, { useEffect, useRef } from 'react';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import ml5 from 'ml5';

const VideoClassificationComponent = () => {
  let classifier;
  const imageModelURL = './my_model/';
  let video;
  let flippedVideo;
  let label = "";

  useEffect(() => {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(320, 260);
        video = p.createCapture(p.VIDEO);
        video.size(320, 240);
        video.hide();
        flippedVideo = ml5.flipImage(video);
        classifyVideo();
      };

      p.draw = () => {
        p.background(0);
        p.image(flippedVideo, 0, 0);
        p.fill(255);
        p.textSize(16);
        p.textAlign(p.CENTER);
        p.text(label, p.width / 2, p.height - 4);
      };

      const classifyVideo = () => {
        flippedVideo = ml5.flipImage(video);
        classifier.classify(flippedVideo, gotResult);
        flippedVideo.remove();
      };

      const gotResult = (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        label = results[0].label;
        classifyVideo();
      };
    };

    new p5(sketch);
  }, []);

  return (
    <div>
      <div>Teachable Machine Image Model - p5.js and ml5.js</div>
    </div>
  );
};

export default VideoClassificationComponent;
