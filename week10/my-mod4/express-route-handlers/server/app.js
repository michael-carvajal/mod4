// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  let allArtists = getAllArtists();
  res.status(200)
  res.header("Content-Type", "application/json")
  return res.send(allArtists)

})

app.post('/artists', (req, res) => {
  // const { name } = req.body;
  addArtist(req.body);

  res.status(201)
  res.header("Content-Type", "application/json")
  // let allArtists = getAllArtists();
  return res.send(req.body)
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}

// fetch('/', {
//   method: "POST",
//   header: { "Content-Type": "application/json" },
//   body: {
//     "hello": "World"
//   }
// })
