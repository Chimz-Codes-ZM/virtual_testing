import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [memberList, setMemberList] = useState(null);

  const router = useRouter();

  const login = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/homepage/login");
      // ""
    } else {
      const decodedToken = jwt_decode(token);
      const id = decodedToken.user_id;
      setUser(decodedToken);
      console.log(decodedToken);

      const fetchData = async () => {
        const response = await fetch(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`
        );
        // const response = await fetch(`http://127.0.0.1:8000/village/village_profiles/${id}/`)
  
        const data = await response.json();
        setMemberList(data);
        
      };
  
      fetchData();
      console.log(memberList)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // login()
  }, [])

  useEffect(() => {
   
    console.log(memberList)
  }, [memberList]);



  // if (isLoading) {
  //   return <div>Loading...</div>; 
  // }

  return (
    <AuthContext.Provider value={{ user, login, memberList }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };