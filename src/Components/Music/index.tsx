import style from './index.module.css';
import { Context, InterfaceMusic } from '../../context/context';
import { useState, useRef, useContext, useEffect } from 'react';

interface props {
  track: InterfaceMusic;
}

export function Music({ track }: props) {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Erro no context 'Context' 'src/components/Music' na linha 12.");
  }
  const { setCurrentTrack, musics } = context;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsPlaying(false);
    audioPlayerRef.current?.load();
  }, [musics]);

  const playPause = () => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) {
      return;
    }
    if (isPlaying) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioPlayer.src = track.preview;
      const allAudioPlayers = document.querySelectorAll('audio');
      allAudioPlayers.forEach((player) => {
        if (player !== audioPlayer) {
          player.pause();
          player.currentTime = 0;
        }
      });
      audioPlayer.play();
      setIsPlaying(true);
    }
    setCurrentTrack(track);
  }

  const handlePause = () => {
    setIsPlaying(false);
  }

  return (
    <main className={isPlaying ? style.main_active : style.main} onClick={playPause}>
      <img className={style.img} src={track.album.cover_big} alt="" />
      <div className={style.div_info_music}>
        <span className={isPlaying ? style.nome_active : style.nome}>{track.title}</span>
        <span className={style.nomebanda}>{track.artist.name}</span>
      </div>
      <div className={style.playPause} onClick={playPause}>
        {isPlaying ? (
          <box-icon name='pause' color='#ffffff'></box-icon>
        ) : (
          <box-icon name='play' color='#ffffff'></box-icon>
        )}
        {isPlaying ? (
          <box-icon name='deezer' type='logo' color='#5cda58'></box-icon>
        ) : (
          <box-icon name='deezer' type='logo' color='#ffffff'></box-icon>
        )}
      </div>
      <audio ref={audioPlayerRef} onPause={handlePause}></audio>
    </main>
  )
}