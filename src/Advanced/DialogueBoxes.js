import React from 'react';
import Swal from 'sweetalert2';

function DialogueBoxes() {
    const handlePrint = () => {
        window.print();
    }


    const handleDelete = () => {
        const result = window.confirm('r u sure want to delete?')
        if(result){
            console.log('deleted');
        }
      };

      const handlePrompt = () => {
        let name;
       name= window.prompt('Enter ur name');
        if(name){
        console.log(name);
        }}

        const SweetAlert = (title, text, icon = 'success') => {
            return Swal.fire({
              title:'do u wat to save',
              text,
              icon,
              showCancelButton: true,
                 confirmButtonText: 'Confirm',
                 cancelButtonText: 'Cancel',
              
            });
          };
      
  return (
    <div>
      <input type = "button" value = "Print" onClick = {() => window.print()} />
      <button onClick={handleDelete}>Delete Item</button>
      <button onClick={handlePrompt}>click</button>
      <button onClick={SweetAlert}>SweetAlert</button>
      <button onClick={handlePrint}>print fun</button>

    </div>
  )
}

export default DialogueBoxes
