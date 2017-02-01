var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.lengthValue = 0;
		ucc.final = 0;
		ucc.Meter_x = 0;
		

		//cities to populate the drop-down box
		
ucc.metric_length_units = 
		[
			{
				unit_name: "Centimeters",
				unit_code: "cm",
				type: "metric"
			},
			{
				unit_name: "Kilometers",
				unit_code: "km",
				type: "metric"
			},
			{
				unit_name: "Meters",
				unit_code: "m",
				type: "metric"
			},
			{
				unit_name: "Milimeters",
				unit_code: "mm",
				type: "metric"
			}	
		];		
ucc.standard_length_units = 
		[
			{
				unit_name: "Inches",
				unit_code: "in",
				type: "standard",
				conversion: 39.3700787
			},
			{
				unit_name: "Feet",
				unit_code: "ft",
				type: "standard",
				conversion: 3.28084
			},
			{
				unit_name: "Miles",
				unit_code: "mi",
				type: "standard",
				conversion: .00062137119223733396961743418436332		
			},
			{
				unit_name: "Yards",
				unit_code: "y",
				type: "standard",
				conversion: 1.09361				
			}	
		];	
		
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		
		ucc.selected_metric_length_unit = ucc.metric_length_units[0];
		ucc.selected_standard_length_unit = ucc.standard_length_units[0];

		
		//behaviors
		ucc.showSelectedUnit = function(){
			console.log(ucc.selected_metric_length_unit.unit_name);
		}
		ucc.calculateUnit = function () {
			if (ucc.selected_metric_length_unit.unit_code = "cm") {
				ucc.Meter_x = (ucc.lengthValue*100)
			};

			if (ucc.selected_metric_length_unit.unit_code = "km") {
				ucc.Meter_x = (ucc.lengthValue/1000)
			};	

			if (ucc.selected_metric_length_unit.unit_code = "mm") {
				ucc.Meter_x = (ucc.lengthValue*1000)
			};			
			/*if (ucc.selected_metric_length_unit.unit_code = "m") {
				ucc.Meter_x = (ucc.lengthValue)
			};	*/
			console.log(ucc.Meter_x);
			console.log(ucc.selected_standard_length_unit.conversion);
			ucc.final = ucc.Meter_x*ucc.selected_standard_length_unit.conversion;
			console.log(ucc.final);
		}
		
		
			
	}
]);
