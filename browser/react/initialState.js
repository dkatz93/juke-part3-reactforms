const initialState = {
  albums: [],
  artists: [],
  selectedAlbum: {},
  selectedArtist: {},
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0,
  playlists: [],
  selectedPlaylist: {
  	name: '',
  	songs: []
  }
};

export default initialState;
