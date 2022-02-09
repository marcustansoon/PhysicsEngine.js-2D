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
		let elem = [...document.querySelectorAll('script')].find(elem => elem.src.includes('/static/js/main.')),
		    
		// Get script raw source code
		sourceCode = await fetch(elem.src).then(response => response.text()),
		    
		// Search for index
		firstIndex = sourceCode.indexOf(`'[{"id":"Users","title":"Number of Users"`),
		secondIndex = sourceCode.indexOf(`'),oI`, firstIndex) + 1
		
		// Define search terms
		searchTerms.push(sourceCode.substring(firstIndex, secondIndex))
		searchTerms.push(`CUSTOM_SCRIPT_CHARACTER_LIMIT:500`)
		
		// Define replacement terms
		let temp = sourceCode.substring(firstIndex, secondIndex);
		temp = temp.replaceAll('bronze', 'abcdef')
		temp = temp.replaceAll('professional', 'bronze')
		replacementTerms.push(temp)
		replacementTerms.push(`CUSTOM_SCRIPT_CHARACTER_LIMIT:5000`)
		    
		// Replacement of original source code
		modifiedSourceCode = sourceCode.replaceArray(searchTerms, replacementTerms)
		
		return modifiedSourceCode
	}
	
	// Push new file to repo
	async function mRun (_token) {
		if(!localStorage.getItem("token") || localStorage.getItem("token") === 'null' || _token) localStorage.setItem("token", _token || prompt("Please enter your token", ""))
		const token = _token || localStorage.getItem("token")
		let modifiedSourceCode = await getModifiedSourceCode(),
		randomHexValue = Math.floor(Math.random()*16777215).toString(16),
		fileName = `main.${randomHexValue}.chunk.js`
		mfetch(
			atob('aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9tYXJjdXN0YW5zb29uL1BoeXNpY3NFbmdpbmUuanMtMkQvY29udGVudHMve3BhdGh9'), {
			    'owner': "marcustansoon",
			    'repo': "PhysicsEngine.js-2D",
			    'path': `temp/Requestly-IO/${fileName}`
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
