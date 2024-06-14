import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [decodedToken, setDecodedToken] = useState<any | null>(null);

  useEffect(() => {
    const TOKEN = localStorage.getItem('accessToken');
    if (TOKEN) {
      try {
        const decoded = jwtDecode(TOKEN);
        console.log('decoded token',decoded);
        setDecodedToken(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        // Handle invalid token or other decoding errors
      }
    }
  }, []);

  if (!decodedToken) {
    // Render some loading indicator or redirect to login
    return <div>something went wrong</div>;
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  // Render the protected content if the token is decoded successfully
  return <div>{children}</div>;
};

export default ProtectedRoute;
