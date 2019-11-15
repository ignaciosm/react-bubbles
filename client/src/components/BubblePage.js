import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './axiosWithAuth';
import { withRouter } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
        .then(res => {
          console.log('GET res.data', res.data);
          setColorList(res.data);
        })
        .catch(err => {
          // console.log('err', err)
        })
  }, []);  

  // console.log('bubblepage props', props);
  return (
    <>
      <ColorList {...props} colors={colorList} updateColors={setColorList} />
       <Bubbles colors={colorList} />
    </>
  );
};

export default withRouter(BubblePage);
