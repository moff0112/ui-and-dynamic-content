/* Access new-item button.

//Access unordered list.

Declare variable list-item.

Start function removeItem (use event object to find out which item is clicked).

    Remove clicked item from unordered list.

End function removeItem.



Start function addItem.

    Create list item and store output in a variable.

    Use innerHTML on created list item and assign it with user input
    from prompt("Enter a new item for to-do list:").


    If list item has a content:

        Append list item to unordered list.

        Add event listener to list item to listen for click event - event

        handler will be removeItem function.

    End if.

End function addItem.


Add event listener to button to listen for click event - event handler will be

addItem function.
*/

var itemPicker, u_list, li_item, gItem;

itemPicker = document.querySelector("input");

u_list = document.querySelector("ul");


function removeItem(ev) {
  //ev.preventDefault();
    // var li_item = document.querySelector("li");
    u_list.removeChild(ev.target);
}


function addItem() {
    var gItem = prompt("Add a grocery item to your list");
    if (gItem != null) {
      li_item = document.createElement("li");
      li_item.innerHTML = gItem;
      u_list.appendChild(li_item);
      li_item.addEventListener("click", removeItem, false);
    }

}
itemPicker.addEventListener("click", addItem, false);
