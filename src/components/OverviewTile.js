import React from 'react';
import './OverviewTile.scss';

const OverviewTile = (props) => {
    const { overviewTile } = props;
    return (
        <div className="OverviewTile">
            <div className="title-icon">
                <div className="title-name">{overviewTile.activity}</div>
                <img className="site-icon" src={overviewTile.site} alt="site icon"></img>
            </div>
            <div className="data">
                <div className="overview-amount">{overviewTile.amount}</div>
                <div className={"overview-trend " + overviewTile.trend}>
                    <img className="trend-direction-icon" src={overviewTile.arrow} alt="arrow"></img>
                    <div className="trend-amount">{overviewTile.percentage}%</div>
                </div>
            </div>
        </div >
    )
}
export default OverviewTile;

