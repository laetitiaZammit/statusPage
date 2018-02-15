import React, { Component } from 'react';
import Highcharts from 'highcharts';

class App extends Component {

  // constructor (props) {
  //   super(props);
  //
  //   this.state = {
  //   };
  // }

  render () {
    return (
      <div class="documentation">
        <h1 class="logo">Elastic</h1>
        <div class="welcome">
          <h2>Hey, there!</h2>
          <p>Here's a small assortment of colors you can use to complete the exercise.</p>
          <p>Feel free to bring your own styles and get creative!</p>
        </div>
        <div class="palette">
          <div class="color pink"></div>
          <div class="color green"></div>
          <div class="color yellow"></div>
          <div class="color purple"></div>
          <div class="color gray"></div>
          <div class="color blackish"></div>
        </div>
        <div class="welcome">
          <p>Remember: if you have any questions, do not hesitate to ask your interviewer!</p>
        </div>
      </div>
    );
  }
}

export default App;
