import style from './index.module.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context';
import { useDebounce } from '../../hooks/useDebounce';

export function Search() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("Erro no context 'Context' 'src/components/Search' na linha 13.");
    }
    const { setMusics } = context;
    const [music, setMusic] = useState<string>("");
    const debounceValue = useDebounce(music, 300);

    useEffect(() => {
        if (music === "") {
            async function CallApi() {
                const response = await fetch(`https://track-music-server.vercel.app/top-music`, {
                    method: 'GET',
                });
                const result = await response.json();
                setMusics(result);
            }
            CallApi();
        }
    }, [music]);

    useEffect(() => {
        if (debounceValue) {
            async function CallApi() {
                const response = await fetch(`https://track-music-server.vercel.app/music/${debounceValue}`, {
                    method: 'GET',
                });
                const result = await response.json();
                setMusics(result);
            }
            CallApi();
        }
    }, [debounceValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMusic(e.target.value);
    }

    return (
        <main className={style.main}>
            <input onChange={handleChange} className={style.pesquisa} type="text" placeholder='Pesquise uma musica...' />
            <button className={style.lupa}><box-icon name='search' color='#fffefe' ></box-icon></button>
        </main>
    )
}