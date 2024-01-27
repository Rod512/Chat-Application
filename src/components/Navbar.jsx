import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Doze Chat</span>
            <div className="user">
                <img src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/422300073_3718684515122133_1630877350580550443_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=czPtke32Zc4AX9Mw8aR&_nc_ht=scontent.fdac5-2.fna&oh=00_AfDiq5gLI8LcMrt4W3onRcx9sn4psD7_ojo4X_r2dMZ4Wg&oe=65BA7F48" alt="" />
                <span>Rudro</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default Navbar;