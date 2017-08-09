function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.bilibiligame.com"))
	{
		return "PROXY 121.250.223.38:12345";
	}
	return "DIRECT";
}
