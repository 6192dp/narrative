import { useLocation, useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let active;
    if (location.pathname.includes('/datasets')) {
        active = 'datasets';
    } else {
        active = 'orders';
    }
    return (
        <div className="hdr_root">
            <div className={active === 'orders' ? "hdr_item active": "hdr_item"} onClick={() => { navigate('/') }}>Buy Orders</div>
            <div className={active === 'datasets' ? "hdr_item active": "hdr_item"} onClick={() => { navigate('/datasets') }}>Datasets</div>
        </div>
    )
}

export default Header;