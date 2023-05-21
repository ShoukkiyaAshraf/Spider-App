import React, { useState } from 'react';
import { Navigate,Route,Routes,useNavigate  } from 'react-router-dom';
import StartContainer from './containers/StartContainer';
import PlayContainer from './containers/PlayContainer';
import Home from './components/Home/Home';
import './App.css'
import NavHeader from './components/NavHeader/NavHeader';
function App() {

	const history = useNavigate();

	const [text, setText] = useState('');

	const handleSubmit = (value: string) => {
		setText(value.toUpperCase());
		history('/play');
	}
	return (
		
							<Routes>
								<Route path="/start" element={<><NavHeader/><StartContainer
										onSubmit={handleSubmit}
									/></> }/>
								<Route path="/play" element={<><NavHeader/><PlayContainer text={text}></PlayContainer></>} />
								<Route path="*" element={<Home/>}/>
							</Routes>
					
			
	);
}

export default App;
