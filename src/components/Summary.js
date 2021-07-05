
import React from 'react';
import './Summary.scss'
import SummartyTile from './SummaryTile';

import up from '../assets/images/icon-up.svg';
import down from '../assets/images/icon-down.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import instagram from '../assets/images/icon-instagram.svg';
import youtube from '../assets/images/icon-youtube.svg';

const Summary = () => {
    const summaryTiles = [
        {
            decoration: 'facebook',
            site: facebook,
            username: '@nathanf',
            total: 1987,
            folsub: 'FOLLOWERS',
            arrow: up,
            trend: 'increase',
            daily: 12,
            id: 'facebook'
        },
        {
            decoration: 'twitter',
            site: twitter,
            username: '@nathanf',
            total: 1044,
            folsub: 'FOLLOWERS',
            arrow: up,
            trend: 'increase',
            daily: 99,
            id: 'twitter'
        },
        {
            decoration: 'instagram',
            site: instagram,
            username: '@realnathanf',
            total: '11k',
            folsub: 'FOLLOWERS',
            arrow: up,
            trend: 'increase',
            daily: 1099,
            id: 'instagram'
        },
        {
            decoration: 'youtube',
            site: youtube,
            username: 'Nathan F.',
            total: '8239',
            folsub: 'SUBSCRIBERS',
            arrow: down,
            trend: 'decrease',
            daily: 144,
            id: 'youtube'
        },
    ]
    return (
        <div className="Summary">
            { summaryTiles.map(summaryTile => {
                return <SummartyTile summaryTile={summaryTile} key={summaryTile.id} />
            })}

        </div>
    )
}
export default Summary;