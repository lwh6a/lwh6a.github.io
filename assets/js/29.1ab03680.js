(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{380:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"xx-perfdisablesharedmem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-perfdisablesharedmem"}},[e._v("#")]),e._v(" -XX:+PerfDisableSharedMem")]),e._v(" "),t("p",[e._v("该参数决定了存储PerfData的内存是不是可以被共享，也就是说不管这个参数设置没设置，jvm在启动的时候都会分配一块内存来存PerfData，只是说这个PerfData是不是其他进程可见的问题，如果设置了这个参数，说明不能被共享，此时其他进程将访问不了该内存，这样一来，譬如我们jps，jstat等都无法工作。默认这个参数是关闭的，也就是默认支持共享的方式")]),e._v(" "),t("h3",{attrs:{id:"xx-useperfdata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xx-useperfdata"}},[e._v("#")]),e._v(" -XX:-UsePerfData")]),e._v(" "),t("p",[e._v("如果关闭了UsePerfData这个参数，那么jvm启动过程中perf memory都不会被创建，默认情况是是打开的")])])}),[],!1,null,null,null);a.default=s.exports}}]);