"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[2987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const s={},i="SPI",r={unversionedId:"design-document/spi",id:"design-document/spi",title:"SPI",description:"Introduction",source:"@site/docs/design-document/08-spi.md",sourceDirName:"design-document",slug:"/design-document/spi",permalink:"/docs/design-document/spi",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/design-document/08-spi.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CloudEvents Integration",permalink:"/docs/design-document/cloudevents"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"eventmesh-spi module",id:"eventmesh-spi-module",level:2},{value:"EventMeshSPI",id:"eventmeshspi",level:3},{value:"EventMeshExtensionFactory",id:"eventmeshextensionfactory",level:3},{value:"ExtensionClassLoader",id:"extensionclassloader",level:3},{value:"SPI use case",id:"spi-use-case",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spi"},"SPI"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In order to improve scalability\uff0cEventMesh introduce the SPI\uff08Service Provider Interface\uff09mechanism, which can help to automatically find the concrete implementation\nclass of the extended interface at runtime and load it dynamically. In EventMesh, all extension modules are implemented by using plugin.\nUser can develop custom plugins by simply implementing extended interfaces, and select the plugin to be run at runtime by simply declare at configuration."),(0,o.kt)("h2",{id:"eventmesh-spi-module"},"eventmesh-spi module"),(0,o.kt)("p",null,"The implementation of SPI is at eventmesh-spi module, there are three main classes ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshSPI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshExtensionFactory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtensionClassLoader"),"."),(0,o.kt)("h3",{id:"eventmeshspi"},"EventMeshSPI"),(0,o.kt)("p",null,"EventMeshSPI is an SPI declaration annotation, all extended interface that want to be implemented should be declared by @EventMeshSPI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.TYPE})\npublic @interface EventMeshSPI {\n    /**\n     * If true, the spi instance is singleton\n     */\n    boolean isSingleton() default false;\n}\n")),(0,o.kt)("p",null,"Use annotation to declare the interface is an SPI extended interface can improve the readability of the code.\nOn the other hand, @EventMeshSPI contains a isSingleton attribute which used to declare whether the extension instance is a singleton.\nIf this attribute is true, that means the instance of this interface will be singleton."),(0,o.kt)("h3",{id:"eventmeshextensionfactory"},"EventMeshExtensionFactory"),(0,o.kt)("p",null,"EventMeshExtensionFactory is a factory used to get the SPI extension instance which contains a static method ",(0,o.kt)("inlineCode",{parentName:"p"},"getExtension(Class<T> extensionType, String extensionName)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public enum EventMeshExtensionFactory {\n    /**\n     * @param extensionType extension plugin class type\n     * @param extensionName extension instance name\n     * @param <T>           the type of the plugin\n     * @return plugin instance\n     */\n    public static <T> T getExtension(Class<T> extensionType, String extensionName) {\n        /* ... */\n    }\n}\n")),(0,o.kt)("p",null,"If you want to get the extension instance, you should use EventMeshExtensionFactory."),(0,o.kt)("h3",{id:"extensionclassloader"},"ExtensionClassLoader"),(0,o.kt)("p",null,"ExtensionClassLoader is used to load extension instance classed, it has two subclass MetaInfExtensionClassLoader and JarExtensionClassLoader."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Load extension class\n * <ul>\n *     <li>{@link MetaInfExtensionClassLoader}</li>\n *     <li>{@link JarExtensionClassLoader}</li>\n * </ul>\n */\npublic interface ExtensionClassLoader {\n    /**\n     * load\n     *\n     * @param extensionType extension type class\n     * @param <T>           extension type\n     * @return extension instance name to extension instance class\n     */\n    <T> Map<String, Class<?>> loadExtensionClass(Class<T> extensionType);\n}\n")),(0,o.kt)("p",null,"MetaInfExtensionClassLoader used to load class from classPath, and JarExtensionClassLoader used to load class from extension jar on the plugin directory.\nIn the future, we might support the implementation to load from the maven repository."),(0,o.kt)("h2",{id:"spi-use-case"},"SPI use case"),(0,o.kt)("p",null,"The following is an example of how to use the SPI to declare a plugin."),(0,o.kt)("p",null,"First, we create an eventmesh-connector-api module, and define the extension interface MeshMQProducer, and we use @EventMeshSPI on the MeshMQProducer,\nwhich indicates the MeshMQProducer is an SPI interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@EventMeshSPI(isSingleton = false)\npublic interface MeshMQProducer extends Producer {\n    /* ... */\n}\n")),(0,o.kt)("p",null,"Then we create an eventmesh-connector-rocketmq module, which contains the concrete implementation named RocketMQProducerImpl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class RocketMQProducerImpl implements MeshMQProducer {\n    /* ... */\n}\n")),(0,o.kt)("p",null,"At the same time, we need to create a file with the full qualified name of the SPI interface under the resource/META-INF/eventmesh directory\nin the eventmesh-connector-rocketmq module."),(0,o.kt)("p",null,"org.apache.eventmesh.api.producer.Producer"),(0,o.kt)("p",null,"The content of the file is the extension instance name and the corresponding instance full class name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"rocketmq=org.apache.eventmesh.connector.rocketmq.producer.RocketMQProducerImpl\n")),(0,o.kt)("p",null,"At this point, an SPI expansion module is complete. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},'EventMeshExtensionFactory.getExtension(MeshMQProducer.class, "rocketmq")')," to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"RocketMQProducerImpl")," instance."))}p.isMDXComponent=!0}}]);