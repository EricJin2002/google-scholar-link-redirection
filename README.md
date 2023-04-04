# Google Scholar Link Redirection

这是一个把谷歌学术链接重定向到镜像站的油猴脚本。

## 起源

谷歌学术把很多IP地址列入了黑名单，如果使用这些IP地址直接访问会出现以下错误：

```
403. That’s an error.

Your client does not have permission to get URL / from this server. (Client IP address: X.X.X.X)

Please see Google's Terms of Service posted at https://policies.google.com/terms

That’s all we know.
```

注意到网上有不少的谷歌学术镜像站，但是如果每次访问都需要复制链接、修改域名还是很麻烦的。

于是便有了这个脚本，实现了页面自动重定向的功能。

希望有所帮助。

---

2023.04.05更新：

继谷歌学术把我VPS的IP列入黑名单了之后，chatGPT也干了同样的事（提示1020错误）。悲

在搜索解决方案时发现了新一种方法，可以不借助镜像站解决IP被ban的问题，于是在这里mark一下。

简单来说是使用cloudflare的warp服务，详见
- [给节点套上CF的warp，彻底解决access denied error code 1020问题](https://mailberry.com.cn/2023/02/cf-solve-it-completely-error-code-1020-by-warp)
- [科学上网 - 代理技巧 - Cloudflare Warp 原生 IP](https://github.com/haoel/haoel.github.io#94-cloudflare-warp-%E5%8E%9F%E7%94%9F-ip)
