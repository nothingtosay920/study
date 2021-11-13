# HTTP 

超文本传输协议 (HTTP) 是 Internet 上最普遍和最广泛采用的应用协议之一。HTTP的发展与万维网的发展息息相关。

## HTTP 0.9

万维网之父Tim Berners-Lee的人想让他的万维网提案被采用，由此设计了HTTP协议。

- 客户端请求是单个 ASCII 字符串。
- 客户端请求由回车 (CRLF) 终止。
- 服务器响应是一个 ASCII 字符流。
- 服务器响应是一种超文本标记语言 (HTML)。
- 文件传输完成后连接终止。

# HTTP 1.0

基于 Tim Berners-Lee 的初始浏览器原型，国家超级计算应用中心 (NCSA) 的一个团队决定实现他们自己的版本。于是，第一个流行的浏览器诞生了：NCSA Mosaic。在同年，瑞士日内瓦组织了第一次万维网会议，从而促成了万维网联盟 (W3C) 的创建。CompuServe、AOL 和 Prodigy 开始在 1994 年至 1995 年的同一时间段内向公众提供拨号上网服务。由此，互联网热潮已经到来。

新兴 Web 及其在公共 Web 上的用例越来越多的所需功能很快暴露了 HTTP 0.9 的许多基本限制：我们需要一个协议，它不仅可以服务于超文本文档，还可以提供和协商关于请求和响应的更丰富的元数据。web开发人员社区开始进行大量实验性的HTTP实现。

由此，HTTP工作组在1996年发布了RFC1945文件，其中记录了HTTP/1.0 实现的常用规范。但这并不是正式的规范或Internet标准！

### 请求

考虑局限性和HTTP/0.9的 向后兼容性。请求分为简单请求和复杂请求，简单请求即 HTTP0.9格式。如果HTTP/1.0服务器收到简单请求，它必须回应一个HTTP/0.9格式的简单请求。HTTP/1.0的客户端又能力接收完整回应，但不能产生简单请求。

复杂请求规定了3种方法：get，post，head。

请求头：Authorization，From（传入用户的邮箱地址），if-Modified-Since，Referer，User-Agent（用户信息）。

![img](https://daytime-1303889004.cos.ap-nanjing.myqcloud.com/007.png)

### 响应

响应分为简单响应和复杂响应。如果客户端发送HTTP/1.0完整请求后，接收到的回应不是以状态行开头的，客户端将其视为简单回应，并对其进行解析。

状态行依次由协议版本、数字形式的状态代码组成。

响应头：Location（由请求URI指定的资源的位置）、Server(服务器软件信息)、WWW-Authenticate

实体由实体头和实体主体组成。

实体头：Allow（允许的访问方法）、Content-Encoding、Content-Length、Content-type、Expires、Last-Modified

![](https://daytime-1303889004.cos.ap-nanjing.myqcloud.com/008.png)