import { createContext, useState } from "react";

export interface InterfaceMusic {
    title: string;
    preview: string;
    artist: {
        name: string;
    };
    album: {
        title: string;
        cover_big: string;
    }
}

interface contextInterface {
    musics: InterfaceMusic[] | undefined;
    setMusics: React.Dispatch<React.SetStateAction<InterfaceMusic[] | undefined>>;
    currentTrack: InterfaceMusic | undefined;
    setCurrentTrack: React.Dispatch<React.SetStateAction<InterfaceMusic | undefined>>;
}

export const Context = createContext<contextInterface | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [musics, setMusics] = useState<InterfaceMusic[] | undefined>(undefined);
    const [currentTrack, setCurrentTrack] = useState<InterfaceMusic | undefined>(undefined);

    return (
        <Context.Provider value={{
            musics,
            setMusics,
            currentTrack,
            setCurrentTrack
        }}>
            {children}
        </Context.Provider>
    )
}