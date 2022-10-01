import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works to edit a song.
 *  It will be managed by the transaction stack.
 * 
 * @author Jillian Unkenholz
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSong, initIndex) {
        super();
        this.app = initApp;
        this.song = initSong;
        this.index = initIndex;
    }

    doTransaction() {
        this.app.editSong();
    }
    
    undoTransaction() {
        this.app.state.currentList.songs[this.index]=this.song;
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}