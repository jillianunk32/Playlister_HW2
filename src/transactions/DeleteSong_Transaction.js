import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * This class represents a transaction that works to remove a song.
 *  It will be managed by the transaction stack.
 * 
 * @author Jillian Unkenholz
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
        this.index = this.app.state.currentList.songs.indexOf(this.app.state.songMarked);
        this.song = this.app.state.songMarked;
    }

    doTransaction() {
        this.index = this.app.state.currentList.songs.indexOf(this.app.state.songMarked);
        this.app.deleteSong();
    }
    
    undoTransaction() {
        this.app.state.currentList.songs.splice(this.index, 0, this.song);
        this.app.setStateWithUpdatedList(this.app.state.currentList);
    }
}