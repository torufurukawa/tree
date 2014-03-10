/**
 * A node of tree structure
 * @param {Object} obj Any object as node value.
 * @constructor
 */

function TreeElement(obj) {
    this.value = obj;
    this.parent = null;
    this.children = new Array();

    /**
     * Adds an element at the end of this children.
     * @param {TreeElement} element Instance of TreeElement added as a
     *     children.
     */
    this.append = function(element) {
        element.parent = this;
        this.children.push(element);
    };

    /**
     * Adds an element at the beginning of this children.
     * @param {TreeElement} element Instance of TreeElement added as a
     *     children.
     */
    this.prepend = function(element) {
        element.parent = this;
        this.children.unshift(element);
    }

    /**
     * Removes this element from its parent.
     */
    this.remove = function() {
        // Error if parent does not contain this.
        var index = this.parent.children.indexOf(this);
        if (index==-1) {
            throw "Unexpeced Error: element does not belong to parent";
        }

        // Remove this from parent
        this.parent.children.splice(index, 1);

        // Stop referencing parent
        this.parent = null;
    };

    /**
     * Inserts element after this.
     * @param {TreeElement} element Instance of TreeElement to be added after
     *     this.
     */
    this.insertAfter = function(element) {
        var index = element.parent.children.indexOf(element);
        element.parent.children.splice(index+1, 0, this);
        this.parent = element.parent;
    };

    /**
     * Inserts element before this.
     * @param {TreeElement} element Instance of TreeElement to be added before
     *     this.
     */
    this.insertBefore = function(element) {
        var index = element.parent.children.indexOf(element);
        element.parent.children.splice(index, 0, this);
        this.parent = element.parent;
    };

    /**
     * Returns element stored in previous of this.
     * @return {TreeElement} element Instance of TreeElement.  Returns null if
     *     no element previously stored found.
     */
    this.getPrevSibling = function() {
        var index = this.parent.children.indexOf(this);
        if (index == 0) {
            return null;
        }
        return this.parent.children[index-1];
    };

    /**
     * Returns element stored in next to this.
     * @return {TreeElement} element Instance of TreeElement.  Returns null if
     *     no element stored after.
     */
    this.getNextSibling = function() {
        var index = this.parent.children.indexOf(this);
        if (index == this.parent.children.length - 1) {
            return null;
        }
        return this.parent.children[index+1];
    };
}
