const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: [],
			Planets: [],
			Vehicles: []
		},
		actions: {
			getAllPeople:() => {

				const store = getStore()
				.then(response => { response.json()})
				.then(data => {setStore ({people:data.result})})
			},
			getAllPlanets:() => {
				const store = getStore()
				.then(response => { response.json()})
				.then(data => {setStore ({planets:data.result})})
			},
			getAllVehicles:() => {
				const store = getStore()
				.then(response => { response.json()})
				.then(data => {setStore ({vehicles:data.result})})
			}
		}
	}
	};

export default getState;
