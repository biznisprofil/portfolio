import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Boris!</p>
                <Title />
                <p>I love working with Angular, React and other frontend technologies!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I have big experience working with Angular framework on scalable project!</p>
                            <p>Currently i am learning React since this is going to be my second best alternative.</p>
                            <p>Beside that i am working with Node JS and Ionic framework for developing mobile apps.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;


