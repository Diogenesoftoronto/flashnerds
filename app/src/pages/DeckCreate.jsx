import React from 'react';

function DeckCreate () {
  return (
    <div>
      <h1>Create New Deck</h1>
      <div>
        <label for="deckTitle">Enter Title</label>
        <input type="text" name="deckTitle" id="deckTitel" />
      </div>
      <div>
        <input type="file" className="app_uploadInput" />
        <button className="app_uploadButton">Upload</button>
      </div>
    </div>
  )
}

export default DeckCreate