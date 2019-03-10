import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };
    // Like on initi angular
    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount() {

        console.log('Unmount');
        clearInterval(this.titleInterval);
        clearInterval(this.fadeInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: titleIndex });

            console.log('fire at four');
        }, 4000);

        this.fadeInterval = setInterval(() => {
            this.setState({ fadeIn: !this.state.fadeIn });
            console.log('fire at two')
        }, 2000);
    };

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;