import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="hdr_root">
            <div className="hdr_item" onClick={()=>{
                navigate('/')
            }}>Buy Orders</div>
            <div className="hdr_item" onClick={()=>{
                navigate('/datasets')
            }}>Datasets</div>
        </div>
    )
}

export default Header;