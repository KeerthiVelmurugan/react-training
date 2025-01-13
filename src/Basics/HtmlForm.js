import React from 'react'

function HtmlForm() {
  return (
    <div>
        <form>
        <div>
        <label for="user">User Name</label>
        <input type="text" name="user" id="user" placeholder="enter ur name" value="Aadhi" required />
        </div>
        <br />
        <div>
        <label>Password</label>
        <input type="password" name="password" required />
        </div>
        <input type="checkbox" />
        <button type="submit">submit</button>
        <button type="reset">Reset</button>
    </form>
      
    </div>
  )
}

export default HtmlForm
