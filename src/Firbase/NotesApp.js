import React, { useEffect, useState } from 'react'
import { db,auth } from './firebaseConfig'
import { ref, push, set, onValue, remove, update } from 'firebase/database'
import { time } from '@tensorflow/tfjs';

function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState()


    const addNotes = () => {
        const dataRef = push(ref(db,'notes/'))
        set(dataRef,{
            note: note,
            time: new Date().toLocaleString(),
        }).then((res) => {
            console.log(res);
            
            setNote('')
        })
    }

    useEffect(() => {
        const notesRef = ref(db, 'notes/');
        onValue(notesRef, (snapshot) => {
            const data = snapshot.val();
           console.log(data);
           
            setNotes(data || []);
            console.log(notes);
            
        });
    },[note]);

    const removeNote= async(id) => {
        console.log(id);
        
      const res = await  remove(ref(db,'notes/' + id))
        console.log(res);
        

    }

    const editNote=(id)=> {
        setEdit(true)
        setEditId(id)

    }

    const updateNote =() => {
        update(ref(db,'notes/'+editId),{
            note:note,
            time:new Date().toLocaleString()
        })
    }
  return (
    <div>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter your notes' />
      <button onClick={addNotes}>Add Notes</button>
    <div>
        {Object.keys(notes).map((id) => (
            <div key={id}>
                <li>{notes[id].note}:{notes[id].time}

                </li>
                <button onClick={()=>removeNote(id)}>remove</button>
                <button onClick={() => editNote(id)}>update</button>
            </div>
        ))}
        </div>
        {
            edit &&
            <div>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter your notes' />
      <button onClick={updateNote}>Add Notes</button>
</div>
        }

      </div>
  )
}

export default NotesApp
