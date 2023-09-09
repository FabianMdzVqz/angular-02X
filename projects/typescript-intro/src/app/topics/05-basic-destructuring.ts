interface AudioPlayer{
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details

}

interface Details{
  author: string;
  year: number
}


const audioPlayer: AudioPlayer ={
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}


const song = "New song"

const {song:anotherSong, songDuration: duration, details : det } = audioPlayer
det.author

// console.log('Song', anotherSong);
// console.log('Duration', duration);
// console.log('Author', det.author);



const dbz: string[] =['Gocu', 'Vegueta', 'Trunks'];

const[, , , trunks='No existe'] = dbz

console.error('Personaje 3:', trunks);
