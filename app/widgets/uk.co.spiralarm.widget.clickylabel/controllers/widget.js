/**
 * This is our clickyLabel widget
 * 
 * It is an example widget that has some JSDuck attributes added to show how it can be auto documented.
 * 
 * @class uk.co.spiralarm.widget.clickylabel
 * 
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

	$.clickyLabel.text = String.format('%s  - Click Me!', new Date().toLocaleDateString());

})(arguments[0] || {});


/**
 * Handler for the label click Event
 * 
 * @param {Object} e
 * @private
 */
function clicked(e){
	
	/**
	 * @event widgetclick
	 * Event fired when the label in the widget is clicked
	 */	
	$.trigger('widgetclick');
	
}
