import React, { Component } from 'react';
import {
	withGoogleMap,
	withScriptjs,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import Geocode from 'react-geocode';
export class Sighting extends Component {

  state = {
    lat: 0,
    lng: 0,
    center:{}
  }

  // componentDidMount() {
  //     this.setCenter()
  // }

  // setCenter = () => {
  //   Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
	// 	Geocode.setLanguage('en');
	// 	Geocode.fromAddress(`${this.props.statePicked}`).then(
	// 		response => {
	// 			this.setState({
	// 				center: {
	// 					lat: response.results[0].geometry.location.lat,
	// 					lng: response.results[0].geometry.location.lng,
	// 				},
	// 			});
	// 			// const { lat, lng } = response.results[0].geometry.location;
	// 			// console.log(lat, lng);
	// 			console.log(this.state.center);
	// 		},
	// 		error => {
	// 			console.error(error);
	// 		}
	// 	);
  // }

  render() {
console.log(this.state.center)
    // const center = { lat: this.state.center.lat, lng: this.state.center.lng }
    // !this.state.center.lat && this.setCenter()
    return (
			<div>
        <div style={{ width: '100vw', height: '50vh' }}>
          {/* <GoogleMap
            defaultZoom={8}
            center={this.state.center}
       
					/> */}
					
				</div>
			</div>
		);
  }
}
export default withScriptjs(withGoogleMap(Sighting));


// function Map() {

//   return (
    
//     <div>
//       <GoogleMap defaultZoom={10} defaultCenter={{ lat: this.state.lat, lng:this.state.lng}}/> 
//     </div>
//   )
// }




// import {
// 	GoogleMap,
// 	useLoadScript,
// 	Marker,
// 	InfoWindow,
// } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
// 	getGeocode,
// 	getLatLng,
// } from 'use-places-autocomplete';
// import {
// 	Combobox,
// 	ComboboxInput,
// 	ComboboxPopover,
// 	ComboboxList,
// 	ComboboxOption,
// } from '@reach/combobox';
// import '@reach/combobox/styles.css';
// const google = window.google;


// function Sighting(props){
//   const [markers, setMarkers] = React.useState([])
//   const [selected, setSelected] = React.useState(null)
//   const { ready, value, suggestions: { status, data }, setValue, clearSuggestion } = usePlacesAutocomplete
  
//   const onMapClick = React.useCallback(e => {
// 		setMarkers(current => [
// 			...current,
// 			{
// 				lat: e.latLng.lat(),
// 				lng: e.latLng.lng(),
// 				time: new Date(),
// 			},
// 		]);
//   }, []);
  
//   const mapRef = React.useRef()
//   const onMapLoad = React.useCallback((map)=>{mapRef.current = map},[])

//   const libraries = ['places'];
//   const mapContainerStyle = {
//     width: '100vw',
//     height:'100vh'
//   }
//   const center = {
//     lat: 43.653225,
//     lng : -79.383186
//   }
//   const options = {
//     disableDefaultUI: true,
//     zoomControl: true
    
//   }
// 	const { isLoaded, loadError } = useLoadScript({
// 		googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
// 		libraries,
// 	});
// 	if (loadError) return 'ERROR loading map';
// 	if (!isLoaded) return 'loading...';
//   return <div>
//     <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}
//       options={options} onClick={onMapClick} onLoad={onMapLoad}>
//       {markers.map(marker => <Marker key={marker.time.toISOString()}
//     position={{lat:marker.lat, lng:marker.lng}}
//      onClick={()=>{setSelected(marker)}}
//       />)}
//       {selected ? (<InfoWindow position={{lat:selected.lat,lng:selected.lng}} onCloseClick={()=>setSelected(null)}>
//         <div>
//           <h2>{props.name} spotted</h2>
//           <p>spotted at </p>
//         </div>
//       </InfoWindow>): null}
//     </GoogleMap>
//     </div>
  
// }

// function search() {
//   const { ready, value, suggestions: { status, data }, setValue, clearSuggestion } = usePlacesAutocomplete
  
//   return(<Combobox onSelect={(a) => {console.log(a) }}>
  
//     <ComboboxInput value={value} onChange={(e) => { setValue(e.target.value) }}
//       disabled={!ready}
//       placeHolder='Enter where you spotted the Animal'
//     />
// </Combobox>
// )
// }

// export default Sighting
