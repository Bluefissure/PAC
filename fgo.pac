function FindProxyForURL(url, host) {
    var proxy="PROXY 121.250.223.29:12345";
    if (shExpMatch(host, "*.bilibiligame.net") || shExpMatch(host, "mitm.it"))
    {
        return proxy;
    }
    return "DIRECT";
}
