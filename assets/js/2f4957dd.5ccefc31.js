"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[2503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="Observe Metrics with Prometheus",s={unversionedId:"metrics-tracing/prometheus",id:"metrics-tracing/prometheus",title:"Observe Metrics with Prometheus",description:"Prometheus",source:"@site/docs/metrics-tracing/01-prometheus.md",sourceDirName:"metrics-tracing",slug:"/metrics-tracing/prometheus",permalink:"/docs/metrics-tracing/prometheus",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/metrics-tracing/01-prometheus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC Protocol",permalink:"/docs/sdk-java/grpc"},next:{title:"Collect Trace with Zipkin",permalink:"/docs/metrics-tracing/zipkin"}},c={},p=[{value:"Prometheus",id:"prometheus",level:2},{value:"Edit Prometheus Configuration",id:"edit-prometheus-configuration",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observe-metrics-with-prometheus"},"Observe Metrics with Prometheus"),(0,o.kt)("h2",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus")," is an open-source system monitoring and alerting toolkit that collects and stores the metrics as time-series data. EventMesh exposes a collection of metrics data that could be scraped and analyzed by Prometheus. Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/first_steps/"},'the "First steps with Prometheus" tutorial')," to download and install the latest release of Prometheus."),(0,o.kt)("h2",{id:"edit-prometheus-configuration"},"Edit Prometheus Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime/conf/prometheus.yml")," configuration file specifies the port of the metrics HTTP endpoint. The default metrics port is ",(0,o.kt)("inlineCode",{parentName:"p"},"19090"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"eventMesh.metrics.prometheus.port=19090\n")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"the Prometheus configuration guide")," to add the EventMesh metrics as a scrape target in the configuration file. Here's the minimum configuration that creates a job with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh")," and the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:19090"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'scrape_configs:\n  - job_name: "eventmesh"\n    static_configs:\n      - targets: ["localhost:19090"]\n')),(0,o.kt)("p",null,"Please navigate to the Prometheus dashboard (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),") to view the list of metrics exported by EventMesh, which are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh_"),"."))}u.isMDXComponent=!0}}]);