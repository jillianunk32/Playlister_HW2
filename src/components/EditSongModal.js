import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { currentList, editSongCallback, hideEditSongModalCallback } = this.props;
        let title = "";
        if(currentList!=null){
            title = currentList.songs;
        }
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Title <input type="text" id="edit-song-title-text" />
                                Artist <input type="text" id="edit-song-artist-text"/>
                                YouTube Id <input type="text" id="edit-song-youtubeId-text"/>
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