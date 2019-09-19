

document.addEventListener('DOMContentLoaded', function() {
    const activateButton = document.getElementById('activate');
    activateButton.onclick = function() {
        console.log('thank you andy')

        let bod = document.querySelectorAll('body')
        bod[0].parentNode.style.backgroundColor = 'red';
        bod[1].parentNode.style.backgroundColor = 'red';
        
        // const megaDiv = document.createElement('div')
        // megaDiv.className = 'megaDiv'
        // document.body.append(megaDiv)

    }
  }, false)

  // create a new tab
  // adjust html/css/JS on tab


// NEW TAB VERSION
// {
//     "name": "We all Rule!",
//     "version": "1.0",
//     "manifest_version": 2,
//     "description": "Extension",
//     "content_scripts": [
//         {
//           "matches": ["<all_urls>"],
//           "js": ["./popup.js"]
//         }
//     ],
//     "browser_action": {
//       "default_popup": "popup.html",
//       "default_icon": {
          
//           }  
//       },
  
//       "permissions": [
//           "tabs"
//       ],
  
//       "chrome_url_overrides": {
//           "newtab": "popup.html"
//       }
//   }