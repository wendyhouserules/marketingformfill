<script>
function setMarketingCookies() {
    var referrer = document.referrer;
    var currentHostname = window.location.hostname;
    var params = new URLSearchParams(window.location.search);
    var utmSource = params.get('utm_source');
    var utmMedium = params.get('utm_medium');
    var utmCampaign = params.get('utm_campaign');
    var source = '';
    var medium = '';
    var campaign = '';
    var mreferrer = '';

    // Default values based on referrer
    if (referrer && !referrer.includes(currentHostname)) {
        source = new URL(referrer).hostname;
        medium = 'referral';
        mreferrer = referrer;

        // Check for specific referrers
        if (referrer.includes("google")) {
            source = 'google';
            medium = params.get('gclid') ? 'cpc' : 'organic';
        } else if (referrer.includes("bing")) {
            source = 'bing';
            medium = 'organic';
        } else if (referrer.includes("facebook.com") || referrer.includes("fb.com")) {
            source = 'facebook';
            medium = utmCampaign ? 'paid social' : 'social';
        } else if (referrer.includes("twitter.com")) {
            source = 'twitter';
            medium = 'social';
        } else if (referrer.includes("linkedin.com")) {
            source = 'linkedin';
            medium = 'social';
        } else if (referrer.includes("youtube.com")) {
            source = 'youtube';
            medium = 'social';
        } else if (referrer.includes("instagram.com")) {
            source = 'instagram';
            medium = 'social';
        } else if (referrer.includes("pinterest.com")) {
            source = 'pinterest';
            medium = 'social';
        } else if (referrer.includes("reddit.com")) {
            source = 'reddit';
            medium = 'social';
        } else if (referrer.includes("tumblr.com")) {
            source = 'tumblr';
            medium = 'social';
        } else if (referrer.includes("quora.com")) {
            source = 'quora';
            medium = 'social';
        } else if (referrer.includes("yahoo.com")) {
            source = 'yahoo';
            medium = 'organic';
        } else if (referrer.includes("duckduckgo.com")) {
            source = 'duckduckgo';
            medium = 'organic';
        } else if (referrer.includes("baidu.com")) {
            source = 'baidu';
            medium = 'organic';
        } else if (referrer.includes("yandex.com")) {
            source = 'yandex';
            medium = 'organic';
        } else if (!referrer) {
            source = 'direct';
            medium = 'none';
        }
        // Add more referrers as needed

        // Override with UTM parameters if they exist
        if (utmSource) source = utmSource;
        if (utmMedium) medium = utmMedium;
        if (utmCampaign) campaign = utmCampaign;

        // Set cookies
        setCookie("marketingSource", source, 30);
        setCookie("marketingMedium", medium, 30);
        setCookie("marketingReferrer", mreferrer, 30);
        setCookie("marketingCampaign", campaign, 30);

    } 
}

function setCookie(name, value, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;domain=.jkeducate.co.uk;SameSite=Lax";
}

setMarketingCookies();
</script>