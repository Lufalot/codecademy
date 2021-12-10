let accessToken = "";
const client_id = "f3876441f6794ec986329b1984168d3d";
const redirect_uri = "http://localhost:3000/";

export const Spotify = {
  // generateRandomString(length) {
  //   var text = "";
  //   var possible =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (var i = 0; i < length; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // },

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/access_token=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      //window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      // const state = this.generateRandomString(16);

      //localStorage.setItem("stateKey", state);
      const scope = "playlist-modify-public";

      let url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      // url += "&state=" + encodeURIComponent(state);
      window.location = url;
      // accessToken = window.location.href.match(/access_token=([^&]*)/);
      // const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      // window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      //window.history.pushState("Access Token", null, "/");
      //https://accounts.spotify.com/authorize?response_type=token&client_id=f3876441f6794ec986329b1984168d3d&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    const result = await fetch(
      "https://api.spotify.com/v1/search?type=track&q=" + term,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const data = await result.json();
    if (!data.tracks) return [];
    const tracks = data.tracks.items;
    return tracks.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(playlistName, trackURI) {
    if (!playlistName || !trackURI.length) return;
    const accessToken = Spotify.getAccessToken();
    //let userAccessToken = accessToken;
    let header = { Authorization: `Bearer ${accessToken}` };
    const resultID = await fetch("https://api.spotify.com/v1/me", {
      headers: header,
    });
    const dataID = await resultID.json();
    let userID = dataID.id;

    const resultList = await fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      {
        headers: header,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      }
    );
    const dataList = await resultList.json();
    let playlistID = dataList.id;

    const resultTrack = await fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
      {
        headers: header,
        method: "POST",
        body: JSON.stringify({ uris: trackURI }),
      }
    );
    const dataTrack = await resultTrack.json();
    playlistID = dataTrack.id;
  },
};
