(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(a,t,e){"use strict";e.r(t);var s=e(25),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"更新你的apt源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新你的apt源"}},[a._v("#")]),a._v(" 更新你的apt源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get update\n")])])]),e("h2",{attrs:{id:"安装包以允许apt通过https使用存储库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装包以允许apt通过https使用存储库"}},[a._v("#")]),a._v(" 安装包以允许apt通过HTTPS使用存储库")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n")])])]),e("h2",{attrs:{id:"添加docker的官方gpg密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加docker的官方gpg密钥"}},[a._v("#")]),a._v(" 添加Docker的官方GPG密钥")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n\nsudo apt-key fingerprint 0EBFCD88\n")])])]),e("h2",{attrs:{id:"使用以下命令设置稳定存储库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用以下命令设置稳定存储库"}},[a._v("#")]),a._v(" 使用以下命令设置稳定存储库")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n\n\n')])])]),e("h2",{attrs:{id:"安装docker-ce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-ce"}},[a._v("#")]),a._v(" 安装docker-ce")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get update\n\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n")])])]),e("h2",{attrs:{id:"查看是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看是否安装成功"}},[a._v("#")]),a._v(" 查看是否安装成功")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker --version\n")])])]),e("h2",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[a._v("#")]),a._v(" 卸载")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get remove docker-ce docker-ce-cli containerd.io\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);