import React from 'react';


const MarkdownInput =({title, text, handleSave}) => {

  return(
      <>
        <input type="text" placeholder="Titre de la note" onChange = {(e) => title(e.target.value)} />
        <textarea placeholder="Contenu de la note" onChange={(e) => text(e.target.value)} />
       <div>
        <button className="btn btn-dark" onClick={handleSave}>Sauvegarder</button>
        </div>
      </>
      )
};


export default MarkdownInput;



