import { useState } from 'react';
import './App.scss';

export const App = () => {
	
	const [ name, setName ] = useState('');
	
	const [ phone, setPhone ] = useState('');
	
	const [ payload, setPayload ] = useState({});


	const handleName = (e) => {
		let _name = e.target.value;
		setName(_name);
	};

	const handlePhone = (e) => {
		let _phone = e.target.value;
		setPhone(_phone);
	};

	// const clearPayload = () => {
	// 	setPayload((prev) => ({}));
	// };
	// clearPayload();


	const handleButton = (e) => {
		e.preventDefault();
		setPayload((prev) => ({
			...prev,
			name,
			phone
		}));
	};

	return (
		<div className="App">
			<form>
				<fieldset>
					<legend>Order Form</legend>
					<div className="row">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" value={name} onChange={handleName} />
					</div>
					<div className="note">required, maximum 10 characters</div>

					<div className="row">
						<label htmlFor="phone">Phone</label>
						<input type="text" id="phone" value={phone} onChange={handlePhone} />
					</div>
					<div className="note">e.g. 555-333-2222</div>

					<div className="buttonRow">
						<button onClick={handleButton}>Register</button>
					</div>
				</fieldset>
			</form>
			{Object.keys(payload).length !== 0 && <pre>payload: {JSON.stringify(payload, null, 2)}</pre>}
		</div>
	);
};
export default App;
