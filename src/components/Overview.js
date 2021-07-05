import React from 'react';
import './Overview.scss';
import OverviewTile from './OverviewTile';
import up from '../assets/images/icon-up.svg';
import down from '../assets/images/icon-down.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import instagram from '../assets/images/icon-instagram.svg';
import youtube from '../assets/images/icon-youtube.svg';

const Overview = () => {
    const overviewTiles = [
        {
            activity: 'Page Views',
            site: facebook,
            amount: 87,
            arrow: up,
            trend: 'increase',
            percentage: 3,
        },
        {
            activity: 'Likes',
            site: facebook,
            amount: 52,
            arrow: down,
            trend: 'decrease',
            percentage: 2,
        },
        {
            activity: 'Likes',
            site: instagram,
            amount: 5462,
            arrow: up,
            trend: 'increase',
            percentage: 2257,
        },
        {
            activity: 'Profile Views',
            site: instagram,
            amount: '52k',
            arrow: up,
            trend: 'increase',
            percentage: 1375,
        },
        {
            activity: 'Retweets',
            site: twitter,
            amount: 117,
            arrow: up,
            trend: 'increase',
            percentage: 303,
        },
        {
            activity: 'Likes',
            site: twitter,
            amount: 507,
            arrow: up,
            trend: 'increase',
            percentage: 553,
        },
        {
            activity: 'Likes',
            site: youtube,
            amount: 107,
            arrow: down,
            trend: 'decrease',
            percentage: 19,
        },
        {
            activity: 'Total Views',
            site: youtube,
            amount: 1407,
            arrow: down,
            trend: 'decrease',
            percentage: 12,
        },
    ]

    return (
        <div className="Overview">
            <h2>Overview - Today</h2>
            <div className="overview-tiles">
                {overviewTiles.map((overviewTile, i) => {
                    return <OverviewTile overviewTile={overviewTile} key={i} />
                })}
            </div>
        </div>
    )
}
export default Overview;