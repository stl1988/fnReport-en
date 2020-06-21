function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl,theData)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST",theUrl,false); // false for synchronous request
	
    xmlHttp.send(theData);
    return xmlHttp.responseText;
}

function httpGet2(theUrl,header,value)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.setRequestHeader(header,value);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost2(theUrl,theData,header,value)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST",theUrl,false); // false for synchronous request
	xmlHttp.setRequestHeader(header,value);
    xmlHttp.send(theData);
    return xmlHttp.responseText;
}