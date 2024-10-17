import style from './index.module.css';
import { useContext } from 'react';
import { Search } from '../../Components/Search';
import { Music } from '../../Components/Music';
import { Menu } from '../../Components/Menu';
import { Context } from '../../context/context';
import { NavBar } from '../../Components/NavBar';
import { Loading } from '../../Components/Loading';

export function Home() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("Erro no context 'Context' 'src/pages/Home' na linha 12.");
    }
    const { musics } = context;

    return (
        <main className={style.main}>
            <NavBar />
            <div className={style.div_center}>
                <div className={style.blocoPrincipal}>
                    <Search />
                    <div className={style.resultado}>Resultados da pesquisa :</div>
                    <div className={style.musicasBloco}>
                        {musics ? musics.map((track, index) => (
                            <Music key={index} track={track} />
                        )) : <Loading />}
                    </div>
                </div>
                <Menu />
            </div>
        </main>
    )
}