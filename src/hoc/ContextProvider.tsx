import React, {createContext, FC, PropsWithChildren, useState} from "react";

const Context = createContext<any>(null);
interface IProps extends PropsWithChildren{

}

const ContextProvider:FC<IProps> = ({children}) => {

    const [trigger, setTrigger] = useState<boolean>(false)
    const changeTrigger = ()=>{
        setTrigger(prev=> !prev)
    }

    const [pageTitle, setPageTitle] = useState('Default Title');

    const handleTitleChange = (title:string) => {
        setPageTitle(title);
    };

    return (
        <div>
            <Context.Provider value={{trigger, changeTrigger, pageTitle, handleTitleChange}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};