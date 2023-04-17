import React from 'react'

const FormPage = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        alert("Submitted")
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type='text' name='name' placeholder='first name'/>
            <input type='text' name='lastname' placeholder='last name'/>
            <input type='url' name='url' placeholder='url'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormPage