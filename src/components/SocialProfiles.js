import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
    const { image, link } = props.profile;
    return (
        <span style={{ margin: 10 }}>
            <a href={link}>
                <img src={image} alt={image} style={{ width: 35, height: 35 }} />
            </a>
        </span>
    )
}


const SocialProfiles = () => (
    <div>
        <h2>Social Profiles</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                    <SocialProfile key={SOCIAL_PROFILE.id} profile={SOCIAL_PROFILE} />
                ))
            }
        </div>
    </div>
)


export default SocialProfiles;