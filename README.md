# 植物大战僵尸Js版v1.6
基于原版修复部分代码 <br/>
演示地址：https://www.cloudnom.tk <br/>
示例： <br/>
1、配置nginx
```
server{
    listen 80;  # 指定端口，nginx默认端口为80
    server_name domain.com;  # 指定域名
    location / {
        root /usr/share/nginx/html/NewPvzJs-v1.6;  # 指定静态网站根目录
    }
}
```
2、下载静态网站文件
```
cd /usr/share/nginx/html
```
```
git clone https://github.com/miles-lin/NewPvzJs-v1.6.git
```
3、重新加载nginx配置文件
```
nginx -s reload
```
预览图：
![image](/预览图/主页.png)
![image](/预览图/冒险模式.png)
![image](/预览图/迷你游戏.png)
原著地址：http://www.lonelystar.org/
原著演示地址：http://lonelystar.alldnet.com/newpvz/
