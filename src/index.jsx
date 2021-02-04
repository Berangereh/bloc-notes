import React from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [savedTitle, setSavedTitle] = React.useState('')


    const getTitle = async(input) => {
        setTitle(input);
    };
    
    const getText = async(input) => {
        setText(input);
    };

    const handleSave = () => {
        localStorage.setItem('text', 'title')
        console.log('Cliqué');

        const note = JSON.stringify({title: title, text: text});	
		const parsednote = JSON.parse(note);
		const parsedList = [];
		parsedList.push(parsednote);
		setSavedTitle(parsednote.title);
		console.log(note);
		console.log(parsednote);
		console.log(parsedList);
	};
  
    

    console.log("c'est la copie dans APP du titre:"+title);
	console.log("c'est la copie dans APP du texte:"+text);

    return (
    <main>
        <div className="row">
            <SideBar savedTitle={savedTitle}/>
            <div className="col-10 p-0 bg-dark">
                <h1>Mon bloc-notes</h1>
                <div className="display">
                    <h2>{title}</h2>
                    <NoteDisplay text={text}/>
                </div>
                <div className="inputfield">
                        <MarkdownInput title={getTitle} text={getText} handleSave={handleSave}/>
                </div>
            </div>
       </div>
    </main>
    );

};

  ReactDOM.render(<App />, document.getElementById('root'));
