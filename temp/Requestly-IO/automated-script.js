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
		secondIndex = sourceCode.indexOf(`')},`, firstIndex) + 1
		
		// Define search terms
		searchTerms.push(sourceCode.substring(firstIndex, secondIndex))
		searchTerms.push(`CUSTOM_SCRIPT_CHARACTER_LIMIT:500`)
		
		// Define replacement terms
		replacementTerms.push(`'[{"id":"Users","title":"Number of Users","bronze":{"title":"Limited access","enabled":false,"icon":"frown"},"silver":{"title":"Unlimited Users","enabled":true,"icon":"uncheck"},"gold":{"title":"Best for Indie Dev","enabled":true,"icon":"check"},"enterprise":{"title":"Best for Team/Company","enabled":true,"icon":"check"}},{"id":"rules","title":"Rules","bronze":{"title":"50 Rules","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"25 Rules (Max 10 Active)","limit":25,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Rules","limit":10000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Rules","limit":10000,"enabled":true,"icon":"check"}},{"id":"active_rules","title":"Active Rules","bronze":{"title":"50 Active Rules","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"10 Active Rules","limit":10,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Active Rules","limit":10000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Active Rules","limit":10000,"enabled":true,"icon":"check"}},{"id":"favourite_rules","title":"Favourite Rules","bronze":{"title":"50 Favourite Rules","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"10 Favourite Rules","limit":10,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true,"icon":"check"}},{"id":"files","title":"Files","bronze":{"title":"50 Files","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"10 Files","limit":10,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Files","limit":1000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Files","limit":1000,"enabled":true,"icon":"check"}},{"id":"groups","title":"Groups","bronze":{"title":"Limited Groups","enabled":false,"icon":"frown"},"silver":{"title":"Limited Groups","enabled":true,"icon":"frown"},"gold":{"title":"Unlimited Groups","enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Groups","enabled":true,"icon":"check"}},{"id":"shared_lists","title":"Shared Lists","bronze":{"title":"50 Shared Lists","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"10 Shared Lists","limit":10,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true,"icon":"check"}},{"id":"rule_pairs","title":"Rule Pairs","bronze":{"title":"50 Rule Pairs","limit":50,"enabled":true,"icon":"frown"},"silver":{"title":"10 Rule Pairs","limit":10,"enabled":true,"icon":"check"},"gold":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true,"icon":"check"},"enterprise":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true,"icon":"check"}},{"id":"RESPONSE_BODY_CHARACTER_LIMIT","title":"AJAX Response Char Limit","showInComparisonTable":false,"bronze":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true,"icon":"check"},"silver":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true,"icon":"check"},"gold":{"title":"Upto 60,000 Characters AJAX Response","limit":60000,"enabled":true,"icon":"check"},"enterprise":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true,"icon":"check"}},{"id":"export_import","title":"Export & Import Rules","bronze":{"title":"Import & Export Rules","enabled":true,"icon":"frown"},"silver":{"title":"Import & Export Rules","enabled":false,"icon":"frown"},"gold":{"title":"Import & Export Rules","enabled":true,"icon":"check"},"enterprise":{"title":"Import & Export Rules","enabled":true,"icon":"check"}},{"id":"Customer Support","title":"Priority Support","bronze":{"title":"Support","enabled":true,"icon":"frown"},"silver":{"title":"Priority Support","enabled":false,"icon":"frown"},"gold":{"title":"Priority Support (Slack)","enabled":true,"icon":"check"},"enterprise":{"title":"Priority Support (Slack)","enabled":true,"icon":"check"}}]'`)
		replacementTerms.push(`CUSTOM_SCRIPT_CHARACTER_LIMIT:5000`)
		    
		// Replacement of original source code
		modifiedSourceCode = sourceCode.replaceArray(searchTerms, replacementTerms)
		
		return modifiedSourceCode
	}
	
	// Push new file to repo
	async function mRun (_token) {
		if(!localStorage.getItem("token") || localStorage.getItem("token") === 'null' || _token) localStorage.setItem("token", _token || prompt("Please enter your token", ""))
		const token = localStorage.getItem("token")
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
