import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {song, editSongCallback, hideEditSongModalCallback,
         editSongTitleCallback, editSongArtistCallback, editSongYoutubeCallback} = this.props;
        let title = "";
        let artist = "";
        let youtube = "";
        if(song!=null){
            title = song.title;
            artist = song.artist;
            youtube = song.youTubeId;
        }
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                <span>Title</span> <input type="text" id="edit-song-title-text" defaultValue={title} onChange={editSongTitleCallback}/>
                                <span>Artist</span> <input type="text" id="edit-song-artist-text" defaultValue={artist} onChange={editSongArtistCallback}/>
                                <span>YouTubeId</span> <input type="text" id="edit-song-youtubeId-text" defaultValue={youtube} onChange={editSongYoutubeCallback}/>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}