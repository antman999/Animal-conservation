import React, { Component } from 'react';
import {
	withGoogleMap,
	withScriptjs,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import Geocode from 'react-geocode';
import Paw from './Paw_Print.svg'
import { formatRelative } from 'date-fns';

export class Sighting extends Component {
	state = {
		center: {},
		selectedMarker: null,
		setSelectedMarker: null,
		markers: [],
		setNew: [],
	};

	componentDidMount() {
		this.setCenter();
	}

	setCenter = () => {
		Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
		Geocode.setLanguage('en');
		Geocode.fromAddress(`${this.props.statePicked}`).then(
			response => {
				this.setState({
					center: {
						lat: response.results[0].geometry.location.lat,
						lng: response.results[0].geometry.location.lng,
					},
				});
				// const { lat, lng } = response.results[0].geometry.location;
				// console.log(lat, lng);
				console.log(this.state.center);
			},
			error => {
				console.error(error);
			}
		);
	};

	setP = e => {
		this.setState({
			selectedMarker: e,
		});
	};

	closeMarker = () => {
		this.setState({ selectedMarker: null });
	};

	newMarker = e => {
			this.setState(prevState => ({
				markers: {
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
				},
			}));
			fetch('http://localhost:3000/api/v1/sightings', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					animal_id: parseInt(this.props.aid),
					user_id: this.props.userid.id,
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
				}),
			})
				.then(resp => resp.json())
				.then(resp => {
					if (resp.errors) {
						console.log(resp);
					} else {
						console.log(resp);
					}
				});
	
	};
	// ()=>this.marker()
		
	render() {
		const center = { lat: this.state.center.lat, lng: this.state.center.lng };
		!this.state.center.lat && this.setCenter();
console.log(this.props.sightings);
			const mark = (
				<Marker
					key={`${this.state.markers.lat}-${this.state.markers.lng}`}
					position={{
						lat: parseFloat(this.state.markers.lat),
						lng: parseFloat(this.state.markers.lng),
					}}
					icon={{
						url: Paw,
						origin: new window.google.maps.Point(0, 0),
						anchor: new window.google.maps.Point(15, 15),
						scaledSize: new window.google.maps.Size(30, 30),
					}}
					onClick={() => {
						this.setP(this.state.markers);
					}}
				/>
			);
		
		const info = this.state.selectedMarker ? (
			<InfoWindow
				onCloseClick={() => {
					this.closeMarker();
				}}
				position={{
					lat: parseFloat(this.state.selectedMarker.lat),
					lng: parseFloat(this.state.selectedMarker.lng),
				}}>
				<div>
					<h4>
						{this.props.name} spotted at{' '}
						{this.state.selectedMarker.created_at}
					</h4>
					{/* <p>Spotted {formatRelative(selected.time, new Date())}</p> */}
				</div>
			</InfoWindow>
		) : null;

		return (
			<div>
				<div style={{ width: '100vw', height: '50vh' }}>
					<GoogleMap
						defaultZoom={8}
						center={this.state.center}
						options={{
							disableDefaultUI: true,
							zoomControl: true
						}}
						onClick={e => {
							this.newMarker(e);
						}}>
						{this.props.sightings.map(s => (
							<Marker
								key={s.id}
								position={{
									lat: parseFloat(s.lat),
									lng: parseFloat(s.lng),
								}}
								icon={{
									url: Paw,
									origin: new window.google.maps.Point(0, 0),
									anchor: new window.google.maps.Point(15, 15),
									scaledSize: new window.google.maps.Size(30, 30),
								}}
								onClick={() => {
									this.setP(s);
								}}
							/>
						))}
						{info}
						{mark}
					</GoogleMap>
				</div>
			</div>
		);
	}
}
export default withScriptjs(withGoogleMap(Sighting));

