const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			People: [],
			Planets: [],
			Vehicles: []
		},
		actions: {
			getAllPeople:() => {
				const Store = getStore()
					.then(response => response.json())
					.then(data => {
						setStore({ People: data.results });
					});

			}
		}
	}
	};

export default getState;
