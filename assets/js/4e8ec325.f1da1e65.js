"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6181],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(2685),o=(n(7378),n(5318));const i={id:"getting-started",title:"Getting Started with Podman Desktop",description:"This blog will help you build and run your first container image on Podman Desktop",authors:"deekay2310",tags:["podman-desktop","getting-started"],keywords:["podman desktop","podman","containers"],hide_table_of_contents:!1},r=void 0,s={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Getting Started with Podman Desktop",description:"This blog will help you build and run your first container image on Podman Desktop",source:"@site/docs/getting-started/2022-08-05-getting-started.md",sourceDirName:"getting-started",slug:"/getting-started/getting-started",permalink:"/docs/getting-started/getting-started",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/getting-started/2022-08-05-getting-started.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"getting-started",permalink:"/docs/tags/getting-started"}],version:"current",frontMatter:{id:"getting-started",title:"Getting Started with Podman Desktop",description:"This blog will help you build and run your first container image on Podman Desktop",authors:"deekay2310",tags:["podman-desktop","getting-started"],keywords:["podman desktop","podman","containers"],hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/docs/Installation/linux-install"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Get Started",id:"get-started",level:2},{value:"1. Build Image",id:"1-build-image",level:3},{value:"2. Create and Run the Container",id:"2-create-and-run-the-container",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Podman Desktop leverages ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io/"},"Podman Engine")," to provide a lightweight and daemon-less container management tool. It enables you to easily work with containers from your local environment without running container management commands. "),(0,o.kt)("p",null,"Podman Desktop brings all the capabilities of Podman with the added advantage of a GUI which is becoming increasingly powerful and user-friendly. It is super easy to adapt to. With this tutorial, you will be ready to roll and work with your containerized applications in no time."),(0,o.kt)("p",null,"In this tutorial, I am working with Podman Desktop v0.0.5."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In order to work with Podman Desktop, you firstly require the latest version of Podman Desktop. Depending on your Operating System, you can download it from ",(0,o.kt)("a",{parentName:"p",href:"https://podman-desktop.io/downloads"},"this")," page."),(0,o.kt)("p",null,"Next, you need the latest version of Podman Engine installed on your computer. When started, Podman Desktop looks for the Podman Engine in the system and will prompt you to install the same if it is not present. You can read more about how to set up the Podman Desktop and Podman Engine in the Installation guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/macos-install"},"here"),"."),(0,o.kt)("p",null,"Once everything is set up, you are ready to go!"),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"When you open the Podman Desktop application, you will be greeted with the home screen. It will show you a toggle button that says \u2018Initialize Podman\u2019. And as mentioned, it initializes the Podman Engine and creates a Podman Machine for you. Click on it to create a Podman Machine. Within no time, your Podman Machine will be created. This is equivalent to running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"podman machine init"),". You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-machine-init.1.html"},"here"),"."),(0,o.kt)("p",null,"Next, you need to start the Podman Machine by toggling the button that says \u2018Run Podman\u2019. This is equivalent to running ",(0,o.kt)("inlineCode",{parentName:"p"},"podman machine start"),". You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-machine-start.1.html"},"here"),". "),(0,o.kt)("p",null,"Once it says \u201cPodman is running\u201d, you are ready to build images and run containers! "),(0,o.kt)("p",null,"Our first step will be to build an image for our application followed by running the image to create the container."),(0,o.kt)("h3",{id:"1-build-image"},"1. Build Image"),(0,o.kt)("p",null,"For this section of the tutorial, I have created my Containerfile using the Red Hat Universal Base Image. You can also write your own Containerfiles and build images from it using the Red Hat Universal Base Image (UBI). Read more about it in ",(0,o.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2021/11/30/build-lightweight-and-secure-container-images-using-rhel-ubi"},"this blog"),". Once you have your Containerfile ready, follow the steps below to build your own image."),(0,o.kt)("p",null,"1) In order to load the Containerfile to Podman Desktop and build the Image, we browse to the \u201cImages\u201d section and click on the \u201cBuild Image\u201d button. This opens a tab within which you can select the path where your Containerfile is present."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1.1",src:n(8310).Z,width:"2880",height:"1622"})),(0,o.kt)("p",null,"2) Click on the placeholder \u201cSelect Containerfile to build\u201d, browse to the folder where the Containerfile is present and select the file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1.2",src:n(9358).Z,width:"2880",height:"1622"})),(0,o.kt)("p",null,"3) Go ahead and type in any name for your image below but Podman Desktop will have something generated by default in case you want to skip it. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1.3",src:n(1319).Z,width:"2880",height:"1622"})),(0,o.kt)("p",null,"4) Click on \u2018Build\u2019 and that\u2019s it. You will see each instruction from your Containerfile being executed in order to build the image. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1.4",src:n(7884).Z,width:"2880",height:"1622"})),(0,o.kt)("p",null,"5) Once completed, Click on \u201cDone\u201d above to continue. You will see that your image has been added to the Images section of Podman Desktop. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1.5",src:n(5645).Z,width:"2880",height:"1622"})),(0,o.kt)("h3",{id:"2-create-and-run-the-container"},"2. Create and Run the Container"),(0,o.kt)("p",null,"Following are the steps to create and start a container from the image."),(0,o.kt)("p",null,"1) Once the image is built, you can see its name (in our case, \u2018my-custom-image\u2019) and other details in the Images section. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.1",src:n(302).Z,width:"2880",height:"1054"})),(0,o.kt)("p",null,"2) Simply hover over the name of the image and you will see a list of buttons to the right. In case you are confused about the action of each button, just take the cursor over each button and wait for it to tell the action it does. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.2",src:n(2309).Z,width:"2880",height:"1054"})),(0,o.kt)("p",null,"3) Upon clicking the \u2018Run Image\u2019 button, a window will appear and it will ask you to Create the container by giving it a name and mapping the desired port number. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.3",src:n(2170).Z,width:"2880",height:"1368"})),(0,o.kt)("p",null,"4) Once you click on \u201cStart Container\u201d, you will see some changes in the Containers section. Upon hovering your cursor over the newly created container, you will see a set of buttons allowing you to work with it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.4",src:n(7945).Z,width:"2880",height:"1368"})),(0,o.kt)("p",null,"5) To check if it is running our application as desired, I will open the URL in the browser (in this case, localhost:8080 because that\u2019s where we mapped our port). This can be done by clicking on the \u2018Open Browser\u2019 button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.5",src:n(9708).Z,width:"2880",height:"1368"})),(0,o.kt)("p",null,"6) As we can see, it returns {\u201cHello\u201d:\u201dWorld\u201d} as intended. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2.6",src:n(2289).Z,width:"2880",height:"1368"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"So that\u2019s it! It is that simple to get started with Podman Desktop for building and running your first container image!"))}c.isMDXComponent=!0},8310:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.1-1291877ef9f406d5a1f3460d6dcc052d.png"},9358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.2-fd99b4500fc20fee706c84f4e59c3ff3.png"},1319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.3-e8371a7b76d99545af069f5a613cddf3.png"},7884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.4-600f8ae46e4e7a8d1eca0733071fa10c.png"},5645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.5-50d521ca688a8b3b16bf07609e1f15d2.png"},302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.1-27a75e134f0eb038fb6dab73436810e8.png"},2309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.2-90e9f1607af0147ab9d3653b29c009de.png"},2170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.3-a548da08a4ffcd6952e4c6e3c9e878f1.png"},7945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.4-afc5ce034b3ee53eee232550195df7ce.png"},9708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.5-a912781cf72b27268f86fd39926f9815.png"},2289:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.6-b40e26cb8b4ad0a1f6ce8e47afd2dd67.png"}}]);