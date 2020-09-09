(this["webpackJsonpjsonforms-react-seed"]=this["webpackJsonpjsonforms-react-seed"]||[]).push([[0],{160:function(e){e.exports=JSON.parse('{"definitions":{"date_from":{"type":"string","format":"date-time","title":"Date From","description":"The date from when these properties are active. If these properties follow a change, then this Date From should equal the previous Date To. The format of this date should follow ISO 8601 with the \'T\' required. If a timezone is used, it is essential that this timezone is the same as the logger timezone.","examples":["2020-07-28T20:00:00"]},"date_to":{"type":"string","format":"date-time","title":"Date To","description":"The final end date for when these properties are active. If these properties are currently active please use null. If null is not allowed please use 2100-01-01T00:00:00. The format of this date should follow ISO 8601 with the \'T\' required. If a timezone is used, it is essential that this timezone is the same as the logger timezone.","examples":["2020-07-28T20:00:00","2100-01-01T00:00:00"]},"notes":{"type":"string","title":"Notes","description":"Notes relating to these properties.","examples":["I can write anything I want here."]},"update_at":{"type":"string","format":"date-time","title":"Date of Update","description":"The date these properties were last updated.","examples":["2020-07-28T20:49:13"]}},"type":"object","title":"IEA Wind Resource Assessment - Data Model","description":"This Data Model schema is a digital representation of a meteorological mast used for measureing the wind resource of a potential wind farm.","properties":{"author":{"type":"string","title":"Author","description":"The person or system who created this data model representing a specific mast.","examples":["Stephen Holleran","Joe Bloggs"]},"organisation":{"type":"string","title":"Organisation","description":"The organisation the Author is from.","examples":["brightwind","Wind Developer Ltd."]},"date":{"type":"string","format":"date","title":"Date","description":"The date this file was created. Format should be YYYY-MM-DD","examples":["2020-07-28"]},"version":{"type":"string","title":"Version","description":"The version of the IEA WRA Data Model this file is based on. The format of this follows Semantic Versioning with the year and month tagged on after. E.g. 1.1.1-2020.07","examples":["0.1.0-2020.06","1.1.1-2020.07"],"pattern":"^([0-9]{1,2})[.]([0-9]{1,2})[.]([0-9]{1,2})-([0-9]{4})[.]([0-9]{2})$"},"plant_name":{"type":"string","title":"Plant Name","description":"The name of the wind farm this met mast is associated with.","examples":["A Name of Wind Farm"]},"plant_type":{"type":"string","title":"Plant Type","description":"The type of renewable generation plant it is.","enum":["null","onshore_wind","offshore_wind"]},"measurement_location":{"type":"array","title":"Measurement Location","description":"This is the geographic location of the meteorological measurement station i.e. a met mast/tower or remote sensing device.","items":{"type":"object","title":"Measurement Location","properties":{"name":{"type":"string","title":"Name","description":"The name given to the measurement location i.e. to the met mast or remote sensing device.","examples":["AName_MM1"]},"latitude_ddeg":{"type":"number","title":"Latitude [ddeg]","description":"Latitude coordinate in the Geographic Coordinate System using the WGS84 datum in decimal degrees. Latitude lines are parallel to the equator where their position ranges from -90 degrees at the south pole to 90 degrees at the north pole.","examples":[52.973],"minimum":-90,"maximum":90},"longitude_ddeg":{"type":"number","title":"Longitude [ddeg]","description":"Longitude coordinate in the Geographic Coordinate System using the WGS84 datum in decimal degrees. Longitude lines are perpendicular to the equator where their position ranges from 0\xb0 at Greenwich Mean Time increasing to +180\xb0 as you move eastward and decreasing to \u2212180\xb0 as you move westward.","examples":[-9.431],"minimum":-180,"maximum":180},"measurement_station_type_id":{"title":"Measurement Station Type","description":"The type of measurement station. This must be one of either mast, lidar or sodar.","type":"string","enum":["mast","lidar","sodar"]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"mast_properties":{"type":"object","title":"Mast Properties","description":"The properties of the installed met mast/tower.","properties":{"mast_geometry_id":{"type":"string","title":"Mast Geometry","description":"The type of mast geometry e.g. lattice or pole.","enum":["lattice_triangle","lattice_square","pole"]},"mast_oem":{"type":"string","title":"Mast OEM","description":"The manufacturer of the met mast.","examples":["NRG Systems","Galetech Energy Services"]},"mast_serial_number":{"type":"string","title":"Mast Serial Number","description":"The manufacturer\'s serial number of the mast.","examples":["XHD12345","MM01234"]},"mast_model":{"type":"string","title":"Mast Model","description":"The model of the mast.","examples":["80m XHD TallTower","SLX80m"]},"mast_height_m":{"type":"number","title":"Mast Height [m]","description":"The height of the mast itself, not necessarily the top anemometer height.","examples":[81.3]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"mast_section_geometry":{"type":"array","title":"Mast Section Geometry","description":"This properties of each mast section.","items":{"type":"object","title":"Mast Section Geometry","properties":{"uuid":{"type":"string","format":"uuid","title":"UUID","description":"The unique id to relate this mast section to the mounting arrangement.","examples":["bf078172-bbb6-48fe-ac1f-c6605dffb1b5"]},"pole_diameter_mm":{"type":"number","title":"Pole Diameter [mm]","description":"If a pole mast is used, it\'s diameter in mm.","examples":[203]},"lattice_face_width_at_bottom_mm":{"type":"number","title":"Lattice Face Width at Bottom [mm]","description":"The lattice section bottom face width.","examples":[500]},"lattice_face_width_at_top_mm":{"type":"number","title":"Lattice Face Width at Top [mm]","description":"The lattice section top face width.","examples":[500]},"lattice_leg_width_mm":{"type":"number","title":"Lattice Leg Width [mm]","description":"The lattice leg diameter for a round leg or width for a square cross section leg.","examples":[50]},"lattice_leg_is_round_cross_section":{"type":"boolean","title":"Lattice Leg is Round Cross Section","description":"The lattice leg is a round or square cross section.","examples":["true - for a round leg cross section","false - for a square leg cross section"]},"lattice_bracing_member_diameter_mm":{"type":"number","title":"Lattice Bracing Member Diameter [mm]","description":"The lattice diagonal bracing member diameter.","examples":[12]},"lattice_number_of_diagonal_bracing_members":{"type":"integer","title":"Lattice Number of Bracing Members","description":"The number of lattice diagonal bracing members.","examples":[1,2]},"lattice_bracing_member_height_mm":{"type":"number","title":"Lattice Bracing Member Height [mm]","description":"The height of the lattice diagonal bracing members.","examples":[900]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"additionalProperties":false,"required":[]},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false},"logger_main_config":{"type":"array","title":"Logger Configuration","description":"This represents how the logger\'s main settings are configured. For example, it\'s sampling rate or averaging period.","items":{"type":"object","title":"Logger Configuration","properties":{"logger_oem_id":{"type":"string","title":"Logger OEM","description":"This is the logger manufacturer id as defined by the IEA Wind Resource Assessment Data Model Schema.","enum":["NRG Systems","Ammonit","Campbell Scientific","Vaisala","SecondWind","Kintech","Wilmers","Unidata","WindLogger","Other"]},"logger_model_name":{"type":"string","title":"Logger Model Name","description":"This is the logger model name. This is usually stated in the data files from the logger in either the header or footer.","examples":["Symphonie Plus3","CR1000","Meteo-40M"]},"logger_serial_number":{"type":"string","title":"Logger Serial Number","description":"The logger serial number. This is sometimes different from the logger id."},"logger_id":{"type":"string","title":"Logger Id","description":"This is the logger id. It may be set by the logger programmer and may be different from the logger serial number.","examples":["4321","D123456"]},"logger_name":{"type":"string","title":"Logger Name","description":"The logger (or mast name) name assigned to the logger in the logger programme.","examples":["AName_MM1"]},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"encryption_pin_or_key":{"type":"string","title":"Encryption PIN or Key","description":"The encryption PIN or key used to encrypt the data.","examples":["9876","KkocDuSCk3v5tw4kRveHGQvuD1kYVVbU"]},"enclosure_lock_details":{"type":"string","title":"Enclosure Lock Details","description":"Details about how to open the logger enclosure box when on site.","examples":["Combination lock PIN 54321.","Physical key has id 54321."]},"data_transfer_details":{"type":"string","title":"Data Transfer Details","description":"Details about how the data is transferred from the logger to the recipient.","examples":["Logger emails to data@developername.com","Retrieve data via LoggerNet."]},"offset_from_utc_hrs":{"type":"number","title":"Offset From UTC [hr]","description":"The number of hours that the logger clock is offset from UTC.","examples":["-5 for Eastern Standard Time","1 for Central European Time","5.5 for India Standard Time"]},"sampling_rate_sec":{"type":"integer","title":"Sampling Rate [s]","description":"The number of seconds the logger samples data.","examples":["1 s","2 s"]},"averaging_period_minutes":{"type":"integer","title":"Averaging Period [min]","description":"The number of minutes the logger aggregates the data over.","examples":["10 min","60 min"]},"timestamp_is_end_of_period":{"type":"boolean","title":"Timestamp at End of Period","description":"Does the timestamp represent the end of the averaging period.","examples":["true for timestamp to represent the end of the averaging period.","false for timestamp to represent the start of the averaging period."]},"clock_is_auto_synced":{"type":"boolean","title":"Clock is Auto-Synced","description":"Is the logger clock auto-synced with an internet time server to keep accurate time.","examples":["true for logger clock to be auto-synced.","false for logger clock not to be auto-synced."]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"additionalProperties":false,"required":["date_from","date_to","logger_model_name","logger_oem_id","logger_serial_number"]},"additionalItems":false,"uniqueItems":true},"measurement_point":{"type":"array","title":"Measurement Point","description":"This represents a point in space where a measurement takes place.","items":{"type":"object","title":"Measurement Point","properties":{"name":{"type":"string","title":"Name","description":"The name the measurement point is commonly referred to. This is the name that is used to refer to the data in an analysis and reporting."},"measurement_type_id":{"type":"string","title":"Measurement Type","description":"The type of measurement been made.","enum":["wind_speed","wind_direction","temperature","air_pressure","relative_humidity","voltage","current","vertical_wind_speed","wind_speed_turbulence","precipitation","ice_detection","solar_irradiation","soiling_loss_index","fog","compass_direction","gps_coordinates","illuminance","status","counter","other"]},"height_m":{"type":"number","title":"Height [m]","description":"The height (in meters) above ground level the measurement is taking place. If you do not yet know the height please use null. If null is not allowed please use -999."},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"sensor_config":{"type":"array","title":"Sensor Configuration","description":"The sensor configuration that is programmed into the logging device.","items":{"type":"object","title":"Sensor Configuration","properties":{"slope":{"type":"number","title":"Logger Slope","description":"The slope programmed into the logger for this measurement. This is typically expected for anemometers and wind vanes, but not necessarily required for other sensor types."},"offset":{"type":"number","title":"Logger Offset","description":"The offset programmed into the logger. This is typically expected for anemometers and wind vanes, but not necessarily required for other sensor types."},"sensitivity":{"type":"number","title":"Logger Sensitivity","description":"The sensitivity programmed into the logger. Usually used for pyranometers. It is the same as 1/slope with zero for offset."},"measurement_units_id":{"type":"string","title":"Measurement Units","description":"The measurement units of the values the sensor records.","enum":["m/s","deg","deg_C","deg_F","K","%","mbar","hPa","V","mA","ohm","Hz","mm","W/m^2","m/s^2","lux","-"]},"height_m":{"type":"number","title":"Logger Height [m]","description":"The height above ground level in meters at which the sensor is deployed as programmed into the logger."},"serial_number":{"type":"string","title":"Serial Number","description":"The serial number of the sensor programmed into the logger."},"connection_channel":{"type":"string","title":"Connection Channel","description":"The connection channel the sensor is wired into on the logger."},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"column_name":{"type":"array","title":"Column Names","description":"The group of column names in the data file which relates to this sensor configuration.","items":{"type":"object","title":"Column Names","properties":{"column_name":{"type":"string","title":"Column Name","description":"The column name in the data file which relates to this sensor configuration."},"statistic_type_id":{"type":"string","title":"Statistic Type","description":"The statistic, aggregation function or signal e.g. \'average\' or \'maximum\' that this column records.","enum":["avg","sd","max","min","count","sum","median","mode","range","gust","text"]},"is_ignored":{"type":"boolean","title":"Is Ignored","description":"If you want to ignore this column name, set to True.","default":false},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"additionalProperties":false,"required":["column_name","statistic_type_id"]},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false,"required":["column_name","date_from","date_to"]},"additionalItems":false,"uniqueItems":true},"sensor":{"type":"array","title":"Sensor","description":"This represents information about the sensor taking the measurements.","items":{"type":"object","title":"Sensor","properties":{"oem":{"type":"string","title":"Sensor OEM","description":"The measurement sensor manufacturer.","examples":["Vector","NRG Systems","Thies"]},"model":{"type":"string","title":"Sensor Model","description":"The measurement sensor model.","examples":["#200P","First Class Advanced","A100L2"]},"serial_number":{"type":"string","title":"Serial Number","description":"The serial number of the sensor installed."},"sensor_type_id":{"type":"string","title":"Sensor Type","description":"The measurement sensor type e.g. anemometer.","enum":["anemometer","wind_vane","thermometer","barometer","hygrometer","voltmeter","ammeter","pyranometer","pyrheliometer","2d_ultrasonic","3d_ultrasonic","propeller_anemometer","gill_propeller","rain_gauge","ice_detection_sensor","fog_sensor","gps","illuminance_sensor","compass","other"]},"instrument_height_mm":{"type":"number","title":"Instrument Height [mm]","description":"This is the physical height dimension, in mm, of the sensor to aid IEC mounting calculations. It is not the height above ground level at which it is deployed."},"is_heated":{"type":"boolean","title":"Is Heated","description":"Is the sensor heated to reduce the effect of icing. This is usually relevant for wind speed and wind vane sensors.","examples":["true, if the sensor is heated.","false, if the sensor is not heated."]},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"calibration":{"type":"array","title":"Calibration","description":"The sensor calibration details. This is typically expected for anemometers, but not necessarily required for other sensor types.","items":{"type":"object","title":"Calibration","properties":{"slope":{"type":"number","title":"Calibration Slope","description":"The slope programmed into the logger."},"offset":{"type":"number","title":"Calibration Offset","description":"The offset programmed into the logger."},"sensitivity":{"type":"number","title":"Calibration Sensitivity","description":"The sensitivity programmed into the logger."},"report_file_name":{"type":"string","title":"Report File Name","description":"The file name of the calibration report.","examples":["A12345_calibration.pdf"]},"report_link":{"type":"string","title":"Report Link","description":"A link to the calibration report.","examples":["https://www.dropbox.com/bw/7dzu7xzb/AAN-BNsa?dl=0"]},"date_of_calibration":{"type":"string","format":"date","title":"Date of Calibration","description":"The date the sensor calibration took place.","examples":["2019-12-06"]},"calibration_organisation":{"type":"string","title":"Calibration Organisation","description":"The organisation who performed the calibration.","examples":["Deutsche WindGuard","Ammonit Wind Tunnel GmbH"]},"place_of_calibration":{"type":"string","title":"Place of Calibration","description":"The place or wind tunnel where the calibration took place.","examples":["Windtunnel of Deutsche WindGuard WindTunnel Services GmbH, Varel","AWT Bargeshagen"]},"uncertainty_k_factor":{"type":"number","title":"Uncertainty K Factor","description":"The uncertainty k factor stated in the calibration report.","examples":[2]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"calibration_uncertainty":{"type":"array","title":"Calibration Uncertainty","description":"The sensor calibration details.","items":{"type":"object","title":"Calibration Uncertainty","properties":{"reference_bin":{"type":"number","title":"Reference Bin","description":"The reference bin for the calibration.","examples":[5.93]},"reference_unit":{"type":"string","title":"Reference Unit","description":"The reference bin and uncertainty units.","examples":["m/s"]},"uncertainty":{"type":"number","title":"Reference Unit","description":"The uncertainty associated with this reference bin.","examples":[0.1]}},"additionalProperties":false},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false,"required":["date_from","date_to"]},"additionalItems":false,"uniqueItems":true},"mounting_arrangement":{"type":"array","title":"Mounting Arrangement","description":"This describes how the sensor is mounted onto the met mast.","items":{"type":"object","title":"Mounting Arrangement","additionalProperties":false,"properties":{"mast_section_geometry_uuid":{"type":["null","string"],"format":"uuid","title":"Mast Section Geometry UUID","description":"The uuid to link this Measurement Point\'s mounting arrangement to the Mast Section Geometry."},"mounting_type_id":{"type":"string","title":"Mounting Type","description":"The mounting type the sensor is mounted onto the mast e.g. an anemometer top mounted above the mast or a pair of anemometers mounted in the goal post configuration.","enum":["side","goal_post","top"]},"boom_orientation_deg":{"type":"number","title":"Boom Orientation [deg]","description":"The boom orientation of the horizontal boom the sensor is mounted on.","minimum":0,"maximum":360},"vane_dead_band_orientation_deg":{"type":"number","title":"Vane Dead Band Orientation [deg]","description":"The wind vane dead band orientation.","minimum":0,"maximum":360},"orientation_reference_id":{"type":"string","title":"Orientation Reference","description":"The orientation reference the booms and vane dead band are measured against. E.g. magnetic north.","enum":["magnetic_north","true_north","grid_north"]},"tilt_angle_deg":{"type":"number","title":"Tilt Angle [deg]","description":"The tilt angle of either the vertical upstand the sensor is mounted on.","minimum":-90,"maximum":90},"boom_oem":{"type":"string","title":"Boom OEM","description":"The boom OEM."},"boom_model":{"type":"string","title":"Boom Model","description":"The boom model."},"upstand_height_mm":{"type":"number","title":"Upstand Height [mm]","description":"The height, measured in millimeters, of the upstand.","minimum":0},"upstand_diameter_mm":{"type":"number","title":"Upstand Diameter [mm]","description":"The diameter, measured in millimeters, of the upstand.","minimum":0},"boom_diameter_mm":{"type":"number","title":"Boom Diameter [mm]","description":"The diameter, measured in millimeters, of the boom.","minimum":0},"boom_length_mm":{"type":"number","title":"Boom Length [mm]","description":"The length, measured in millimeters, of the boom.","minimum":0},"distance_from_mast_to_sensor_mm":{"type":"number","title":"Distance Mast to Sensor [mm]","description":"The distance, measured in millimeters, of edge of the mast to the center of the sensor.","minimum":0},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"required":["date_from","date_to"]},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false,"required":["name","measurement_type_id","height_m","sensor_config"]},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false,"required":["name","latitude_ddeg","longitude_ddeg","measurement_station_type_id","measurement_point"]},"additionalItems":false,"uniqueItems":true}},"additionalProperties":false,"required":["author","organisation","date","version","measurement_location"]}')},161:function(e){e.exports=JSON.parse('{"type":"Control","scope":"#"}')},434:function(e,t,i){e.exports=i(753)},439:function(e,t,i){},602:function(e,t){},610:function(e,t){},612:function(e,t){},689:function(e,t,i){},753:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),o=i(14),a=i.n(o),s=(i(439),i(403)),m=i(180),l=i(11),d=i(230),c=i(836),p=i(228),u=i(401),h=i.n(u),g=i(400),f=i.n(g),_=(i(689),i(160)),y=i(161),b=i(111),T=i(229),v=i(397),w=i(398),x=i(404),S=i(399),M=i(405),I=function(e){function t(e){var i;return Object(v.a)(this,t),(i=Object(x.a)(this,Object(S.a)(t).call(this,e))).state={rating:e.value,hoverAt:null},i}return Object(M.a)(t,e),Object(w.a)(t,[{key:"handleMouseOver",value:function(e){this.setState({hoverAt:e+1})}},{key:"handleMouseOut",value:function(){this.setState({hoverAt:null})}},{key:"handleClick",value:function(e){this.setState({rating:e+1})}},{key:"render",value:function(){var e=this,t=this.props.onClick;return n.createElement("div",{id:"#/properties/rating"},n.createElement("p",null,"Rating:"),[0,1,2,3,4].map((function(i){var r=null!=e.state.hoverAt?e.state.hoverAt:e.state.rating;return n.createElement("span",{onMouseOver:function(){return e.handleMouseOver(i)},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){e.handleClick(i),t({value:i+1})},key:"".concat(e.props.id,"_").concat(i)},i<r?"\u2605":"\u2606")})))}}]),t}(n.Component);I.getDerivedStateFromProps=function(e,t){return t.rating!==e.value?{rating:e.value,hoverAt:t.hoverAt}:null};var C=Object(l.withJsonFormsControlProps)((function(e){var t=e.data,i=e.handleChange,r=e.path;return n.createElement(I,{value:t,onClick:function(e){return i(r,Number(e.value))}})})),O=i(13),k=Object(O.rankWith)(3,Object(O.scopeEndsWith)("rating")),j=f()({container:{padding:"1em"},title:{textAlign:"center",padding:"0.25em"},dataContent:{display:"flex",justifyContent:"center",borderRadius:"0.25em",backgroundColor:"#eeeeee"},demoform:{margin:"auto",padding:"1rem"}}),E={},N=h()(j)((function(e){var t=e.store,i=e.classes,o=Object(n.useState)(0),a=Object(m.a)(o,1)[0],u=Object(n.useState)(""),h=Object(m.a)(u,2),g=h[0],f=h[1],v=Object(n.useState)(E),w=Object(m.a)(v,2),x=w[0],S=w[1];return Object(n.useEffect)((function(){var e=function(){var e=function(e){return e?JSON.stringify(Object(T.get)(e.getState(),["jsonforms","core","data"]),null,2):""}(t);f(e)};t.subscribe(e),e()}),[t]),Object(n.useEffect)((function(){f(JSON.stringify(x,null,2))}),[x]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Form Prototype"))),r.a.createElement(c.a,{container:!0,justify:"center",spacing:1,className:i.container},r.a.createElement(c.a,{item:!0,sm:12},0===a&&r.a.createElement("div",{className:i.demoform},r.a.createElement(l.JsonForms,{schema:_,uischema:y,data:x,renderers:[].concat(Object(s.a)(b.materialRenderers),[{tester:k,renderer:C}]),cells:b.materialCells,onChange:function(e){e.errors;var t=e.data;return S(t)}})),1===a&&r.a.createElement("div",{className:i.demoform,id:"form"},t?r.a.createElement(d.Provider,{store:t},r.a.createElement(l.JsonFormsReduxContext,null,r.a.createElement(l.JsonFormsDispatch,null))):null)),r.a.createElement(c.a,{item:!0,sm:12},r.a.createElement(p.a,{variant:"h3",className:i.title},"Rendered JSON"),r.a.createElement("div",{className:i.dataContent},r.a.createElement("pre",{id:"boundData"},g)))))})),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=i(77),P=i(402),q={jsonforms:{cells:b.materialCells,renderers:b.materialRenderers}},$=Object(L.combineReducers)({jsonforms:Object(O.jsonformsReducer)()}),R=Object(L.createStore)($,q,Object(P.devToolsEnhancer)({}));R.dispatch(O.Actions.init({name:"Send email to Adrian",description:"Confirm if you have passed the subject\nHereby ...",done:!0,recurrence:"Daily",rating:3},_,y)),R.dispatch(O.Actions.registerRenderer(k,C)),a.a.render(r.a.createElement(N,{store:R}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/digital_wra_data_standard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/digital_wra_data_standard","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[434,1,2]]]);
//# sourceMappingURL=main.fbac192c.chunk.js.map