window.onload = onpageload;

var TWO_BEER_EMOJI = "\ud83c\udf7b";

function onpageload()
{
    logGoogleAnalytics();
    dillydilly();
    redirectToPitOfMisery();
}

function dillydilly()
{
    // Dilly Dilly
    alert(TWO_BEER_EMOJI + " DILLY DILLY " + TWO_BEER_EMOJI);
}

function redirectToPitOfMisery()
{
    window.location = "https://www.mlb.com/mariners/ballpark";
}

function logGoogleAnalytics()
{
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', 'UA-113535969-1');
}

function gtag()
{
    dataLayer.push(arguments);
}

function findSurrogatePair(point)
{
    // List of all emoji: 
    // http://unicode.org/emoji/charts/full-emoji-list.html#1f37b

    // assumes point > 0xffff
    var offset = point - 0x10000,
        lead = 0xd800 + (offset >> 10),
        trail = 0xdc00 + (offset & 0x3ff);
    return [lead.toString(16), trail.toString(16)];
}