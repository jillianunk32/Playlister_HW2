import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {song, editSongCallback, hideEditSongModalCallback, editSongValuesCallback} = this.props;
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
                                <span class="modal-prompt"id="title-prompt">Title</span> 
                                    <input class="modal-textfield"name="title"type="text" id="edit-song-modal-title-textfield" defaultValue={title} onChange={editSongValuesCallback}/>
                                <span class="modal-prompt"id="artist-prompt">Artist</span> 
                                    <input class="modal-textfield" name="artist"type="text" id="edit-song-modal-artist-textfield" defaultValue={artist} onChange={editSongValuesCallback}/>
                                <span class="modal-prompt" id="you-tube-id-prompt">YouTubeId</span>
                                    <input class="modal-textfield" name="youTubeId"type="text" id="edit-song-modal-youTubeId-textfield" defaultValue={youtube} onChange={editSongValuesCallback}/> 
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