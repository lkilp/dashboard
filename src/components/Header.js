import './Header.scss';

const Header = (props) => {
    const { isDark, setIsDark } = props;
    const toggle = () => {
        setIsDark(!isDark);
    }
    console.log({ isDark });
    return (
        <div className="Header">
            <div className="dashboard">
                <h1>Social Media Dashboard</h1>
                <div className="total-followers">Total Followers: 22,270</div>
            </div>
            {isDark}
            <div className="mode">
                <div className="dark-mode">Dark Mode</div>
                <label className="switch noselect" >
                    <input type="checkbox" checked={isDark} onChange={toggle} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}
export default Header;

