	// Similar functionality as Octokit.JS (https://octokit.github.io/rest.js/v18/)
	function mfetch (url, replacer, header) {
		let GETparams = {}
		for (const property in replacer) {
			if(url.indexOf(`{${property}}`) !== -1){
				url = url.replace(`{${property}}`, replacer[property])
			}else{
				GETparams[property] = replacer[property]
			}
		}
		url = url + '?' + (new URLSearchParams(GETparams)).toString()
		return fetch(url, header)
	}
	
	String.prototype.replaceArray = function(find, replace) {
		var replaceString = this;
		for (var i = 0; i < find.length; i++) {
    			replaceString = replaceString.replace(find[i], replace[i]);
  		}
  		return replaceString;
	}

	// Return modified source code
	async function getModifiedSourceCode () {
		const searchTerms = [], replacementTerms = []
		
		// Get script elem
		let elem = [...document.querySelectorAll('script')].find(elem => elem.src.includes('static/bundles/main_chart.') && elem.src.includes('.js')),
		    
		// Get script raw source code
		sourceCode = await fetch(elem.src).then(response => response.text()),
		    
		// Search for index
		firstIndex = sourceCode.indexOf(`'{"free":{"CHART_STORAGE":{"limit":1}`),
		secondIndex = sourceCode.indexOf(`{}}}'`, firstIndex) + 1 + 4
		    
		// Define search terms
		searchTerms.push(sourceCode.substring(firstIndex, secondIndex))
		
		// Define replacement terms
		replacementTerms.push(`prompt("Please enter your name", "" ) || MODIFIED_JSON_DATA`)
		    
		// Replacement of original source code
		modifiedSourceCode = sourceCode.replaceArray(searchTerms, replacementTerms)
		
		return modifiedSourceCode
	}

	// Push new file to repo
	async function mRun (_token) {
		if(!localStorage.getItem("token") && !_token) localStorage.setItem("token", _token || prompt("Please enter your token", ""));
		const token = _token || localStorage.getItem("token")
		let modifiedSourceCode = await getModifiedSourceCode(),
		randomHexValue = Math.floor(Math.random()*16777215).toString(16),
		fileName = `main_chart-${randomHexValue}.js`
		mfetch(
			atob('aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9tYXJjdXN0YW5zb29uL1BoeXNpY3NFbmdpbmUuanMtMkQvY29udGVudHMve3BhdGh9'), {
			    'owner': "marcustansoon",
			    'repo': "PhysicsEngine.js-2D",
			    'path': `temp/TradingView/${fileName}`
	  		},{
			    'method': 'PUT',
			    'body': JSON.stringify({
				    'message': `Create ${fileName} - automated`,
				    'content': btoa(unescape(encodeURIComponent(modifiedSourceCode)))
	    		}),
		  		'headers': {
		    		'Authorization': `token ${token}`
		  		}
			}
		)
		.then(res => res.json())
		.then(json => console.log(json))
		console.log('Creating ' + fileName + ' ...')
	}
