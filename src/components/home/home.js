import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../page.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Menu principal</h2>
        <span>Hi \o/</span>
        <span>Je suis Gatien, un jeune développeur</span>
        <span>I like new technologies and having a good time with friends. My passion is divided between my love for technology and my thirst for creativity.</span>
        <span>My favorite time pass is coding, playing video games and getting lost on Reddit. I know Javascript, Typescipt, Pyhton, Swift, mongodb, nodejs and more, but my favorite environement is the Javascript. When I play video games I love playing to Factorio, Hacknet, Battlefield or League of Legend with my friends.</span>
        <span>In 2014 I learned to code. I preferred coding rather than learning my classes, that's why today I got my BAC (with honors) with a two years delay.</span>
        <span>Since that day I've been learning new technologies. Actualy I'm on vue.js, I love this framework. It's much more intuitive than Angular (for example), and the coding team is mutch more dovted to the task and that see! This website is coding on vue.js with vue-ui and Typescript.</span>
        <div className="links">
          <Link to="/test">Test</Link>
          <Link to="/page">Page</Link>
          <Link to="/whow">Whow</Link>
        </div>
      </div>
    )
  }
}