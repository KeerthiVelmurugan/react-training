/*Mouse Events:

onClick: Occurs when the element is clicked.
onDoubleClick: Occurs when the element is double-clicked.
onMouseDown: Occurs when the mouse button is pressed down over the element.
onMouseUp: Occurs when the mouse button is released over the element.
onMouseEnter: Occurs when the mouse pointer enters the element.
onMouseLeave: Occurs when the mouse pointer leaves the element.
onMouseMove: Occurs when the mouse pointer moves over the element.
onContextMenu: Occurs when the right mouse button is clicked over the element, typically to open a context menu.
Keyboard Events:

onKeyDown: Occurs when a key is pressed down.
onKeyPress: Occurs when a key is pressed.
onKeyUp: Occurs when a key is released.
Form Events:

onChange: Occurs when the value of an input element changes (text input, checkbox, radio button, select, etc.).
onSubmit: Occurs when a form is submitted.
onFocus: Occurs when an element receives focus.
onBlur: Occurs when an element loses focus.
Touch Events:

onTouchStart: Occurs when a touch point is placed on the touch surface.
onTouchMove: Occurs when a touch point is moved along the touch surface.
onTouchEnd: Occurs when a touch point is removed from the touch surface.
Clipboard Events:

onCopy: Occurs when the content of an element is copied.
onCut: Occurs when the content of an element is cut.
onPaste: Occurs when the content is pasted into an element.
Window Events:

onLoad: Occurs when the component or element is loaded.
onResize: Occurs when the browser window is resized.
onScroll: Occurs when the user scrolls the page. */

// onMouseOver: This event is triggered when the mouse pointer enters the area of an element. 
// It's commonly used to trigger actions when the mouse hovers over an element, such as displaying additional information or highlighting the element.

// onMouseOut: This event is triggered when the mouse pointer leaves the area of an element. 
// It's commonly used to trigger actions when the mouse stops hovering over an element, such as hiding tooltips or reverting styles.

// While you can use onMouseOver and onMouseOut events to track when the mouse enters and leaves the area of draggable elements, 
// they are not typically used to initiate and finalize drag-and-drop operations like onMouseDown and onMouseUp.

// onMouseDown and onMouseUp events are more suitable for handling the start and end of drag operations because they directly correspond 
// to the pressing and releasing of the mouse button, which is a more intuitive interaction for users when dragging elements.

// onMouseEnter: This event is triggered when the mouse pointer enters the area of an element. 
// It's similar to onMouseOver, but it only triggers once when the mouse enters the element, even if it moves within the element's boundaries. 
// It's commonly used to trigger actions when the mouse enters a specific area, such as showing tooltips or changing styles.

// onMouseLeave: This event is triggered when the mouse pointer leaves the area of an element. 
// It's similar to onMouseOut, but it only triggers once when the mouse leaves the element, even if it moves within the parent element's boundaries.
//  It's commonly used to trigger actions when the mouse exits a specific area, such as hiding tooltips or reverting styles.

// While you can use onMouseEnter and onMouseLeave events to track when the mouse enters and leaves the area of draggable elements, 
// they are not typically used to initiate and finalize drag-and-drop operations like onMouseDown and onMouseUp.

// onMouseDown and onMouseUp events are more suitable for handling the start and end of drag operations because they directly 
// correspond to the pressing and releasing of the mouse button, which is a more intuitive interaction for users when dragging elements.

// However, you might use onMouseEnter and onMouseLeave events in combination with onMouseDown and onMouseUp events to provide additional 
// visual feedback or behavior when the mouse enters or leaves draggable elements during a drag operation.








import React from 'react'

function TypesOfEvents() {
  return (
    <div>
      
    </div>
  )
}

export default TypesOfEvents
