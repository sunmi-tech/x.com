'use client'
import { Children, createContext } from "react";
import { useState } from "react";

export const TabContext = createContext({
    tab: "rec",
    setTab:(value: 'rec' | 'fol') => {
    }
})

type Props = {childredn : ReactNode};

export default function TabProvider({children}: Props){
   const [tab, setTab] = useState('rec');

   return (
    <TabContext.Provider value={{tab, setTab}}>
        {children}
    </TabContext.Provider>
   )
}