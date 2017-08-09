function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.bilibiligame.net"))
    {
        return "PROXY 121.250.223.38:12345";
    }
    return "DIRECT";
}
