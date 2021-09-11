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

	async function getModifiedSourceCode () {
		const MODIFIED_CONTENT_TO_BE_REPLACED = `prompt("Please enter your name", "" ) || MODIFIED_JSON_DATA`
		// Get script elem
		let elem = [...document.querySelectorAll('script')].find(elem => elem.src.includes('static/bundles/main_chart.') && elem.src.includes('.js')),
		// Get script raw source code
		sourceCode = await fetch(elem.src).then(response => response.text()),
		// Search for index
		firstIndex = sourceCode.indexOf(`'{"free":{"CHART_STORAGE":{"limit":1}`),
		secondIndex = sourceCode.indexOf(`{}}}'`, firstIndex) + 1 + 4,
		originalContentToBeReplaced = sourceCode.substring(firstIndex, secondIndex),
		// Replacement of original source code
		modifiedSourceCode = sourceCode.replace(originalContentToBeReplaced, MODIFIED_CONTENT_TO_BE_REPLACED)
		return modifiedSourceCode
	}

	async function mRun (_token) {
		if(!localStorage.getItem("token")) localStorage.setItem("token", _token || prompt("Please enter your token", ""));
		const token = localStorage.getItem("token")
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
