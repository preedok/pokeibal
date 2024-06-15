import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import backgroundImage from '../../assets/pokemon1.png';

const Breadcrombss = ({ menu, submenu }) => {
    return (
        <div className="px-5 w-[100%] py-1 rounded-sm" style={{ borderBottomLeftRadius: '18px', borderLeft: '5px solid #FFC700', borderRight: '5px solid #FFC700', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="text-[#0F2167]" style={{ fontWeight: '600', fontSize: '25px' }}>{menu}</h1>
                    <div role="presentation" className="my-3">
                        <Breadcrumbs aria-label="breadcrumb">
                            <HomeIcon style={{ cursor: 'pointer', marginTop: '-3px', color: '#0F2167' }} />
                            <Link underline="hover" color="inherit" href="/">
                                {menu}
                            </Link>
                            <Link underline="hover" color="text.primary" href="/" aria-current="page">
                                {submenu}
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrombss;