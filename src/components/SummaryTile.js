import React from 'react';
import './SummaryTile.scss';

const SummaryTile = (props) => {
    const { summaryTile } = props;
    return (
        <div className="SummaryTile">
            <div className={"decoration-bar " + summaryTile.decoration} />
            <div className="site-name">
                <img className="site-icon" src={summaryTile.site} alt="site icon"></img>
                <div className="username">{summaryTile.username}</div>
            </div>
            <div className="total-amount">{summaryTile.total}</div>
            <div className="followers-subscribers">{summaryTile.folsub}</div>
            <div className={"trend " + summaryTile.trend}>
                <img className="trend-direction-icon" src={summaryTile.arrow} alt="up icon"></img>
                <div className="daily-amount">{summaryTile.daily}</div>
                <div className="today">Today</div>
            </div>

        </div>
    )
}
export default SummaryTile;