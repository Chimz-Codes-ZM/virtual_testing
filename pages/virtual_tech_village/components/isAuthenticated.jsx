import React from 'react'
import { useContext, useEffect } from "react";
import{AuthProvider} from "../../../contexts/AuthContext"
import { useRouter } from "next/router";

function isAuthenticated(WrappedComponent) {
    return function WithAuthenticationWrapper(props) {
        const context = useContext(AuthProvider);
        const token = localStorage.getItem('token');
        const userInfo = context && token;
        const router = useRouter();

        useEffect(() => {
          if (!userInfo) {
            router.push("/login");
          }
        }, [userInfo, router]);

        return userInfo ? <WrappedComponent {...props} /> : null;
      };
}

export default isAuthenticated;