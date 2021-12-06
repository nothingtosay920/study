# QUIC(Quick UDP Internet Connection)

谷歌推出的一套基于UDP的传输协议，它实现了TCP + HTTPS + HTTP/2的功能，目的是保证可靠性的同时降低网络延迟。
从上图可以看出来，QUIC运行在不可靠的 UDP 协议之上。但是，这并不意味着 QUIC 本身也是不可靠的！在某种程度上，QUIC 应该被看作是一个 TCP 2.0。它包括 TCP 的所有特性（可靠性、拥塞控制、流量控制、排序等）的最佳版本，以及更多其他特性。QUIC还完全集成了TLS，不允许未加密的连接。

