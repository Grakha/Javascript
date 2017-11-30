// function makeShout() {
//  var phrase = "Hello"

//  var shout = function() {
//      alert(phrase)
//  }

//  phrase = "Ready!";

//  return shout
// }

// shout = makeShout()
// shout()
// (function(){
//  'use strict';

//  document.addEventListener("DOMContentLoaded", function(event) {
//      getSum();
//  });

//  function getSum() {
		
//      var nums = document.getElementsByClassName("num");
//      var result = document.getElementById("result");
//      var btn = document.getElementById("btn");

//      btn.onclick = function() {
//          var numbers = 0;
//          for(var i = 0; i < nums.length; i++) {
				
//              var sum = 0;
//                  sum = parseInt(nums[i].value);
//                  numbers += sum;

//              console.log(numbers);
//          }
//          result.innerHTML = numbers;
//      };

//  }

// })();


// (function(){
//  'use strict';

//  document.addEventListener("DOMContentLoaded", function(event) {
//      getSum();
//  });

//  function getSum() {
		
//      var sumInt = document.getElementById("num");
//      var result = document.getElementById("result");

//      sumInt.onblur = function() {
//          var sum = 0;
//          var numbers = sumInt.value;
//          for(var i = 1; i <= numbers; i++) {
//              sum = sum + i;
//          }
//          result.innerHTML = sum;
//      };

//      sumInt.onblur = function() {
//          var sum = 0;
//          var n = parseInt(sumInt.value);
//              sum = (1 + n) * (n - 1 + 1) / 2;
//              result.innerHTML = sum;
//      };

//      sumInt.onblur = function() {
//          var sum = 0;
//          var n = parseInt(sumInt.value);
//              sum = n * (n + 1) / 2;
//              result.innerHTML = sum;
//      };

//  }

// })();

(function(){
	'use strict';

	document.addEventListener("DOMContentLoaded", function(event) {
		getSum();
		fullNameUser();
		upperCaseName();
		countLetter();
		longestWord();
		reverceDate();
		birthdayYear();
		compareWord();
		findNumber();
		addOderedList();
		sortInt();
		hrefTostring();
		// reLocation();
		squareNumber();
		changeSizeImg();
		resizeImages();
		changeSrcImg();
		inputChangeValue();
		formElementsSum();
		formsElemSum();
		showCountry();
		getCountry();
		searchCountry();
		selectedIndex();
		divideSelect();
		checkedIntInput();
		selectionText();
		findMaxNumber();
		countIndexTitle();
		findSquareNum();
		possibleStr();
		outputStr();
		enterStr();
		countDown();
		changeColor();
		changeBgColor();
		changeHref();
		progNum();
		addNumArray();
		userFunc();
		sumEachNum();
		rangeYears();
		doUpperLetter();
		recorsiveArray();
		recSumDigits();
		rangeDayBirthday();
		provideEvent();
		provideLink();
		provideHref();
		provideInput();
		provideInputAlert();
		provideParagSqrt();
		provideInputBlur();
		changeColorDiv();
		createList();
		cloneInput();
		addDigitEachInput();
		hideParentBtn();
		knowClientTop();
		knowClientLeft();
		knowOffsetWidth();
		knowOffsetHeight();
		knowGetComputedStyle();
		knowPageOffset();
		knowScrollTo();
		knowScrollBy();
		knowScrollIntoView();
		checkScrollPage();
		changeSizeBlock();
		knowIfScrollPage();
		coordsMouseMove();
		moveSquareClient();
		moveSquareClientCenter();
		findKeyCode();
		paintArea();
		paintAreaKey();
		enterValIn();
		delegEven();
		delegTableWork();
		eachTimerParag();
		createCountBtn();
		createColor();
		fibonnachiStyle();
		saveInputHistory();
		gettingRandomNumber();
		workObjString();
		countUserSalary();
		checkDiffAdress();
		getStudentStudy();
		createFromObj();
		workGroupElements();
		eachObjects();
		createRactangle();
	});

	function getSum() {
		
		var sumInt = document.getElementById("no");
		var result = document.getElementById("result");

		sumInt.onblur = function() {
			var i;
			var sum = 0;
			var arr = sumInt.value;
			var splitArr = arr.split(', ');
				for (i = 0; i < splitArr.length; i++) {
					sum += parseInt(splitArr[i]);
				}
				result.innerHTML = sum / i;
		};

	}

	function fullNameUser() {

		var fullName = document.getElementById("fullName");
		var fewInputs = document.getElementsByClassName("name");

		fullName.onblur = function() {
			var arrFullName = fullName.value;
			var splitName = arrFullName.split(' ');
			console.log(splitName);

			// for(var i = 0; i < splitName.length; i++) {
			//  // console.log(splitName[i]);
			//  // fewInputs.value = splitName[i];
				
			//  for(var j = i; j < fewInputs.length; j++) {
			//      console.log(fewInputs[j].value = splitName[i]);
			//  }
			// }
			for(var i = 0; i < fewInputs.length; i++) {
				// console.log(splitName[i]);
				// fewInputs.value = splitName[i];
				
				for(var j = i; j < splitName.length; j++) {
					// console.log(fewInputs[j].value = splitName[i]);
					fewInputs[j].value = splitName[i];
				}
			}
			
		};

	}

	function upperCaseName() {
		var caseName = document.getElementById("caseName");

		caseName.onblur = function() {
			var arrFullName = [];
			var valCaseName = caseName.value.split(" ");
			for(var i = 0; i < valCaseName.length; i++) {
				var letter = valCaseName[i];
					arrFullName.push(letter.charAt(0).toUpperCase() + letter.slice(1));
			}
			caseName.value = arrFullName.join(' ');
		};
	}

	function countLetter() {
		var letterInput = document.getElementById("countLetter");
		var countEnter = document.getElementsByClassName("countEnter")[0];

		letterInput.onblur = function() {
			var getValInput = letterInput.value.split(" ");
			var quantity = getValInput.length;
			console.log(quantity);
			countEnter.innerHTML = quantity;
		};
	}

	function longestWord() {
		var stringInput = document.getElementById("longestWord");
		var caseCountLetter = document.getElementsByClassName("countLongestWord")[0];

		stringInput.onblur = function() {
			var wordEqual = 0;
			var eachWord = stringInput.value.split(" ");
			for(var i = 0; i < eachWord.length; i++) {
				var lengthLongestWord = eachWord[i].length;
				if (wordEqual < lengthLongestWord) {
					wordEqual = lengthLongestWord;
					console.log('Hi');
				}
			}
			caseCountLetter.innerHTML = wordEqual;
			console.log(wordEqual);
		};
	}

	function reverceDate() {
		var replaceDate = document.getElementById("dateChange");

		// replaceDate.onblur = function() {
		//  var valueDateInput = replaceDate.value.split('.').reverse().join('-');
		//  replaceDate.value = valueDateInput;
		// };

		replaceDate.onblur = function() {
			var arrChange = [];
			var valueDateInput = replaceDate.value.split('.');
			for(var i = valueDateInput.length - 1; i >= 0; i--) {
				var subValDate = valueDateInput[i];
					arrChange.push(subValDate);
			}
			replaceDate.value = arrChange.join('-');
		};
	}

	function birthdayYear() {
		var getBirthday = document.getElementById("birhdayYear");
		var btnFindOut = document.getElementById("btnFindOut");
		var oldYear = document.getElementsByClassName("oldYear")[0];
		var emptyStr = document.getElementsByClassName("emptyStr")[0];

			btnFindOut.onclick = function() {
				var now = new Date();
				var res = now.getFullYear() - getBirthday.value;

				if(getBirthday.value) {
					emptyStr.classList.remove("show");
					oldYear.classList.add("show");
					oldYear.innerHTML = "You have " + res + " years old.";
				} else {
					emptyStr.classList.add("show");
					oldYear.classList.remove("show");
				}

			};
	}

	function compareWord() {
		var compareWord = document.getElementById("compareSelfWord");
		var btnCheckWord = document.getElementById("btnCheckWord");
		var booleanAnswer = document.getElementsByClassName("booleanAnswer")[0];

		btnCheckWord.onclick = function() {
			var reverseWord = "";
			var remVal = compareWord.value.toLowerCase();

			for(var i = remVal.length - 1; i >= 0; i--) {
				reverseWord += remVal[i];
			}

			if(remVal === reverseWord) {
				// console.log(reverseWord);
				booleanAnswer.innerHTML = "If you read the word from the end, then they are identical.";
			} else {
				booleanAnswer.innerHTML = "This word can not be read from the end.";
				// console.log(reverseWord);
			}
			
		};
		// Another variant
		/*btnCheckWord.onclick = function() {
			var remVal = compareWord.value.toLowerCase();
			var reverseWord = compareWord.value.split('').reverse().join('');

			if(remVal === reverseWord) {
				console.log(reverseWord);
				booleanAnswer.innerHTML = "If you read the word from the end, then they are identical.";
			} else {
				console.log(remVal);
				booleanAnswer.innerHTML = "This word can not be read from the end.";
			}
			
		};*/
	}

	function findNumber() {
		var findInt = document.getElementById("findInt");
		var res = document.getElementsByClassName("outputRes")[0];
		var info = document.getElementsByClassName("outputCode")[0];

		findInt.onkeypress = function(e) {

			if(e.keyCode < 48 || e.keyCode > 57) {
				res.innerHTML = "";
				info.innerHTML = "Your must type Integer.";
				return false;
			} else if(e.keyCode == 51) {
				info.innerHTML = "";
				res.innerHTML = "Your type number 3.";
			} else if(e.keyCode > 47 || e.keyCode < 58) {
				info.innerHTML = "";
				res.innerHTML = "";
			}
		};
	}

	function addOderedList() {
		var oderedList = document.getElementsByClassName("oderedList");
		var btnAddIndex = document.getElementById("btnAddOderedList");

		btnAddIndex.onclick = function() {
			// var text = "";
			// var a = 1;
			// for(var i = 0; i < oderedList.length; i++) {
			//  var res = "";
			//  text = oderedList[i].innerHTML;
			//  // console.log(text);
			//  for(var j = 0; j < text.length; j++) {
			//      // oderedList += text[j];
			//      res += text[j];
			//      // console.log(res);
			//  }
			//  console.log(oderedList[i].innerHTML = res + " - " + a++ + ".");
			// }
			for(var i = 0; i < oderedList.length; i++) {
				oderedList[i].innerHTML = oderedList[i].innerHTML + ' ' + i + '.';
			}
		};
	}

	function sortInt() {
		var resInput = document.getElementById("resSortInt");
		var btnSort = document.getElementById("btnSort");
		var listInt = document.getElementsByClassName("listInt");

		btnSort.onclick = function() {
			var arrInt = [];
			for(var i = 0; i < listInt.length; i++) {
				var str = listInt[i].textContent;
				arrInt.push(str)-1;
			}
			arrInt.sort(function(a, b) {
				return a - b;
			});
			resInput.value = arrInt.join(", ");
		};
	}

	function hrefTostring() {
		var linkList = document.getElementsByClassName("linkList");
		var str = "";
		var attr = "";

		for(var i = 0; i < linkList.length; i++) {

			(function(i) {
				setTimeout(function() { 
					str = linkList[i].innerHTML;
					attr = linkList[i].getAttribute("href");
					linkList[i].innerHTML = str + " ( " + attr + " )"; 
				}, i * 1000);
			})(i);

		}
		
	}

	// function reLocation() {
	//  var res = String.fromCharCode(0x2192); //&rarr;
	//  var hrefLoc = window.location.href;
	//  var loc = window.location.protocol + "//";
	//  var hsLoc = hrefLoc + res;
	//  if (loc === "http://")
	//  {
	//      location.replace(hrefLoc + res);
	//      //window.history.pushState(hrefLoc,'',hsLoc); //In local I didn't have history
	//  } else {
	//      console.log("This not http:// and you maybe staying in local");
	//  }

	//  // Another check URL
	//  // if(window.location.href.indexOf("http://") === 0) {
	//  //  console.log("your url contains the name franky");
	//  // }
	// }

	function squareNumber() {

		// var squareNum = document.getElementsByClassName("squareNum");

		// for(var i = 0; i < squareNum.length; i++) {
		//  var elements = squareNum[i];

		//  elements.onclick = function(e) {
		//      var getVal = e.target.textContent;
		//      var x = parseInt(getVal);
		//          e.target.textContent = x * x;
		//  };

		// }


		// var squareNum = document.getElementsByClassName("squareNum");
		// for (var i = 0; i < squareNum.length; i++) {
		//  squareNum[i].addEventListener('click', doStuff, false);
		// }

		// function doStuff() {
		//  var x = this.textContent;
		//  this.textContent = parseInt(x * x);
		// }

		//Closure
		// var squareNum = document.getElementsByClassName("squareNum");
		// function getHandler(n) {
		//  return function() {
		//      console.log(this);
		//      var x = this.textContent;
		//          this.textContent = parseInt(x * x);
		//  };
		// }
		 
		// for (var i = 0; i < squareNum.length; ++i) {
		//  squareNum[i].onclick = getHandler(i);
		// }

		//Closure One's more
		var squareNum = document.getElementsByClassName("squareNum");
		for (var i = 0; i < squareNum.length; ++i) {
			squareNum[i].onclick = (function(n) {
				return function() {
					console.log(this);
					var x = this.textContent;
					this.textContent = parseInt(x * x);
				};
			})(i);
		}

	}

	function changeSizeImg() {

		var imgItem = document.getElementsByClassName("imgItem");

		function increaseImg(e) {
			console.log(e.target.alt);

			var constH = 220;
			var constW = 376;
			console.log(constH, constW);

			var height = e.target.height;
			var width = e.target.width;
			console.log(height, width);

			if((constH < height) && (constW < width)) {
				e.stopPropagation();
			} else {
				e.target.style.height = height * 2 + 'px';
				e.target.style.width = width * 2 + 'px';
			}
		}

		for (var i = 0; i < imgItem.length; i++) {
			imgItem[i].addEventListener('click', increaseImg, false);
		}

	}

	function resizeImages() {
		var resizeImg = document.getElementsByClassName("resizeImg");
		var constHeight, constWidth;

		var enlarge = (e) => {
			console.log(e.target.alt);

			var height = e.target.height;
			var width = e.target.width;
			console.log(height, width);

			if((constHeight < height) && (constWidth < width)) {
				e.target.style.height = height / 2 + 'px';
				e.target.style.width = width / 2 + 'px';
				e.stopPropagation();
			} else {
				e.target.style.height = height * 2 + 'px';
				e.target.style.width = width * 2 + 'px';
			}
		}

		for (var i = 0; i < resizeImg.length; i++) {
			constHeight = resizeImg[i].height;
			constWidth = resizeImg[i].width;
			resizeImg[i].addEventListener('click', enlarge, false);
		}
	}

	function changeSrcImg() {
		var imgSrc = document.getElementById("socialImages");

		// function changeSize(e) {

		//  var target = e.target;
		//  var imgAttr = target.getAttribute("src");

		//  if(target == imgSrc) {
		//      return;
		//  } else if(!e.target.classList.contains('big')) {
		//      let imgBig = imgAttr.replace('_s', '_b');
		//      e.target.src = imgBig;
		//      e.target.classList.add("big");
		//  } else {
		//      let imgSmall = imgAttr.replace('_b', '_s');
		//      e.target.src = imgSmall;
		//      e.target.classList.remove("big");
		//  }
		//  e.stopPropagation();
		// }
		
		// imgSrc.addEventListener("click", changeSize, false);

		//Other Delegation
		// var zoomImages = (e) => {
		//  // var event = e || window.event, // Получаем event.target (вариант window.event дописываем для поддержки старых IE)
		//  //  target = event.CurrentTarget || event.srcElement; //Вариант event.srcElement дописываем для поддержки старых IE
		//  var target = e.target;
		//  var imgAttr = target.getAttribute("src");

		//  if((target.tagName == "IMG") && (target.classList != "big")) {
		//      target.classList.add("big");
		//      target.src = imgAttr.replace('_s', '_b');
		//  } else if(target.classList == 'big') {
		//      target.classList.remove("big");
		//      target.src = imgAttr.replace('_b', '_s');
		//  }

		//  e.stopPropagation();
		// };

		// imgSrc.addEventListener("click", zoomImages, false);

		//Onclick Delegation
		// imgSrc.onclick = (event) => {
		//  var target = event.target;
		//  var imgAttr = target.getAttribute("src");

		//  while(target != imgSrc) {
		//      if((target.tagName == "IMG") && (target.classList != "big")) {
		//          target.classList.add("big");
		//          target.src = imgAttr.replace('_s', '_b');
		//      } else if(target.classList == 'big') {
		//          target.classList.remove("big");
		//          target.src = imgAttr.replace('_b', '_s');
		//      }
		//      target = target.parentNode;
		//  }
		// };

		imgSrc.onclick = (e) => {
			var target = e.target;
			var imgAttr = target.getAttribute("src");

			if(target.tagName == "IMG") {
				if(target.classList != "big") {
					target.classList.add("big");
					target.src = imgAttr.replace('_s', '_b');
				} else {
					target.classList.remove("big");
					target.src = imgAttr.replace('_b', '_s');
				}
				return false;
			}
		};
	}

	function inputChangeValue() {
		var elem = document.getElementById("caseCountInput");
		var changeVal = document.getElementById("changeVal");
		var count = 0;

		// function Menu(elem) {
		//  this.plus = function() {
		//      count++;
		//      changeVal.value = count;
		//  };
		//  this.minus = function() {
		//      if(count > 0) {
		//          count--;
		//          changeVal.value = count;
		//      }
		//  };

		//  var self = this;

		//  elem.onclick = function(e) {
		//      var target = e.target;
		//      var action = target.getAttribute('data-action');
		//      if (action) {
		//          self[action]();
		//          console.log(self[action]);
		//      }
		//  };
		// }
		// new Menu(elem);

		elem.onclick = (e) => {
			var target = e.target;
			var action = target.getAttribute('data-action');

			if (action == 'plus') {
				count++;
				changeVal.value = count;
			} else if ((action == 'minus') && (count > 0)) {
				count--;
				changeVal.value = count;
			}
			e.stopPropagation();
		};
	}

	function formElementsSum() {
		var btnSum = document.getElementById("btnGetSum");
		var res = document.getElementsByClassName("putNumber")[0];

		btnSum.onclick = () => {
			var formId = document.getElementById("form");
			var elements = formId.elements;
			var num = 0;

			for(var i = 0; i < elements.length; i++ ) {
				num += parseInt(elements[i].value);
				console.log(num);
			}
			res.innerHTML = num;
		};
	}

	function formsElemSum() {
		var btnSum = document.getElementById("getForms");
		var res = document.getElementsByClassName("resSumNum")[0];

		btnSum.onclick = () => {
			var forms = document.getElementsByClassName("formForSum");
			var num = 0;

			for(var i = 0; i < forms.length; i++) {
				var elem = forms[i].elements;
					console.log(elem);
				for(var j = 0; j < elem.length; j++) {
					console.log(elem[j].value);
					num += parseInt(elem[j].value);
				}
			}
			res.innerHTML = num;
		};
	}

	function showCountry() {
		var request = new XMLHttpRequest();
		request.open('GET', 'js/list.json');

		request.onreadystatechange = () => {
			if((request.readyState === 4) && (request.status === 200)) {
				var items = JSON.parse(request.responseText);
					// console.log(items);
				var countries = [];
				for (var i = 0, l = items.length; i < l; i++) {
					countries.push(items[i].name);
				}
				countries = countries.sort();
				countryList(countries);
			}
		}
		request.send();

		function countryList(countries) {
			var output = '<select>';
				output = '<option>' + 'Select Country' + '</option>';
			for (var i = 0; i < countries.length; i++) {
				output += '<option value=' + '"' + countries[i] + '"' + '>' + countries[i] + '</option>';
			}
			output += '</select>';
			document.getElementById('select').innerHTML = output;
		}

		// function countryArr(items) {
		//  var output = '<select>';
		//      output = '<option>' + 'Select Country' + '</option>';
		//      for(var key in items) {
		//          output += '<option value=' + '"' + items[key].name + '"' + '>' + items[key].name + '</option>';
		//      }
		//      output += '</select>';
		//      document.getElementById('select').innerHTML = output;
		// }
	}

	function getCountry() {
		var choiseCase = document.getElementById('choiseCase');
		var select = document.getElementById('select');
		var options = select.options;

		select.onchange = () => {
			for (var i = 0; i < options.length; i++) {
				if (options[i].selected === true) {
					choiseCase.value = options[i].text;
				}
			}
		};
	}


	function searchCountry() {
		var request = new XMLHttpRequest();
		var url = "https://restcountries.eu/rest/v2/all"; //internet

		request.onreadystatechange = () => {
			if((request.readyState === 4) && (request.status === 200)) {
				var items = JSON.parse(request.responseText);
					// console.log(items);
				var countries = [];
				for (var i = 0, l = items.length; i < l; i++) {
					countries.push(items[i].name);
				}
				countries = countries.sort();
				countryList(countries);
			}
		}
		request.open('GET', url, true);
		// request.open('GET', 'js/europe.json');
		request.send();

		function countryList(countries) {
			var count = 1;
			var output = '<select>';
				output = '<option>' + 'Select Country' + '</option>';
			for (var i = 0; i < countries.length; i++) {
				output += '<option value=' + '"' + countries[i] + '"' + '>' + count++ + ". "+ countries[i] + '</option>';
			}
			output += '</select>';
			document.getElementById('idSelect').innerHTML = output;
		}
	}

	function selectedIndex() {
		var select = document.getElementById('idSelect');
		var searchIndex = document.getElementById('searchIndex');
		var btnSearch = document.getElementById('btnSearch');
		var options = select.options;
		var num, count;

		btnSearch.onclick = () => {
			for (var i = 0; i < options.length; i++) {
				count = i;
			}

			num = parseInt(searchIndex.value);
			if(num && (num <= count)) {
				select.selectedIndex = num;
				searchIndex.classList.remove("error");
			} else {
				searchIndex.classList.add("error");
			}
		};

		searchIndex.oninput = function(evt) {
			searchIndex.value = searchIndex.value.replace(/[^0-9]/g, '');
		};
	}


	function divideSelect() {
		var request = new XMLHttpRequest();
		// var url = "https://restcountries.eu/rest/v2/all"; //internet

		request.onreadystatechange = () => {
			if((request.readyState === 4) && (request.status === 200)) {
				var items = JSON.parse(request.responseText);
					// console.log(items);
					showSortedRegions(items);
					showCountries(items);
			}
		}
		request.open('GET', 'js/continents.json');
		request.send();

		function showSortedRegions(items) {
			var regions = [];

			for (var i = 0, len = items.length; i < len; i++) {
				regions.push(items[i].region);
			}
			regions.sort();

			enterRegions(regions);

			//Other sort and find unique Regions
				// var uniqueList;
				// regions.sort(function() {
				//  var str = regions.join();
				//  uniqueList = str.split(',').filter(function(currentItem, i, allItems){
				//      return (i == allItems.indexOf(currentItem));
				//  });
				//  console.log(regions);
				// });
				// regions = uniqueList;
				// regionList(regions);
		}

		function findUniqueRegions(regions) {
			for(var i = 1; i < regions.length; i++){
				if(regions[i] === regions[i-1]){
					regions.splice(i, 1);
					i--;
				}
			}
		}

		function enterRegions(regions) {

			findUniqueRegions(regions);
			
			var output = '<select>';
				output = '<option>' + 'Select Region' + '</option>';
				for (var i = 0; i < regions.length; i++) {
					output += '<option value=' + '"' + regions[i] + '"' + '>' + regions[i] + '</option>';
				}
				output += '</select>';
				document.getElementById('regionSelect').innerHTML = output;
		}

		function showCountries(items) {
			var selectReg = document.getElementById("regionSelect");
			var selectCountry = document.getElementById("countrySelect");

				selectReg.onchange = () => {
					selectCountry.removeAttribute("disabled");
					var output = '<select>';
						output = '<option>' + 'Select Country' + '</option>';
						for (var i = 0; i < items.length; i++) {
							if(selectReg.value === items[i].region) {
								output += '<option value=' + '"' + items[i].name + '"' + '>' + items[i].name + '</option>';
							}
						}
						output += '</select>';
						document.getElementById('countrySelect').innerHTML = output;
				};
		}
	}

	function checkedIntInput() {
		var inputVal = document.getElementById("checkInput");

		inputVal.onblur = () => {
			var valInt = parseInt(inputVal.value);

			if(isNaN(inputVal.value) || (valInt <= 0) || (valInt > 100)) {
				inputVal.classList.add("error");
				inputVal.classList.remove("success");
			} else if((valInt > 0) && (valInt <= 100)) {
				inputVal.classList.remove("error");
				inputVal.classList.add("success");
			} else {
				inputVal.classList.remove("error");
				inputVal.classList.remove("success");
			}
		};
	}

	function selectionText() {
		// var inputEnter = document.getElementById("inputEnterText");
		var textSelected = "";
		// document.onmouseup = () => {
		//  if(window.getSelection) {
		//      textSelected = window.getSelection().toString();
		//      document.getElementById("inputEnterText").value = textSelected;
		//      console.log(textSelected);
		//  }
		// };
		document.onmouseup = document.onselectionchange = () => {
			if(window.getSelection) {
				textSelected = window.getSelection().toString();
				document.getElementById("inputEnterText").value = textSelected;
				console.log(textSelected);
			}
		};
	}

	function findMaxNumber() {
		var contentText = document.getElementsByClassName("contentText");
		var findNum = document.getElementById("btnFindNum");

		findNum.onclick = () => {
			var str = "";
			var arr = [];

			for(var i = 0; i < contentText.length; i++) {
				str = contentText[i].textContent;
				let number = str.match(/\d+/g).map(Number);
				arr.push(number[0]);

				// larges = Math.max.apply(null, str.match(/\d+/g));
			}
			var larges = Math.max.apply(null, arr);
			hightlightMaxNum(larges);
		};

		function hightlightMaxNum(larges) {
			var largeNum = larges.toString();
			for(var i = 0; i < contentText.length; i++) {
				// Получим текстовый узел
				var root = contentText[i].firstChild;
				//и его содержимое
				var content = root.nodeValue;
				// Проверим есть ли совпадения с переданным текстом
				if (~content.indexOf(largeNum)) {
					if (document.createRange) {
						// Если есть совпадение, и браузер поддерживает Range, создаем объект
						var rng = document.createRange();
							// Ставим верхнюю границу по индексу совпадения,
							rng.setStart(root, content.indexOf(largeNum));
							// а нижнюю по индексу + длина текста
							rng.setEnd(root, content.indexOf(largeNum) + largeNum.length);
						// Создаем спан с синим фоном
						var highlightDiv = document.createElement('span');
							// Обернем наш Range в спан
							highlightDiv.style.color = 'red';
							rng.surroundContents(highlightDiv);
					} else {
						alert( 'Вероятно, у вас IE8-, смотрите реализацию TextRange ниже' );
					}
				}
			}
		}
	}

	function countIndexTitle() {
		var inputSum = document.getElementById("inputSumCount");
		var sumTitle = document.getElementById("sumTitle");
		var count = 0;

		sumTitle.onclick = (e) => {
			var target = e.target;
			if(target.tagName == "P") {
				count++;
				inputSum.value = count;
			}
		};
	}

	function findSquareNum() {

		// var btn = document.getElementById("btnClearInterval");
		// var inputVal = document.getElementById("inputSquareNum");

		// var timerId = setInterval(function() {
		//  var valInput = inputVal.value;
		//      inputVal.value = valInput * valInput;
		// }, 1000);

		// btn.onclick = () => {
		//  clearInterval(timerId);
		// };

		//Other Example
		// var btnSet = document.getElementById("btnSetInterval");
		// var btnClear = document.getElementById("btnClearInterval");
		// var inputVal = document.getElementById("inputSquareNum");
		// var timerId;

		// btnSet.onclick = startTimer;

		// function startTimer() {
		//  timerId = setInterval(function() {
		//      var valInput = inputVal.value;
		//          inputVal.value = valInput * valInput;
		//  }, 1000);
		// }


		// btnClear.onclick = clearTimer;

		// function clearTimer() {
		//  clearInterval(timerId);
		// }


		//Other Example
		var btnSet = document.getElementById("btnSetInterval");
		var btnClear = document.getElementById("btnClearInterval");
		var inputVal = document.getElementById("inputSquareNum");
		var timerId;

		btnSet.onclick = () => {
			timerId = setInterval(function() {
				var valInput = inputVal.value;
					inputVal.value = valInput * valInput;
			}, 1000);
		};


		btnClear.onclick = () => {
			clearInterval(timerId);
		};

	}

	function possibleStr() {
		var input = document.getElementById("inputRandomString");
		var btn = document.getElementById("btnGenerate");
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		btn.onclick = () => {
			var text = "";
			for(var i = 0; i < 8; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			input.value = text;
		};
	}

	function outputStr() {
		var input = document.getElementById("inputInt");
		var btn = document.getElementById("btnGen");
		var inputOutput = document.getElementById("inputRandomStr");
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		btn.onclick = () => {
			var text = "";
			var num = parseInt(input.value);
			for(var i = 0; i < num; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			inputOutput.value = text;
		};
	}

	function enterStr() {
		var input = document.getElementById("lenghtStr");
		var inputStr = document.getElementById("possibleStr");
		var btn = document.getElementById("btnSetStr");
		var inputOutput = document.getElementById("putRandomStr");
		// var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


		btn.onclick = () => {
			var text = "";
			var num = parseInt(input.value);
			var str = inputStr.value;
			for(var i = 0; i < num; i++) {
				text += str.charAt(Math.floor(Math.random() * str.length));
			}
			inputOutput.value = text;
		};
	}

	function countDown() {
		var input = document.getElementById("putInt");
		var caseStart = document.getElementById("startCountdown");

		input.onblur = () => {
			var val = input.value;
			var intCase = caseStart.textContent;
				caseStart.innerHTML = val--;
			var timer = setTimeout(function dec() {
				if(val < 0){
					// return false;
					clearTimeout(timer);
				} else {
					caseStart.innerHTML = val--;
					timer = setTimeout(dec, 1000);
				}
			}, 1000);
		};
	}

	function changeBgColor() {
		var par = document.getElementById("par");
		var btnStart = document.getElementById("btnAddColor");
		var btnStop = document.getElementById("btnStopChange");
		var arr = ['red', 'green'];
		var timer;
		var i = 0;

		btnStart.onclick = () => {
			timer = setTimeout(function change() {
				if(i > arr.length - 1) {
					i = 0;
					timer = setTimeout(change);
				} else {
					par.style.backgroundColor = arr[i];
					i++;
					timer = setTimeout(change, 1000);
				}
			}, 1000);
		};

		btnStop.onclick = () => {
			clearTimeout(timer);
		};

	}

	function changeColor() {
		var par = document.getElementById("paragraph");
		var btnStart = document.getElementById("btnStartChange");
		var btnStop = document.getElementById("btnStopColor");
		var arr = ['red', 'green', 'blue'];
		var timer;
		var i = 0;

		btnStart.onclick = () => {
			timer = setTimeout(function change() {
				if(i > arr.length - 1) {
					i = 0;
					timer = setTimeout(change);
				} else {
					par.style.backgroundColor = arr[i];
					i++;
					timer = setTimeout(change, 1000);
				}
			}, 1000);
		};
		btnStop.onclick = () => {
			clearTimeout(timer);
		};
	}

	function changeHref() {
		var link = document.getElementById("changeLink");
		var caseLink = document.getElementById("caseLink");
		var arr = ['one', 'two', 'three'];
		var i = 0;

		window.onload = () => {
			caseLink.innerHTML = arr[i];
		};

		link.onclick = (e) => {
			e.preventDefault();
			if(i >= arr.length - 1) {
				i = 0;
				caseLink.innerHTML = arr[i]
			} else {
				i++;
				caseLink.innerHTML = arr[i];
			}
		};

	}

	function progNum() {
		var mainCase = document.getElementById("progNumber");
		var inputs = mainCase.getElementsByTagName("input");
		var btnStart = document.getElementById("btnCountNum");
		var btnClear = document.getElementById("btnClearCount");
		var timer;
		var count = 0;
		var i = 0;

		btnStart.onclick = () => {
			timer = setTimeout(function countNum() {
				if(i >= inputs.length) {
					i = 0;
					timer = setTimeout(countNum);
				} else {
					inputs[i].value = count++;
					i++;
					timer = setTimeout(countNum, 1000);
				}
			}, 1000);
		};

		btnClear.onclick = () => {
			clearTimeout(timer);
		};
	}

	function addNumArray() {
		// var arr = [];
		// for(var i = 1; i < 6; i++) {
		//  var str = '';
		//  for(var j = 0; j < i; j++) {
		//      str += i;   
		//  }
		//  arr.push(str);
		// }
		// console.log(arr);
	}

	function userFunc() {

		var arr = [12, 19, 20, 14, 60, 85];
		var result = [];

		for (var i = 0; i < 10; i++) {
			if(inRange(arr[i])) {
				result.push(arr[i]);
			}
		}
		console.log(result);

		function inRange(num) {
			var sum = arraySum(getDigits(num));

			if(sum >= 1 && sum <= 9) {
				return true;
			} else {
				return false;
			}
		}

		function getDigits(num) {
			return String(num).split('');
		}

		function arraySum(arr) {
			var sum = 0;
			for(var i = 0; i < arr.length; i++) {
				sum += Number(arr[i]);
			}

			return sum;
		}

	}

	function sumEachNum() {
		var arr = [12, 19, 28, 13, 14, 345];
		var sum = 0;

		for (var i = 0; i < arr.length; i++) {
			sum = arraySum(getDigits(arr[i]));
		}
		console.log(sum);

		function getDigits(num) {
			return String(num).split('');
		}

		function arraySum(arr) {
			for (var i = 0; i < arr.length; i++) {
				sum += Number(arr[i]);
			}

			return sum;
		}
	}

	function rangeYears() {

		for (var i = 1; i < 2017; i++) {
			if(getDigitsSum(i) == 13) {
				console.log(i);
			}
		}

		function getDigitsSum(num) {
			var num = String(num);
			var sum = 0;
			for(var i = 0; i < num.length; i++) {
				sum += Number(num[i]);
			}
			return sum;
		}

	}

	function doUpperLetter() {
		var str = 'var_text_hello_word_Wow';

		var arrStr = str.split('_');
		for(let i = 1; i < arrStr.length; i++) {
			arrStr[i] = ucfirst(arrStr[i]);
		}
		var result = arrStr.join('');
		console.log(arrStr);
		console.log(result);

		function ucfirst(str) {
			return str.slice(0, 1).toUpperCase() + str.slice(1);
		}
	}

	function recorsiveArray() {

		var arr = [1, 2, 3, 4, 5, 6, 7];
		function func(arr) {
			
			console.log(arr[0]);
			arr.splice(0, 1);
			if(arr.length > 0) {
				
				func(arr);
			}
		}
		func(arr);

	}

	function recSumDigits() {
		var num = 10;
		var sum = 0;
		var i = 0;
		var arr = [];
		
		function func(num) {
			if(num > 9) {

					arr = String(num).split('');
					sum += Number(arr[i]);
					i++;
					if(arr.length > i) {
						func(num);
					} else {
						i = 0;
						num = sum;
						sum = 0;
						func(num);
					}

			 } else {
				console.log('recursion ' + num);
			 }
		}
		func(num);

	}

	function rangeDayBirthday() {
		var input = document.getElementById("rangeBirthdayDay");
		var output = document.getElementById("endDaysBirthday");

		input.onblur = () => {
			var str = input.value;
			var today = new Date();
			var arr = str.split('-');
			var birthday = new Date(today.getFullYear(), arr[1]-1, arr[2]);
			// var result = Math.floor((future - date) / 1000 / 60 / 60 / 24);
			var result = Math.floor((birthday - today) / 86400000);

			if(result < 0) {
				var birthday = new Date(today.getFullYear() + 1, arr[1]-1, arr[2]);
				var result = Math.floor((birthday - today) / 86400000);
				output.innerHTML = result;
			}
			output.innerHTML = result;
		};
	}

	function provideEvent() {
		var images = document.getElementById("provideImg");
		var elements = images.getElementsByTagName("img");

		// images.onclick = (e) => {
		//  var target = e.target;
		//  if(target.tagName == "IMG") {
		//      alert(target.getAttribute('src'));
		//  }
		// };
		//Other
		// images.onclick = func;

		// function func(e) {
		//  var target = e.target;
		//  if(target.tagName == "IMG") {
		//      alert(target.getAttribute('src'));
		//  }
		// };
		//Other
		// for(var i = 0; i < elements.length; i++) {
		//  elements[i].onclick = func;
		// }

		// function func() {
		//  alert(this.getAttribute('src'));
		// }
		//Other
		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', func);
		}

		function func() {
			alert(this.getAttribute('src'));
		}
	}

	function provideLink() {
		var links = document.getElementById("provideLink");
		var elements = links.getElementsByTagName("a");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('mouseover', addTitle);
		}

		function addTitle() {
			this.title = this.innerHTML;
		}
	}

	function provideHref() {
		var links = document.getElementById("provideHref");
		var elements = links.getElementsByTagName("a");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('mouseover', addHref);
		}

		function addHref() {
			this.innerHTML = this.innerHTML + ' ( ' + this.href + ' )';
			this.removeEventListener('mouseover', addHref);
		}
	}

	function provideInput() {
		var inputs = document.getElementById("provideInput");
		var elements = inputs.getElementsByTagName("input");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('blur', addValue);
		}

		function addValue() {
			var test = document.getElementById("tester");
				test.innerHTML = this.value;
		}
	}

	function provideInputAlert() {
		var inputs = document.getElementById("provideInputAlert");
		var elements = inputs.getElementsByTagName("input");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', addValueAlert);
		}

		function addValueAlert() {
			alert(this.value);
			this.removeEventListener('click', addValueAlert);
		}
	}

	function provideParagSqrt() {
		var parag = document.getElementById("provideParag");
		var elements = parag.getElementsByTagName("p");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', getSqrt);
		}

		function getSqrt() {
			this.innerHTML = this.innerHTML * this.innerHTML;
			// this.innerHTML = Math.pow(this.innerHTML, 2);
		}
	}

	function provideInputBlur() {
		var inputs = document.getElementById("provideInputBlur");
		var elements = inputs.getElementsByTagName("input");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('blur', checkLength);
		}

		function checkLength() {
			var dataLength = this.dataset.length;
			var textLength = this.value.length;

			if(dataLength == textLength) {
				this.style.borderColor = 'green';
			} else {
				this.style.borderColor = 'red';
			}
		}
	}

	function changeColorDiv() {
		var div = document.getElementById("provideDiv");
		var elements = div.getElementsByTagName("div");

		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', setRed);
		}

		function setRed() {
			this.style.backgroundColor = 'red';
			this.removeEventListener('click', setRed);
			this.addEventListener('click', setWhite);
		}

		function setWhite() {
			this.style.backgroundColor = 'white';
			this.removeEventListener('click', setWhite);
			this.addEventListener('click', setRed);
		}
	}

	function createList() {
		var arr = ['one', 'two', 'three'];

		var ul = document.createElement("ul");
		for(var i = 0; i < arr.length; i++) {
			var li = document.createElement("li");
				li.innerHTML = arr[i];
				ul.appendChild(li);
		}

		document.body.appendChild(ul);
	}

	function cloneInput() {
		// var cloneInput = document.getElementById("cloneInput");
		// var input = cloneInput.getElementsByTagName("input")[0];
		// var btnClone = document.getElementById("btnClone");

		// btnClone.addEventListener('click', cloneElement);

		// function cloneElement() {
		//  var clone = input.cloneNode(true);
		//  input.parentElement.insertBefore(clone, input);
		// }
		//Other
		var btnClone = document.getElementById("btnClone");

		btnClone.addEventListener('click', cloneElement);

		function cloneElement() {
			var parent = btnClone.parentElement;
			var newInput = document.createElement('input');
			parent.appendChild(newInput);
		}
	}

	function addDigitEachInput() {
		var input = document.getElementById('inputDigits');
		input.addEventListener('blur', func);

		function func(){
			var digits = this.value.split('');
			var parent = input.parentElement;

			for(var i = 0; i < digits.length; i++) {
				var newInput = document.createElement("input");
					newInput.value = digits[i];
					parent.appendChild(newInput);
			}
		}
	}

	function hideParentBtn() {
		var btnHide = document.getElementById('btnHideParent');
			btnHide.addEventListener('click', func);

		function func() {
			this.parentElement.style.display = "none";
		}
	}

	function knowClientTop() {
		var btnClientTop = document.getElementById('btnClientTop');
		var borderTop = document.getElementById('clientTop');

		btnClientTop.addEventListener('click', func);

		function func() {
			alert('clientTop : ' + borderTop.clientTop);
		}
	}

	function knowClientLeft() {
		var btnClientLeft = document.getElementById('btnClientLeft');
		var borderLeft = document.getElementById('clientLeft');
		
		btnClientLeft.addEventListener('click', func);

		function func() {
			alert('clientLeft : ' + borderLeft.clientLeft);
		}
	}

	function knowOffsetWidth() {
		var button = document.getElementById('btnOffsetWidth');
		var element = document.getElementById('offsetWidth');
		
		button.addEventListener('click', func);

		function func() {
			alert('offsetWidth : ' + element.offsetWidth);
			alert('clientWidth : ' + element.clientWidth);
		}
	}

	function knowOffsetHeight() {
		var button = document.getElementById('btnOffsetHeigth');
		var element = document.getElementById('offsetHeigth');
		
		button.addEventListener('click', func);

		function func() {
			alert('offsetHeigth : ' + element.offsetHeight);
			alert('clientHeight : ' + element.clientHeight);
		}
	}

	function knowGetComputedStyle() {
		var button = document.getElementById('btnGetComputedStyle');
		var element = document.getElementById('getComputedStyle');
		var style = getComputedStyle(element);
		button.addEventListener('click', func);

		function func() {
			alert('getComputedStyle Height : ' + style.height);
			alert('getComputedStyle Width : ' + style.width);
			alert(getComputedStyle(element).height + ' ' + getComputedStyle(element).width);
		}

		var buttonScroll = document.getElementById('btnScrollTopLeft');

		buttonScroll.addEventListener('click', scrollElem);

		function scrollElem() {
			alert('scrollTop : ' + element.scrollTop);
			alert('scrollLeft : ' + element.scrollLeft);
		}

		var btnAddScrollTop = document.getElementById('btnAddScrollTop');

		btnAddScrollTop.addEventListener('click', addScrollTop);

		function addScrollTop() {
			element.scrollTop = 100;
		}

		var btnAddScrollBottom = document.getElementById('btnAddScrollBottom');

		btnAddScrollBottom.addEventListener('click', addScrollBottom);

		function addScrollBottom() {
			element.scrollTop += 100;
		}

		var btnScrollWidthHeight = document.getElementById('btnScrollWidthHeight');

		btnScrollWidthHeight.addEventListener('click', scrollHeightWidth);

		function scrollHeightWidth() {
			alert('scrollHeight : ' + element.scrollHeight);
			alert('scrollWidth : ' + element.scrollWidth);
		}

		var btnMinusScrollHeight = document.getElementById('btnMinusScrollHeight');

		btnMinusScrollHeight.addEventListener('click', minusScrollHeight);

		function minusScrollHeight() {
			var totalHeight = element.scrollHeight;
			var needScroll = totalHeight - 100;
				element.scrollTop = needScroll;
		}
	}


	function knowPageOffset() {
		var button = document.getElementById('btnPageOffset');
		
		button.addEventListener('click', func);

		function func() {
			alert('pageXOffset : ' + pageXOffset);
			alert('pageYOffset : ' + pageYOffset);
		}
	}

	function knowScrollTo() {
		var button = document.getElementById('btnScrollTo');
		
		button.addEventListener('click', func);

		function func() {
			window.scrollTo(300, 500);
		}
	}

	function knowScrollBy() {
		var button = document.getElementById('btnScrollBy');
		
		button.addEventListener('click', func);

		function func() {
			window.scrollBy(0, 300);
		}
	}

	function knowScrollIntoView() {
		var button = document.getElementById('btnScrollIntoView');
		
		button.addEventListener('click', func);

		function func() {
			var totalHeight = document.body.clientHeight;
			window.scrollTo(0, totalHeight);
		}
	}

	function checkScrollPage() {
		var button = document.getElementById('btnCheckScrollPage');
		
		button.addEventListener('click', func);

		function func() {
			var body = document.documentElement;
			if (body.scrollHeight - body.scrollTop === body.clientHeight) {
				alert('true');
				window.scrollTo(0, 100);
			}
		}
	}

	function changeSizeBlock() {
		var elem = document.getElementById('ChangeSizeStyle');
		var button = document.getElementById('btnChangeSizeStyle');
		

		button.addEventListener('click', func);

		function func() {
			// var style = getComputedStyle(elem);
			// var newWidth = parseInt(style.width) * 2 + 'px';
			// var newHeight = parseInt(style.height) * 2 + 'px';
			//  elem.style.height = newWidth;
			//  elem.style.width = newHeight;
			//Other
			// var newWidth = this.offsetWidth;
			// var newHeight = this.offsetHeight;
			//  this.style.width = newWidth * 2 + 'px';
			//  this.style.height = newHeight * 2 + 'px';
			//Other
			var newWidth = elem.offsetWidth;
			var newHeight = elem.offsetHeight;
				elem.style.width = newWidth * 2 + 'px';
				elem.style.height = newHeight * 2 + 'px';
		}
	}

	function knowIfScrollPage() {
		// Узнать естьт ли скролл
		// window.innerWidth == document.documentElement.clientWidth ? console.log('nope') : console.log('yes')
		// Прокрутите окно браузера до самого низа
		// var bodyBottom = document.documentElement.scrollHeight;
		// window.scrollTo(0, bodyBottom);
		//Еще
		// var heightWindow = window.innerHeight;
		// window.scrollBy(0, heightWindow)
		// Узнать была ли страница прокручена!
		// window.pageYOffset
	}

	function coordsMouseMove() {
		var move = document.getElementById("coordsMousemMove");
		var coords = document.getElementById("shoWCoords");

		move.addEventListener('mousemove', funcMove);

		function funcMove(event) {
			coords.innerHTML = 'X : '+ event.clientX + ' Y : ' + event.clientY;
		}
	}

	function moveSquareClient() {
		var area = document.getElementById("coordsArea");
		var square = document.getElementById("squareClient");

		

		area.addEventListener('click', funcSquare);

		function funcSquare(event) {
			var areaCoords = area.getBoundingClientRect();
			var areaInnerCoords = {
				top: areaCoords.top + area.clientTop,
				left: areaCoords.left + area.clientLeft
			}
			square.style.top = event.clientY - areaInnerCoords.top + 'px';
			square.style.left = event.clientX - areaInnerCoords.left + 'px';
		}
	}

	function moveSquareClientCenter() {
		var area = document.getElementById("areaForMove");
		var elem = document.getElementById("squareElem");

		area.addEventListener('click', funcSquareCenter);

		function funcSquareCenter(e) {
			var areaCoords = area.getBoundingClientRect();

			var areaInnerCoords = {
					top : areaCoords.top + area.clientTop,
					left : areaCoords.left + area.clientLeft
				}

			var elemCoords = {
					top : e.clientY - areaInnerCoords.top - elem.offsetHeight / 2,
					left : e.clientX - areaInnerCoords.left - elem.offsetWidth / 2
				}

			if(elemCoords.top < 0) elemCoords.top = 0;
			if(elemCoords.left < 0) elemCoords.left = 0;
			if(elemCoords.top + elem.offsetHeight > area.clientHeight) elemCoords.top = area.clientHeight - elem.offsetHeight;
			if(elemCoords.left + elem.offsetWidth > area.clientWidth) elemCoords.left = area.clientWidth - elem.offsetWidth;

			elem.style.top = elemCoords.top + 'px';
			elem.style.left = elemCoords.left + 'px';
		}
	}

	function findKeyCode() {
		var input = document.getElementById("inputKeyCode");
		var text = document.getElementById("showKeyCode");

		input.onkeypress = func;

		function func(e) {
			// var code = e.keyCode;
			var code = e.which;
			// var key = String.fromCharCode(e.keyCode);
			var key = String.fromCharCode(e.which);
				showCode.innerHTML = code;
				showKey.innerHTML = key;
		}
	}

	function paintArea() {
		var block = document.getElementById("areaBgColor");

		block.addEventListener('click', colorArea);

		function colorArea(e) {
			if(e.ctrlKey) this.style.backgroundColor = "red";
		}
	}

	function paintAreaKey() {
		var block = document.getElementById("areaDiffKey");

		block.addEventListener('click', colorArea);

		function colorArea(e) {
			if(e.ctrlKey) this.innerHTML = "1";
			if(e.altKey) this.innerHTML = "2";
			if(e.shiftKey) this.innerHTML = "3";
		}
	}

	function enterValIn() {
		var input = document.getElementById("inputEnterKey");
		var parag = document.getElementById("paragGetVal");

		input.onkeypress = enterString;

		function enterString(e) {
			if(e.which == 13 || e.keyCode == 13) {
				parag.innerHTML = input.value;
				return this.value = ' ';
			}
		}
	}

	function delegEven() {
		var elem = document.getElementById("delegList");

		elem.addEventListener('click', addSign);

		function addSign(event) {
			var target = event.target;
			var li = target.closest("li");
				if(li) {
					li.innerHTML = li.innerHTML + '!';
				}
		}

		var button = document.getElementById("btnAddPunkt");

		button.addEventListener('click', addOne);

		function addOne() {
			var oneList = document.createElement("li");
				oneList.innerHTML = "new punkt";
				elem.appendChild(oneList);
		}
	}

	function delegTableWork() {
		var tbody = document.getElementById("userWorks");

		tbody.addEventListener('click', changeText);

		function changeText(e) {
			var target = e.target;
			var td = target.closest("td");
				if(td && td != tbody.rows[0].cells[0]) {
					var ask = prompt("Change what you like :", "");
					if(ask != null && ask !== "") {
						td.innerHTML = ask;
					}
				}
		}

		var button = document.getElementById("btnAddNewUser");

		button.addEventListener('click', addUser);

		function addUser() {
			var first = document.getElementById("intFirstName").value;
			var second = document.getElementById("intSecondName").value;
			// var cellCount = tbody.lastChild.cells[0].textContent;
			var items = tbody.querySelectorAll("tr");
			var cellCount = items[items.length-1].cells[0].textContent;

			var tr = document.createElement("tr");
				tbody.appendChild(tr);
			var tdOne = document.createElement("td");
				tdOne.innerHTML = Number(cellCount) + 1;
				tr.appendChild(tdOne);
			var tdTwo = document.createElement("td");
				tdTwo.innerHTML = first;
				tr.appendChild(tdTwo);
			var tdThrree = document.createElement("td");
				tdThrree.innerHTML = second;
				tr.appendChild(tdThrree);
		}
	}


	function eachTimerParag() {

		var elems = document.querySelectorAll('.clousureTimer');

			elems.forEach(elem => elem.addEventListener('click',
				() => window.setInterval( 
				() => elem.innerHTML = Number(elem.innerHTML) +1, 1000)
			));

	}

	function createCountBtn() {
		var btn = document.querySelectorAll(".btnCountCreate");

		let createDigit = () => {
			let i = 0;
			return function() {
				i++;
				this.innerHTML = i;
			};
		}

		btn.forEach(elem => {
			elem.onclick = createDigit(this);
		});

		// let createCount = () => {
		//  let i = 0;
		//  return function() {
		//      i++;
		//      this.innerHTML = i;
		//  };
		// }

		// btn.forEach(elem => {
		//  elem.addEventListener('click', createCount(this));
		// });

	}

	function createColor() {
		var parag = document.querySelectorAll(".eachChangeColor");
		var arrColor = ['red', 'green', 'blue', 'pink'];

		let changeColor = () => {
			var i = 0;
			return function() {
				this.style.backgroundColor = arrColor[i];
				i++;
				if(arrColor.length == i) i = 0;
			}
		}

		parag.forEach(elem => {
			elem.addEventListener('click', changeColor(this));
		});
	}

	function fibonnachiStyle() {
		var button = document.querySelectorAll(".fibNum");

		let createFibNum = () => {
			var a = 0;
			var b = 1;
			var temp = 0;
			return function() {
				this.nextElementSibling.innerHTML = a;
				temp = a;
				a = b;
				b = temp + a;
			};
		}

		button.forEach(elem => {
			elem.addEventListener('click', createFibNum());
		});
	}

	function saveInputHistory() {
		var input = document.querySelectorAll(".inputOnchange");

		let saveChange = (elem) => {
		
			function currentNumber() {
				count = arr.length - 1;
				console.log(count);
			}

			function nextRoll() {
				console.log(count + 1, arr.length);
				if (count + 1 < arr.length) count++;
				elem.value = arr[count];
			}

			function prevRoll() {
				console.log(count - 1);
				if (count - 1 >= 0) count--;
				elem.value = arr[count];
			}

			var arr = [];
			var count = 0;

			var next = elem.previousElementSibling;
				next.addEventListener('click', nextRoll);
				next.previousElementSibling.addEventListener('click', prevRoll);

			return function() {
				arr.push(this.value);
				currentNumber();
			}
		};

		input.forEach(elem => {
			elem.addEventListener('change', saveChange(elem));
		});
	}

	function gettingRandomNumber() {
		var button = document.getElementById("btnGetRandomNum");
		var parag = document.getElementById("paragPutArr");

		var getNum = () => {

			var arr = [];
			return function() {
				// while(arr.length < 101) {
					var randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
					for(var i = 0; i < arr.length; i++) {
						console.log(arr[i], randomNum);
						if(arr[i] == randomNum) {
							return;
						}
					}
					parag.innerHTML += randomNum + ', ';
					arr.push(randomNum);
				// }
			}


			// var arr = [];
			// return function() {

			//  var randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
			//  for(var i = 0; i < arr.length; i++) {
			//      parag.innerHTML = randomNum;
			//  }
			//  arr.push(randomNum);
			// }
		}

		button.addEventListener('click', getNum());
	}

	function workObjString() {
		class MyString {
			constructor(phrase) {
				this._phrase = phrase;
			}

			reverse(phrase) {
				return phrase.split("").reverse().join("");
			}

			ucFirst(phrase) {
				return phrase.slice(0, 1).toUpperCase() + phrase.slice(1);
			}

			ucWords(phrase) {
				return phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
			}

		}

		var str = new MyString();

		console.log(str.reverse('abcde'));

		console.log(str.ucFirst('abcde'));

		console.log(str.ucWords('abcde abcde abcde'));




		// class MyString {
		// 	constructor(phrase) {
		// 		this._phrase = phrase;
		// 	}
			
		// 	setReverse(phrase) {
		// 		this._phrase = phrase;
		// 	}

		// 	reverse() {
		// 		return this._phrase.split("").reverse().join("");
		// 	}

		// 	setUcFirst(phrase) {
		// 		this._phrase = phrase;
		// 	}

		// 	ucFirst() {
		// 		return this._phrase.slice(0, 1).toUpperCase() + this._phrase.slice(1);
		// 	}

		// 	setUcWords(phrase) {
		// 		this._phrase = phrase;
		// 	}

		// 	ucWords() {
		// 		return this._phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
		// 	}

		// }

		// var str = new MyString();
		// str.setReverse('abcde');
		// console.log(str.reverse());
		// str.setUcFirst('abcde');
		// console.log(str.ucFirst());
		// str.setUcWords('abcde abcde abcde');
		// console.log(str.ucWords());
	}

	function countUserSalary() {
		class Workers {
			constructor(name, surname, rate, day) {
				this.name = name;
				this.surname = surname;
				this.rate = rate;
				this.day = day;
			}

			getSalary() {
				return this.rate * this.day;
			}

		}

		var workerOne = new Workers('Ivan', 'Ivanov', 10, 31);
		var workerTwo = new Workers('Taras', 'Petrov', 15, 31);

		console.log(workerOne.name);
		console.log(workerOne.surname);
		console.log(workerOne.rate);
		console.log(workerOne.day);
		console.log(workerOne.getSalary() + workerTwo.getSalary());
	}

	function checkDiffAdress() {
		class Validator {
			constructor(string) {
				this._string = string;
			}

			isEmail(string) {
				return /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(string);
			}

			isDomain(string) {
				return /([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/.test(string);
			}

			isDate(string) {
				return /^\d{2}[.]\d{2}[.]\d{4}$/.test(string);
			}

			isPhone(string) {
				return /^\+?([0-9]{2})\)?[ ]?[(]([0-9]{3})[)]?[ ]?([0-9]{3})?[-. ]([0-9]{2})?[-. ]([0-9]{2})$/.test(string);
			}
		}

		let validator = new Validator();
		
		console.log(validator.isEmail('phphtml@mail.ru'));

		console.log(validator.isDomain('phphtml.net'));

		console.log(validator.isDate('12.05.2020'));

		console.log(validator.isPhone('+38 (050) 057-12-54'));



		// class Validator {
		// 	constructor(email, domain, date, phone) {
		// 		this._email = email;
		// 		this._domain = domain;
		// 		this._date = date;
		// 		this._phone = phone;
		// 	}
			
		// 	setEmail(email) {
		// 		if(this._checkEmail(email)) {
		// 			this._email = email;
		// 		}
		// 	}

		// 	_checkEmail(email) {
		// 		let check = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig;
		// 		if(check.test(email)) {
		// 			console.log('true');
		// 			return true;
		// 		} else {
		// 			console.log('false');
		// 			return false;
		// 		}
		// 	}

		// 	isEmail() {
		// 		return this._email;
		// 	}



		// 	setDomain(domain) {
		// 		if(this._checkDomain(domain)) {
		// 			this._domain = domain;
		// 		}
		// 	}

		// 	_checkDomain(domain) {
		// 		let check = /([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g;
		// 		if(check.test(domain)) {
		// 			return true;
		// 		} else {
		// 			return false;
		// 		}
		// 	}

		// 	isDomain() {
		// 		return this._domain;
		// 	}



		// 	setDate(date) {
		// 		let check = /^\d{2}[.]\d{2}[.]\d{4}$/g;
		// 		if(check.test(date)) {
		// 			this._date = date;
		// 		} else {
		// 			return false;
		// 		}
		// 	}

		// 	isDate() {
		// 		return this._date;
		// 	}



		// 	setPhone(phone) {
		// 		if(this._checkPhone(phone)) {
		// 			this._phone = phone;
		// 		}
		// 	}

		// 	_checkPhone(phone) {
		// 		let check = /^\+?([0-9]{2})\)?[ ]?[(]([0-9]{3})[)]?[ ]?([0-9]{3})?[-. ]([0-9]{2})?[-. ]([0-9]{2})$/g;
		// 		if(check.test(phone)) {
		// 			return true;
		// 		} else {
		// 			return false;
		// 		}
		// 	}

		// 	isPhone() {
		// 		return this._phone;
		// 	}
		// }

		// let validator = new Validator();
		
		// validator.setEmail('phphtml@mail.ru');
		// console.log(validator.isEmail());

		// validator.setDomain('phphtml.net');
		// console.log(validator.isDomain());

		// validator.setDate('12.05.2020');
		// console.log(validator.isDate());

		// validator.setPhone('+38 (050) 057-12-54');
		// console.log(validator.isPhone());
	}

	function getStudentStudy() {
		class User {
			constructor(name, surname) {
				this.name = name;
				this.surname = surname;
			}

			getFullName() {
				return this.name + ' ' + this.surname; 
			}
		}

		class Student extends User {
			constructor(name, surname, year) {
				super(name, surname);
				this.year = year;
			}

			getFullName() {
				return super.getFullName();
			}

			getCourse() {
				let yearNow = new Date();
				return yearNow.getFullYear() - this.year;
			}
		}

		var student = new Student('Ivan', 'Ivanov', 2014);

		console.log(student.name);
		console.log(student.surname);
		console.log(student.getFullName());
		console.log(student.year);
		console.log(student.getCourse());
	}

	function createFromObj() {
		
		class Elem {
			constructor(id) {
				this.elem = document.querySelector(id);
			}

			html(text) {
				this.elem.innerHTML = text;
				return this;
			}

			append(text) {
				let newElem = document.createElement("p");
					newElem.className = "innerText";
					newElem.innerHTML = text;
					this.elem.appendChild(newElem);
					return this;

					// this.elem.append(text);
			}

			prepend(text) {
				let newElem = document.createElement("div");
					newElem.id = "createSpan";
					newElem.innerHTML = text;
					this.elem.insertBefore(newElem, this.elem.childNodes[0]);
					// this.elem.insertBefore(newElem, this.elem.firstElementChild);
					return this;
					
					// this.elem.prepend(text);
			}

			attr(name, value) {
				this.elem.setAttribute(name, value);
				return this;
			}
		}

		let elem = new Elem("#startToWorkObj");

		// console.log(elem.html('!'));
		// console.log(elem.append('?'));
		// console.log(elem.prepend('@'));
		// console.log(elem.attr('class', 'create'));

		//Должны работать цепочки методов:
		elem.html('hello').append('!').prepend('!');
		elem.attr('class', 'www').attr('title', 'hello');

	}

	function workGroupElements() {
		class Elem {
			constructor(selector) {
				this.elem = document.querySelectorAll(selector);
			}

			html(text) {
				for(let i = 0; i < this.elem.length; i++) {
					this.elem[i].innerHTML = text;
					return this;
				}
			}

			append(text) {
				for(let i = 0; i < this.elem.length; i++) {
					let newElem = document.createElement("p");
						newElem.className = "newCreate";
						newElem.innerHTML = text;
						this.elem[i].appendChild(newElem);
					return this;
				}
			}

			prepend(text) {
				for(let i = 0; i < this.elem.length; i++) {
					let newElem = document.createElement("div");
						newElem.className = "secondElem";
						newElem.innerHTML = text;
						this.elem[i].insertBefore(newElem, this.elem[i].childNodes[0]);
					return this;
				}
			}

			attr(name, value) {
				for(let i = 0; i < this.elem.length; i++) {
					this.elem[i].setAttribute(name, value);
					return this;
				}
			}

		}

		var elem = new Elem(".fingerPrint");


		// console.log(elem.html('!'));
		// console.log(elem.append('?'));
		// console.log(elem.prepend('@'));
		// console.log(elem.attr('alt', 'create'));

		//Должны работать цепочки методов:
		elem.html('hello').append('One').prepend('Two');
		elem.attr('alt', 'www').attr('title', 'hello');

	}

	function eachObjects() {
		class User {
			constructor(name, surname, birthday) {
				this.name = name;
				this.surname = surname;
				this.birthday = birthday;
			}

			setBirthday(birthday) {
				this.birthday = birthday;
			}

			isBirthday() {
				return this.birthday;
			}
		}

		// var user = new User('Igor', 'Victorovich', 1985);
		var user = new User('Igor', 'Victorovich');

		// console.log(user.name);
		// console.log(user.surname);
		user.setBirthday(1985);
		console.log(user.isBirthday());

		for( var prop in user) {
			console.log(prop + ' - ' + user[prop]);
		}
	}

	function createRactangle() {
		class Rectangle {
			constructor(width, height) {
				var box = document.getElementById("boxRectangleObj");
				this.elem = document.createElement("div");
					
					this.setWidth(width);
					this.setHeight(height);

					this.elem.style.border = '1px solid blue';
					box.appendChild(this.elem);
			}

			setWidth(width) {
				this.elem.style.width = width + 'px';
			}
			getWidth() {
				return parseInt(this.elem.style.width);
			}

			setHeight(height) {
				this.elem.style.height = height + 'px';
			}
			getHeight() {
				return parseInt(this.elem.style.height);
			}
		}

		var rectOne = new Rectangle(200, 150);

		rectOne.setWidth(250);
		rectOne.setHeight(250);
		console.log(rectOne.getWidth());
		console.log(rectOne.getHeight());

		var rectTwo = new Rectangle(100, 100);
	}

})();