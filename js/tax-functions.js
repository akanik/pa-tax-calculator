$(document).ready(function() {
	function lowIncomeCheck(){
	  var userIncome = ractive.get('income');
	  var maritalStatus = ractive.get('userMaritalStatus');
	  if(maritalStatus == 'single'){
			if(userIncome<8751){
				//ractive.set('lowIncome', true);
				var incomeLevel = 'single and low income';
			}else{
				ractive.set('lowIncome', false);
				var incomeLevel = 'single and NOT low income';
			}
		}else if(userIncome == 'married'){
			if(userIncome<15251){
				var incomeLevel = 'married and low income';
			}else{
				var incomeLevel = 'married and NOT low income';
			}
		}else if(userIncome == 'children'){
			if(userIncome<34251){
				var incomeLevel = 'married with children and low income';
			}else{
				var incomeLevel = 'married with children and NOT low income';
			}
		}else{
			var nms = 'hmmmmm';
		};
		//console.log(incomeLevel);
		ractive.set('incomeLevel', incomeLevel);
	};
	
	function propTaxCalc(){
	 var homeOwner = ractive.get('homeOwner');
	 var schoolDistrict = ractive.get('school');
	 var userPropValue = ractive.get('userPropValue');
	 if(homeOwner == true && schoolDistrict){
	   var propTax1415 = (userPropValue*schoolDistrict.millage1415)-schoolDistrict.homesteadEx1415;
	   var propTax1617 = (userPropValue*schoolDistrict.millage1617)-schoolDistrict.homesteadEx1617;
	 }else{
	   var propTax1415 = 0;
	   var propTax1617 = 0;
	 };
	 ractive.set('taxes201415.propTax', propTax1415);
	 ractive.set('taxes201617.propTax', propTax1617);
	 
	};
	
	
	function findIncomeTaxBracket1415(){
	var userIncome = ractive.get('income');
	var maritalStatus = ractive.get('userMaritalStatus');
	var incomeTaxRate = 0.0307;
	var percIncomeTax;
	var incomeTax;
	if(maritalStatus && userIncome){
		if(maritalStatus == 'single'){
			if(userIncome >= 0 && userIncome <= 6500){
				percIncomeTax = 0;
			}else if(userIncome >= 6501 && userIncome <= 6750){
				percIncomeTax = 0.1;
			}else if(userIncome >= 6750 && userIncome <= 7000){
				percIncomeTax = 0.2;
			}else if(userIncome >= 7001 && userIncome <= 7250){
				percIncomeTax = 0.3;
			}else if(userIncome >= 7251 && userIncome <= 7500){
				percIncomeTax = 0.4;
			}else if(userIncome >= 7501 && userIncome <= 7750){
				percIncomeTax = 0.5;
			}else if(userIncome >= 7751 && userIncome <= 8000){
				percIncomeTax = 0.6;
			}else if(userIncome >= 8001 && userIncome <= 8250){
				percIncomeTax = 0.7;
			}else if(userIncome >= 8251 && userIncome <= 8500){
				percIncomeTax = 0.8;
			}else if(userIncome >= 8501 && userIncome <= 8750){
				percIncomeTax = 0.9;
			}else{
				percIncomeTax = 1;
			};
		}
		else if(maritalStatus == 'married'){
			if(userIncome >= 0 && userIncome <= 13000){
				percIncomeTax = 0;
			}else if(userIncome >= 13001 && userIncome <= 13250){
				percIncomeTax = 0.1;
			}else if(userIncome >= 13251 && userIncome <= 13500){
				percIncomeTax = 0.2;
			}else if(userIncome >= 13501 && userIncome <= 13750){
				percIncomeTax = 0.3;
			}else if(userIncome >= 13751 && userIncome <= 14000){
				percIncomeTax = 0.4;
			}else if(userIncome >= 14001 && userIncome <= 14250){
				percIncomeTax = 0.5;
			}else if(userIncome >= 14251 && userIncome <= 14500){
				percIncomeTax = 0.6;
			}else if(userIncome >= 14501 && userIncome <= 14750){
				percIncomeTax = 0.7;
			}else if(userIncome >= 14751 && userIncome <= 15000){
				percIncomeTax = 0.8;
			}else if(userIncome >= 15001 && userIncome <= 15250){
				percIncomeTax = 0.9;
			}else{
				percIncomeTax = 1;
			}
		}
		else if(maritalStatus == 'children'){
			if(userIncome >= 0 && userIncome <= 32000){
				percIncomeTax = 0;
			}else if(userIncome >= 32001 && userIncome <= 32250){
				percIncomeTax = 0.1;
			}else if(userIncome >= 32251 && userIncome <= 32500){
				percIncomeTax = 0.2;
			}else if(userIncome >= 32501 && userIncome <= 32750){
				percIncomeTax = 0.3;
			}else if(userIncome >= 32751 && userIncome <= 33000){
				percIncomeTax = 0.4;
			}else if(userIncome >= 33001 && userIncome <= 33250){
				percIncomeTax = 0.5;
			}else if(userIncome >= 33251 && userIncome <= 33500){
				percIncomeTax = 0.6;
			}else if(userIncome >= 33501 && userIncome <= 33750){
				percIncomeTax = 0.7;
			}else if(userIncome >= 33751 && userIncome <= 34000){
				percIncomeTax = 0.8;
			}else if(userIncome >= 34001 && userIncome <= 34250){
				percIncomeTax = 0.9;
			}else{
				percIncomeTax = 1;
			}
		}
		else{
			percIncomeTax = 'error'; //this should never happen
		};
		incomeTax = (userIncome*incomeTaxRate)*percIncomeTax;
	}else{
		incomeTax = 0;
		percIncomeTax = 0;
	};
	ractive.set('taxes201415.percIncomeTax', percIncomeTax);
	ractive.set('taxes201415.incomeTax', incomeTax);
	/*console.log('maritalStatus: ' + maritalStatus);
	console.log('userIncome: ' + userIncome);
	console.log('percIncomeTax: ' + percIncomeTax);
	console.log('incomeTaxRate: ' + incomeTaxRate);
	console.log('incomeTax: ' + incomeTax);
	console.log('rentCredit: ' + rentCredit);*/
	};
	
	function findIncomeTaxBracket1617(){
	var userIncome = ractive.get('income');
	var maritalStatus = ractive.get('userMaritalStatus');
	var incomeTaxRate = 0.037;
	var percIncomeTax;
	var incomeTax;
	if(maritalStatus && userIncome){
		if(maritalStatus == 'single'){
			if(userIncome >= 0 && userIncome <= 8700){percIncomeTax = 0;}
			else if(userIncome >= 8701 && userIncome <= 8950){percIncomeTax = 0.1;}
			else if(userIncome >= 8951 && userIncome <= 9200){percIncomeTax = 0.2;}
			else if(userIncome >= 9201 && userIncome <= 9450){percIncomeTax = 0.3;}
			else if(userIncome >= 9451 && userIncome <= 9700){percIncomeTax = 0.4;}
			else if(userIncome >= 9701 && userIncome <= 9950){percIncomeTax = 0.5;}
			else if(userIncome >= 9951 && userIncome <= 10200){percIncomeTax = 0.6;}
			else if(userIncome >= 10201 && userIncome <= 10450){percIncomeTax = 0.7;}
			else if(userIncome >= 10451 && userIncome <= 10700){percIncomeTax = 0.8;}
			else if(userIncome >= 10701 && userIncome <= 10950){percIncomeTax = 0.9;}
			else{percIncomeTax = 1;}
		}else if(maritalStatus == 'married'){
			if(userIncome >= 0 && userIncome <= 17400){percIncomeTax = 0;}
			else if(userIncome >= 17401 && userIncome <= 17650){percIncomeTax = 0.1;}
			else if(userIncome >= 17651 && userIncome <= 17900){percIncomeTax = 0.2;}
			else if(userIncome >= 17901 && userIncome <= 18150){percIncomeTax = 0.3;}
			else if(userIncome >= 18151 && userIncome <= 18400){percIncomeTax = 0.4;}
			else if(userIncome >= 18401 && userIncome <= 18650){percIncomeTax = 0.5;}
			else if(userIncome >= 18651 && userIncome <= 18900){percIncomeTax = 0.6;}
			else if(userIncome >= 18901 && userIncome <= 19150){percIncomeTax = 0.7;}
			else if(userIncome >= 19151 && userIncome <= 19400){percIncomeTax = 0.8;}
			else if(userIncome >= 19401 && userIncome <= 19650){percIncomeTax = 0.9;}
			else{percIncomeTax = 1;}
		}else if(maritalStatus == 'children'){
			if(userIncome >= 0 && userIncome <= 36400){percIncomeTax = 0;}
			else if(userIncome >= 36401 && userIncome <= 36650){percIncomeTax = 0.1;}
			else if(userIncome >= 36651 && userIncome <= 36900){percIncomeTax = 0.2;}
			else if(userIncome >= 36901 && userIncome <= 37150){percIncomeTax = 0.3;}
			else if(userIncome >= 37151 && userIncome <= 37400){percIncomeTax = 0.4;}
			else if(userIncome >= 37401 && userIncome <= 37650){percIncomeTax = 0.5;}
			else if(userIncome >= 37651 && userIncome <= 37900){percIncomeTax = 0.6;}
			else if(userIncome >= 37901 && userIncome <= 38150){percIncomeTax = 0.7;}
			else if(userIncome >= 38151 && userIncome <= 38400){percIncomeTax = 0.8;}
			else if(userIncome >= 38401 && userIncome <= 38650){percIncomeTax = 0.9;}
			else{percIncomeTax = 1;}
		}else{
			percIncomeTax = 'error'; //this should never happen
		};
		incomeTax = (userIncome*incomeTaxRate)*percIncomeTax;
	}else{
		incomeTax = 0;
		percIncomeTax = 0;
	};
	ractive.set('taxes201617.percIncomeTax', percIncomeTax);
	ractive.set('taxes201617.incomeTax', incomeTax);
	};
	
	
	function findSalesTax1415(){
	 var userIncome = ractive.get('income');
	 var maritalStatus = ractive.get('userMaritalStatus');
	 var salesTax;
	 if(maritalStatus && userIncome){
		 if(maritalStatus == 'single'){
			 if(userIncome >= 0 && userIncome <= 19999){
			 	salesTax = 226.3333333;
			 }else if(userIncome >= 20000 && userIncome <= 29999){
			 	salesTax = 372.1666667;
			 }else if(userIncome >= 30000 && userIncome <= 39999){
			 	salesTax = 452.6666667;
			 }else if(userIncome >= 40000 && userIncome <= 49999){
			 	salesTax = 523.8333333;
			 }else if(userIncome >= 50000 && userIncome <= 59999){
			 	salesTax = 589.1666667;
			 }else if(userIncome >= 60000 && userIncome <= 69999){
			 	salesTax = 649.8333333;
			 }else if(userIncome >= 70000 && userIncome <= 79999){
			 	salesTax = 705.8333333;
			 }else if(userIncome >= 80000 && userIncome <= 89999){
			 	salesTax = 758.3333333;
			 }else if(userIncome >= 90000 && userIncome <= 99999){
			 	salesTax = 808.5;
			 }else if(userIncome >= 100000 && userIncome <= 119999){
			 	salesTax = 877.3333333;
			 }else if(userIncome >= 120000 && userIncome <= 139999){
			 	salesTax = 967.1666667;
			 }else if(userIncome >= 140000 && userIncome <= 159999){
			 	salesTax = 1051.166667;
			 }else if(userIncome >= 160000 && userIncome <= 179999){
			 	salesTax = 1130.5;
			 }else if(userIncome >= 180000 && userIncome <= 199999){
			 	salesTax = 1206.333333;
			 }else if(userIncome >= 200000 && userIncome <= 224999){
			 	salesTax = 1286.833333;
			 }else if(userIncome >= 225000 && userIncome <= 249999){
			 	salesTax = 1373.166667;
			 }else if(userIncome >= 250000 && userIncome <= 274999){
			 	salesTax = 1456;
			 }else if(userIncome >= 275000 && userIncome <= 299999){
			 	salesTax = 1535.333333;
			 }else{
			 	salesTax = 2019.5;
			 }
			}else if(maritalStatus == 'married'){
			 	if(userIncome >= 0 && userIncome <= 19999){
			 		salesTax = 245;
			 	}else if(userIncome >= 20000 && userIncome <= 29999){
			 		salesTax = 403.6666667;
			 	}else if(userIncome >= 30000 && userIncome <= 39999){
			 		salesTax = 491.1666667;
			 	}else if(userIncome >= 40000 && userIncome <= 49999){
			 		salesTax = 569.3333333;
			 	}else if(userIncome >= 50000 && userIncome <= 59999){
			 		salesTax = 639.3333333;
			 	}else if(userIncome >= 60000 && userIncome <= 69999){
			 		salesTax = 705.8333333;
			 	}else if(userIncome >= 70000 && userIncome <= 79999){
			 		salesTax = 766.5;
			 	}else if(userIncome >= 80000 && userIncome <= 89999){
			 		salesTax = 824.8333333;
			 	}else if(userIncome >= 90000 && userIncome <= 99999){
			 		salesTax = 879.6666667;
			 	}else if(userIncome >= 100000 && userIncome <= 119999){
			 		salesTax = 953.1666667;
			 	}else if(userIncome >= 120000 && userIncome <= 139999){
			 		salesTax = 1051.166667;
			 	}else if(userIncome >= 140000 && userIncome <= 159999){
			 		salesTax = 1143.333333;
			 	}else if(userIncome >= 160000 && userIncome <= 179999){
			 		salesTax = 1229.666667;
			 	}else if(userIncome >= 180000 && userIncome <= 199999){
			 		salesTax = 1312.5;
			 	}else if(userIncome >= 200000 && userIncome <= 224999){
			 		salesTax = 1400;
			 	}else if(userIncome >= 225000 && userIncome <= 249999){
			 		salesTax = 1494.5;
			 	}else if(userIncome >= 250000 && userIncome <= 274999){
			 		salesTax = 1584.333333;
			 	}else if(userIncome >= 275000 && userIncome <= 299999){
			 		salesTax = 1670.666667;
			 	}else{
			 		salesTax = 2200.333333;
			 	}
			}else if(maritalStatus == 'children'){
		 		if(userIncome >= 0 && userIncome <= 19999){salesTax = 266;}
				else if(userIncome >= 20000 && userIncome <= 29999){salesTax = 438.6666667;}
				else if(userIncome >= 30000 && userIncome <= 39999){salesTax = 534.3333333;}
				else if(userIncome >= 40000 && userIncome <= 49999){salesTax = 618.3333333;}
				else if(userIncome >= 50000 && userIncome <= 59999){salesTax = 696.5;}
				else if(userIncome >= 60000 && userIncome <= 69999){salesTax = 767.6666667;}
				else if(userIncome >= 70000 && userIncome <= 79999){salesTax = 834.1666667;}
				else if(userIncome >= 80000 && userIncome <= 89999){salesTax = 898.3333333;}
				else if(userIncome >= 90000 && userIncome <= 99999){salesTax = 957.8333333;}
				else if(userIncome >= 100000 && userIncome <= 119999){salesTax = 1038.333333;}
				else if(userIncome >= 120000 && userIncome <= 139999){salesTax = 1145.666667;}
				else if(userIncome >= 140000 && userIncome <= 159999){salesTax = 1246;}
				else if(userIncome >= 160000 && userIncome <= 179999){salesTax = 1341.666667;}
				else if(userIncome >= 180000 && userIncome <= 199999){salesTax = 1431.5;}
				else if(userIncome >= 200000 && userIncome <= 224999){salesTax = 1527.166667;}
				else if(userIncome >= 225000 && userIncome <= 249999){salesTax = 1629.833333;}
				else if(userIncome >= 250000 && userIncome <= 274999){salesTax = 1729;}
				else if(userIncome >= 275000 && userIncome <= 299999){salesTax = 1823.5;}
				else{salesTax = 2402.166667;}
		 }else{
			 salesTax = 999999999999; //this should never happen, because if it's not set, the parent if statment will fail
		 };
	 }else{
		 salesTax = 0;
	 };
	 ractive.set('taxes201415.salesTax', salesTax);
	 //console.log('14-15: ' + salesTax);
	};
	
	function findSalesTax1617(){
	 var userIncome = ractive.get('income');
	 var maritalStatus = ractive.get('userMaritalStatus');
	 var salesTax;
	 if(maritalStatus && userIncome){
		 if(maritalStatus == 'single'){
		 	if(userIncome >= 0 && userIncome <= 19999){salesTax = 245.7333333;}
			else if(userIncome >= 20000 && userIncome <= 29999){salesTax = 404.0666667;}
			else if(userIncome >= 30000 && userIncome <= 39999){salesTax = 491.4666667;}
			else if(userIncome >= 40000 && userIncome <= 49999){salesTax = 568.7333333;}
			else if(userIncome >= 50000 && userIncome <= 59999){salesTax = 639.6666667;}
			else if(userIncome >= 60000 && userIncome <= 69999){salesTax = 705.5333333;}
			else if(userIncome >= 70000 && userIncome <= 79999){salesTax = 766.3333333;}
			else if(userIncome >= 80000 && userIncome <= 89999){salesTax = 823.3333333;}
			else if(userIncome >= 90000 && userIncome <= 99999){salesTax = 877.8;}
			else if(userIncome >= 100000 && userIncome <= 119999){salesTax = 952.5333333;}
			else if(userIncome >= 120000 && userIncome <= 139999){salesTax = 1050.066667;}
			else if(userIncome >= 140000 && userIncome <= 159999){salesTax = 1141.266667;}
			else if(userIncome >= 160000 && userIncome <= 179999){salesTax = 1227.4;}
			else if(userIncome >= 180000 && userIncome <= 199999){salesTax = 1309.733333;}
			else if(userIncome >= 200000 && userIncome <= 224999){salesTax = 1397.133333;}
			else if(userIncome >= 225000 && userIncome <= 249999){salesTax = 1490.866667;}
			else if(userIncome >= 250000 && userIncome <= 274999){salesTax = 1580.8;}
			else if(userIncome >= 275000 && userIncome <= 299999){salesTax = 1666.933333;}
			else{salesTax = 2192.6;}			 
		}else if(maritalStatus == 'married'){
		 	if(userIncome >= 0 && userIncome <= 19999){salesTax = 266;}
			else if(userIncome >= 20000 && userIncome <= 29999){salesTax = 438.2666667;}
			else if(userIncome >= 30000 && userIncome <= 39999){salesTax = 533.2666667;}
			else if(userIncome >= 40000 && userIncome <= 49999){salesTax = 618.1333333;}
			else if(userIncome >= 50000 && userIncome <= 59999){salesTax = 694.1333333;}
			else if(userIncome >= 60000 && userIncome <= 69999){salesTax = 766.3333333;}
			else if(userIncome >= 70000 && userIncome <= 79999){salesTax = 832.2;}
			else if(userIncome >= 80000 && userIncome <= 89999){salesTax = 895.5333333;}
			else if(userIncome >= 90000 && userIncome <= 99999){salesTax = 955.0666667;}
			else if(userIncome >= 100000 && userIncome <= 119999){salesTax = 1034.866667;}
			else if(userIncome >= 120000 && userIncome <= 139999){salesTax = 1141.266667;}
			else if(userIncome >= 140000 && userIncome <= 159999){salesTax = 1241.333333;}
			else if(userIncome >= 160000 && userIncome <= 179999){salesTax = 1335.066667;}
			else if(userIncome >= 180000 && userIncome <= 199999){salesTax = 1425;}
			else if(userIncome >= 200000 && userIncome <= 224999){salesTax = 1520;}
			else if(userIncome >= 225000 && userIncome <= 249999){salesTax = 1622.6;}
			else if(userIncome >= 250000 && userIncome <= 274999){salesTax = 1720.133333;}
			else if(userIncome >= 275000 && userIncome <= 299999){salesTax = 1813.866667;}
			else{salesTax = 2388.933333;}
		 }else if(maritalStatus == 'children'){
	 		if(userIncome >= 0 && userIncome <= 19999){salesTax = 288.8;}
			else if(userIncome >= 20000 && userIncome <= 29999){salesTax = 476.2666667;}
			else if(userIncome >= 30000 && userIncome <= 39999){salesTax = 580.1333333;}
			else if(userIncome >= 40000 && userIncome <= 49999){salesTax = 671.3333333;}
			else if(userIncome >= 50000 && userIncome <= 59999){salesTax = 756.2;}
			else if(userIncome >= 60000 && userIncome <= 69999){salesTax = 833.4666667;}
			else if(userIncome >= 70000 && userIncome <= 79999){salesTax = 905.6666667;}
			else if(userIncome >= 80000 && userIncome <= 89999){salesTax = 975.3333333;}
			else if(userIncome >= 90000 && userIncome <= 99999){salesTax = 1039.933333;}
			else if(userIncome >= 100000 && userIncome <= 119999){salesTax = 1127.333333;}
			else if(userIncome >= 120000 && userIncome <= 139999){salesTax = 1243.866667;}
			else if(userIncome >= 140000 && userIncome <= 159999){salesTax = 1352.8;}
			else if(userIncome >= 160000 && userIncome <= 179999){salesTax = 1456.666667;}
			else if(userIncome >= 180000 && userIncome <= 199999){salesTax = 1554.2;}
			else if(userIncome >= 200000 && userIncome <= 224999){salesTax = 1658.066667;}
			else if(userIncome >= 225000 && userIncome <= 249999){salesTax = 1769.533333;}
			else if(userIncome >= 250000 && userIncome <= 274999){salesTax = 1877.2;}
			else if(userIncome >= 275000 && userIncome <= 299999){salesTax = 1979.8;}
			else{salesTax = 2608.066667;}
		 }else{
			 salesTax = 'error'; //this should never happen, because if it's not set, the parent if statment will fail
		 };
	 }else{
		 salesTax = 0;
	 };
	 ractive.set('taxes201617.salesTax', salesTax);
	 //console.log('16-17: ' + salesTax);
	};
	
	function checkRentCredit(){
	 var userIncome = ractive.get('income');
	 var homeOwner = ractive.get('homeOwner');
	 var rentCredit;
	 if(homeOwner == false && userIncome < 50000){
	   rentCredit = 500;
	 }else{
	   rentCredit = 0;
	 }
	ractive.set('rentCredit1617', rentCredit);
	};
});