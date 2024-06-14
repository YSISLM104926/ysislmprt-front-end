import { IconCategory } from '@tabler/icons-react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [decodedToken, setDecodedToken] = useState<any | null>(null);
    const router = useRouter();
    useEffect(() => {
        const TOKEN = localStorage.getItem('accessToken');
        if (TOKEN) {
            try {
                const decoded = jwtDecode(TOKEN);
                console.log('decoded token', decoded);
                setDecodedToken(decoded);
            } catch (error) {
                console.error('Invalid token:', error);
                // Handle invalid token or other decoding errors
            }
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        router.push('/');
    }
    return (
        <div>
            <div className="navbar dark:bg-black border border-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <label htmlFor="my-drawer-2" className=" text-white drawer-button lg:hidden"><IconCategory/></label>
                        </div>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Dashboard Panel</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">{decodedToken?.username}</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar