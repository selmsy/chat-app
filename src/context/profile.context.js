
import React, { createContext, useContext, useState, useEffect, useMemo} from "react";
import { auth, database } from '../misc/firebase';


const ProfileContext = createContext();

export function ProfileProvider({children}) {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      let userRef;
      

      const authUnsub = auth.onAuthStateChanged(authObj => {
        if (authObj) {
         
          userRef = database.ref(`/profiles/${authObj.uid}`);
  
          userRef.on('value', snap => {
            const { name, createdAt, avatar } = snap.val();
  
            const data = {
              name,
              createdAt,
              avatar,
              uid: authObj.uid,
              email: authObj.email,
            };
  
            setProfile(data);
            setIsLoading(false);
          });
       
        }else {
            if(userRef) {
                userRef.off();
            }
            setProfile(null);
            setIsLoading(false);

        }

    }
      )
      return() =>{
        authUnsub();

        if(userRef){
            userRef.off();
        }
      }
    }, []);


    
        useMemo(() => ({isLoading, profile}), []);
   
    

    return (
        <ProfileContext.Provider useMemo = {{isLoading, profile}}>
          {children}
        </ProfileContext.Provider>
      );
    };
    
    export const useProfile = () => useContext(ProfileContext);

    