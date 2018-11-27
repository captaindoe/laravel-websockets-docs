(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"starting-the-websocket-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-websocket-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Starting the WebSocket Server")]),t._v(" "),s("p",[t._v("Once you have configured your WebSocket clients and Pusher settings, you can start the Laravel WebSocket server by issuing the artisan command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan websocket:start\n")])])]),s("h2",{attrs:{id:"using-a-different-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-different-port","aria-hidden":"true"}},[t._v("#")]),t._v(" Using a different port")]),t._v(" "),s("p",[t._v("The default port of the Laravel WebSocket server is "),s("code",[t._v("6001")]),t._v(". You may pass a different port to the command using the "),s("code",[t._v("--port")]),t._v(" option.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan websocket:start --port"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("3030\n")])])]),s("p",[t._v("This will start listening on port "),s("code",[t._v("3030")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"restricting-the-listening-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restricting-the-listening-host","aria-hidden":"true"}},[t._v("#")]),t._v(" Restricting the listening host")]),t._v(" "),s("p",[t._v("By default, the Laravel WebSocket server will listen on "),s("code",[t._v("0.0.0.0")]),t._v(" and will allow incoming connections from all networks. If you want to restrict this, you can start the server with a "),s("code",[t._v("--host")]),t._v(" option, followed by an IP.")]),t._v(" "),s("p",[t._v("For example, by using "),s("code",[t._v("127.0.0.1")]),t._v(", you will only allow WebSocket connections from localhost.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan websocket:start --host"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("120.0.0.1\n")])])]),s("h2",{attrs:{id:"keeping-the-socket-server-running-with-supervisord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keeping-the-socket-server-running-with-supervisord","aria-hidden":"true"}},[t._v("#")]),t._v(" Keeping the socket server running with supervisord")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("websocket:start")]),t._v(" daemon needs to always be running in order to accept connections. This is a prime use case for "),s("code",[t._v("supervisor")]),t._v(", a task runner on Linux.")]),t._v(" "),s("p",[t._v("First, make sure "),s("code",[t._v("supervisor")]),t._v(" is installed.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# On Debian / Ubuntu")]),t._v("\napt "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" supervisor\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# On Red Hat / CentOS")]),t._v("\nyum "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" supervisor\nsystemctl "),s("span",{attrs:{class:"token function"}},[t._v("enable")]),t._v(" supervisor\n")])])]),s("p",[t._v("Once installed, add a new process that "),s("code",[t._v("supervisor")]),t._v(" needs to keep running. You place your configurations in the "),s("code",[t._v("/etc/supervisor/conf.d")]),t._v(" (Debian/Ubuntu) or "),s("code",[t._v("/etc/supervisord.d")]),t._v(" (Red Hat/CentOS) directory.")]),t._v(" "),s("p",[t._v("Within that directory, create a new file called "),s("code",[t._v("websockets.conf")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("program:websockets"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ncommand"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/php /home/laravel-echo/laravel-websockets/artisan websocket:start\nnumprocs"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1\nautostart"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nautorestart"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("true\nuser"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("laravel-echo\n")])])]),s("p",[t._v("Once created, instruct "),s("code",[t._v("supervisor")]),t._v(" to reload its configuration files (without impacting the already running "),s("code",[t._v("supervisor")]),t._v(" jobs).")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("supervisorctl update\nsupervisorctl start websockets\n")])])]),s("p",[t._v("Your echo server should now be running (you can verify this with "),s("code",[t._v("supervisorctl status")]),t._v("). If it were to crash, "),s("code",[t._v("supervisor")]),t._v(" will automatically restart it.")])])}],!1,null,null,null);r.options.__file="starting.md";e.default=r.exports}}]);