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
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: titleIndex });
        }, 4000);

        this.titleInterval = setInterval(() => {
            this.setState({ fadeIn: !this.state.fadeIn });
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