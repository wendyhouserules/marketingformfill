# Marketing Attribution Form Fill
Javascript snippets to fill hidden form fields with marketing attribution data GA Client ID, source and medium using referrer logic, campaign, and referrer using Google Tag Manager.

Step by step guide:

1.
Create 1st party cookie variables in GTM and set the COokie Name values to the following:
  MarketingSource: marketingSource
  MarketingMedium: marketingMedium
  MarketingReferrer: marketingReferrer
  MarketingCampaign: marketingCampaign
  GA Cookie: _ga
  
2.
Create a custom Javascript variable called GA Client ID and add this code into it:

// Grabs the client ID from our 'GA Cookie' 1st party cookie variable and extracts the Client ID
function() {
  return {{GA Cookie}}.substring(6)
}

3.
Create a Custom HTML tag and add in the code in set-marketing-cookies.js
Set the trigger to fire on 'DOM Ready'
This should now drop cookies with source, medium, campaign, and referrer information.
You can check in the browser by using dev tools 'Inspect' and going to the 'Application' tab

5.
Add hidden form fields to your form with the following IDs:
- msource
- mmedium
- mreferrer
- mcampaign
- gaclientid

5.
Create a Custom HTML tag and add in the code in form-fill-marketing-vars.js
Set the trigger to fire on 'Window Loaded'


Mission Complete - You now have marketing attribution data in your form submissions


