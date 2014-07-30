/**
 * Test Controller
 * 
 * This is the project index controller.
 * 
 * @class myapp.index
 */


/**
 * Controller constructor
 * 
 * credit for this to Fokke Zandbergen (http://www.tidev.io/2014/06/18/documenting-a-new-widget/)
 * 
 * @method init
 * @param {Object} args Arguments passed to the controller
 * @private
 */
(function init(args){

	$.appWin.open();

})(arguments[0] || {});

/**
 * Handler for the exposed widget click
 * 
 * @param {Object} e
 * @private
 */
function clicked(e){
	alert('You Clicked My Widget');
}
