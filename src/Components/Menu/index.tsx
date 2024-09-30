import { useContext } from 'react';
import style from './index.module.css';
import { Context } from '../../context/context';

export function Menu() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("Erro no context 'Context' 'src/components/Menu' na linha 8.");
    }
    const { currentTrack } = context;

    return (
        <main className={style.main}>
            <span className={style.musicName}>{currentTrack ? currentTrack.title : "..."}</span>
            <div className={style.div_musica}>
                {currentTrack && (
                    <img
                        className={style.img}
                        src={currentTrack.album.cover_big}
                        alt={currentTrack.title}
                    />
                )}
            </div>
            <span className={style.bandaName}>{currentTrack ? currentTrack.artist.name : "..."}</span>
        </main>
    )
}