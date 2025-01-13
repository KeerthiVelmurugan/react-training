import React from 'react'
import Swal from 'sweetalert2';

function SweetAlert() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: true,
        confirmButtonText:'ok',
        showCancelButton:true,
        timer: 1500
      });
  return (
    <div>
      <button onClick={SweetAlert}>click</button>
    </div>
  )
}

export default SweetAlert
