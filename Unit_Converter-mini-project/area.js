var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


option_from = inputType.value;
option_to   = resultType.value;


function myResult(){

	option_from = inputType.value;
	option_to = resultType.value;


	if(option_from === "square_feet" && option_to==="square_inches")
	{
		result.value = Number(input.value) * 144;
	}
	else if(option_from === "square_feet" && option_to==="square_meter")
	{
		result.value = Number(input.value) * 0.09290304;

	}
	else if(option_from === "square_feet" && option_to==="square_feet")
	{
		result.value = input.value
	}



	if(option_from === "square_inches" && option_to==="square_feet")
	{
		result.value = Number(input.value) * 0.0069444444;
	}
	else if(option_from === "square_inches" && option_to==="square_meter")
	{
		result.value = Number(input.value) * 0.00064516;
	}
	else if(option_from === "square_inches" && option_to==="square_inches")
	{
		result.value = input.value
	}


	if(option_from === "square_meter" && option_to==="square_feet")
	{
		result.value = Number(input.value) * 10.7639104167;
	}
	else if(option_from === "square_meter" && option_to==="square_inches")
	{
		result.value = Number(input.value) * 1550.0031000062;
	}
	else if(option_from === "square_meter" && option_to==="square_meter")
	{
		result.value = input.value
	}
}
