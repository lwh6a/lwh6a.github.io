(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{430:function(t,e,n){"use strict";n.r(e);var s=n(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#user  nobody;\nworker_processes  1;\n\n# 错误日志\nerror_log  /logs/error.log;\nerror_log  /logs/error.log  notice;\nerror_log  /logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\t\n\t# 日志格式\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\t# 访问日志\n    access_log  /logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n\t# 80强转443 HTTPS\n\tserver {\n\t\tlisten 80;\n\t\tserver_name *.db117.top;\n\t\treturn 301 https://$http_host$request_uri;\n\t}\n\n    # HTTPS server\n    #\n    server {\n        listen       443 ssl;\n        # 服务名称\n        server_name *.db117.top;\n\t\t\n\t\t# 秘钥\n        ssl_certificate      /ssl/fullchain.crt;\n        ssl_certificate_key  /ssl/private.key;\n\n\t\t# 回话缓存\n\t\tssl_session_cache \t shared:SSL:10m;\n\t\t# 回话超时时间\n\t\tssl_session_timeout \t10m;\n\n        ssl_prefer_server_ciphers  \ton;\n\t\tssl_protocols TLSv1.1 TLSv1.2;\n\t\tssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n\n       location / {\n            proxy_pass http://homepage:8080;\n       }\n    }\n\n}\n\n')])])]),n("h4",{attrs:{id:"http-转-https"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-转-https"}},[t._v("#")]),t._v(" http 转 https")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 80强转443 HTTPS\n\tserver {\n\t\tlisten 80;\n\t\tserver_name *.db117.top;\n\t\treturn 301 https://$http_host$request_uri;\n\t}\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);