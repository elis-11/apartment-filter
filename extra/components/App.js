import './App.css';
import Otmazka from './Otmazka';
import { checkLS, showMessage } from './Cookies';
if (!checkLS()) console.log(showMessage('Problem'));

function App() {
	const univer = {
		frontend: 7,
		backend: 8,
		API: 7
	};
	univer['Hooks'] = 9;
	univer.german = 5;
	console.log(univer);

	const univerResult = [ 5, 8, 9 ];
	univerResult[0] = 10;
	console.log(univerResult);

	console.log(Otmazka('instruction'));
	console.log(Otmazka('test'));

	// document.querySelector('.out-1').onClick = () => {
	// 	console.log('show click');
	// };
	// document.querySelector('.out-1').onClick = () => console.log('show click');

	const a1 = () => 4 * 15 / 5;
	console.log(a1());

	const b = (c) => c * 7;
	console.log(b(3));

	const j = (g, m) => g * 6 * m;
	console.log(j(4, 2));

	//  -----spred---rasshirenie & rasprostranenie
	const normWork = [ 'html', 'css', 'js' ];
	const work = [ ...normWork, 'node', 'mongo' ];
	console.log(work);

	const worker = {
		name: 'Alex',
		job: 'developer'
	};
	const Nestle = {
		...worker,
		position: 'fullStack',
		language: 'En'
	};
	console.log(Nestle);

	//  ---rest---ostatok
	const num=(...args)=>args
	console.log(num(1,2));
	console.log(num(4,6,77,23));

	//  -----destruction-----
	const arr=[11,22,33,44,55,66,77]
	const[d1, ,,,d2]=arr
	console.log(d1,d2)

	const {name, job}=Nestle
	console.log(name,job);

	//  ---map, filter---
	



	return (
		<div className="App">
			<header className="App-header">
				<div>Hi</div>
				<div className="out-1">1</div>
			</header>
		</div>
	);
}

export default App;
