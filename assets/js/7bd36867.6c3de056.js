"use strict";(self.webpackChunk_assetpack_docs=self.webpackChunk_assetpack_docs||[]).push([[996],{5393:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var r=s(1085),i=s(1184),n=s(4944);const d={sidebar_position:7},l="TexturePacker",o={id:"guide/pipes/texture-packer",title:"TexturePacker",description:"AssetPack plugin for generating texture atlases using sharp.",source:"@site/docs/guide/pipes/texture-packer.mdx",sourceDirName:"guide/pipes",slug:"/guide/pipes/texture-packer",permalink:"/assetpack/docs/guide/pipes/texture-packer",draft:!1,unlisted:!1,editUrl:"https://github.com/pixijs/assetpack/tree/main/packages/docs/docs/guide/pipes/texture-packer.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guide",previous:{title:"Spine",permalink:"/assetpack/docs/guide/pipes/spine"},next:{title:"Webfonts",permalink:"/assetpack/docs/guide/pipes/webfont"}},c={},a=[{value:"Example",id:"example",level:2},{value:"API",id:"api",level:2},{value:"Tags",id:"tags",level:2},{value:"Texture Packer Compress",id:"texture-packer-compress",level:2},{value:"Example",id:"example-1",level:3},{value:"API",id:"api-1",level:3},{value:"Tags",id:"tags-1",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"texturepacker",children:"TexturePacker"}),"\n",(0,r.jsx)(t.p,{children:"AssetPack plugin for generating texture atlases using sharp."}),"\n",(0,r.jsxs)(t.p,{children:["If you are using the ",(0,r.jsx)(t.a,{href:"/docs/guide/pipes/mipmap",children:"mipmap"})," plugin you will want to pass the same options to the ",(0,r.jsx)(t.code,{children:"texturePacker"})," plugin as you are to the ",(0,r.jsx)(t.code,{children:"mipmap"})," plugin."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This plugin is designed to work with the spritesheet format PixiJS uses.\nIf you are using a different library you may need to convert the output."})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.qH,{image:"texture-packer/tps-mip"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { texturePacker } from "@assetpack/core/texture-packer";\n\nexport default {\n  ...\n  pipes: [\n    ...\n    texturePacker({\n      texturePacker: {\n        padding: 2,\n        nameStyle: "relative",\n        removeFileExtension: false,\n      },\n      resolutionOptions: {\n        template: "@%%x",\n        resolutions: { default: 1, low: 0.5 },\n        fixedResolution: "default",\n        maximumTextureSize: 4096,\n      },\n    })\n  ]\n};\n'})}),"\n",(0,r.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:"Options for generating texture atlases."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.textureFormat"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"png|jpg"})}),(0,r.jsxs)(t.td,{children:["The format of the texture atlas file.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"png"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.padding"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The padding between sprites in the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"2"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.fixedSize"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsxs)(t.td,{children:["Whether the texture atlas should be a fixed size.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.powerOfTwo"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsxs)(t.td,{children:["Whether the texture atlas should be a power of two.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.width"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The width of the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"1024"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.height"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The height of the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"1024"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.allowTrim"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsxs)(t.td,{children:["Whether the texture atlas should allow trimming.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"true"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.allowRotation"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsxs)(t.td,{children:["Whether the texture atlas should allow rotation.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"true"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.alphaThreshold"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The alpha threshold for the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"0.1"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.scale"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The scale of the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"1"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.resolution"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The resolution of the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"1"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.nameStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"short|relative"})}),(0,r.jsxs)(t.td,{children:["The name style of the texture atlas.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"relative"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"texturePacker.removeFileExtension"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsxs)(t.td,{children:["Whether the file extension should be removed.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resolutionOptions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:"Options for generating resolutions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resolutionOptions.template"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["A template for denoting the resolution of the images.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"@%%x"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resolutionOptions.resolutions"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsxs)(t.td,{children:["An object containing the resolutions that the images will be resized to.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"{ default: 1, low: 0.5 }"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resolutionOptions.fixedResolution"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["A resolution used if the fix tag is applied. Resolution must match one found in resolutions.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"default"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resolutionOptions.maximumTextureSize"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsxs)(t.td,{children:["The maximum size a sprite sheet can be before its split out.",(0,r.jsx)("br",{}),"Defaults to ",(0,r.jsx)(t.code,{children:"4096"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"tags",children:"Tags"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Tag"}),(0,r.jsx)(t.th,{children:"Folder/File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tps"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"folder"})}),(0,r.jsx)(t.td,{children:"If present the folder will be processed by Texture Packer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jpg"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"folder"})}),(0,r.jsx)(t.td,{children:"If present the spritesheet will be saved as a jpg."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fix"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"folder"})}),(0,r.jsx)(t.td,{children:"If present the spritesheet will be fixed to a specific resolution."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"texture-packer-compress",children:"Texture Packer Compress"}),"\n",(0,r.jsxs)(t.p,{children:["To compress the texture atlases you can use the ",(0,r.jsx)(t.code,{children:"texturePackerCompress"})," plugin. This plugin uses the Sharp library to compress images into different formats, such as JPEG, PNG, WebP, and AVIF. This helps reduce file sizes while maintaining image quality, ensuring faster load times and better performance."]}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.qH,{image:"texture-packer/tps-compress"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { compress } from "@assetpack/core/image";\nimport { compress } from "@assetpack/core/texture-packer";\n\n// these options are the default values, all options shown here are optional\nconst options = {\n  jpg: {},\n  png: { quality: 90 },\n  webp: { quality: 80, alphaQuality: 80, },\n  avif: false,\n};\n\nexport default {\n  ...\n  pipes: [\n    ...\n    compress(options),\n    texturePackerCompress(options),\n  ]\n};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"api-1",children:"API"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/guide/pipes/compress",children:"Compression API"})," for more information."]}),"\n",(0,r.jsxs)(t.p,{children:["You will want to make sure you are passing the same options to the ",(0,r.jsx)(t.code,{children:"compress"})," plugin as you are to the ",(0,r.jsx)(t.code,{children:"texturePackerCompress"})," plugin."]}),"\n",(0,r.jsx)(t.h3,{id:"tags-1",children:"Tags"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Tag"}),(0,r.jsx)(t.th,{children:"Folder/File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"nc"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"folder"})}),(0,r.jsx)(t.td,{children:"If present the atlas will not be compressed."})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4944:(e,t,s)=>{s.d(t,{qH:()=>l});var r=s(4041),i=s(1085);const n=e=>{let{toggleImage:t,showImage1:s}=e;return(0,i.jsx)("div",{style:{width:"100%"},children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",padding:"10px"},children:[(0,i.jsx)("p",{style:{margin:"0 10px"},children:s?"Original":"Processed"}),(0,i.jsx)("div",{onClick:t,style:{position:"relative",width:"60px",height:"30px",backgroundColor:"hsl(225 6% 13%)",borderRadius:"15px",cursor:"pointer",transition:"background-color 0.3s",border:"2px solid #696969"},children:(0,i.jsx)("div",{style:{position:"absolute",top:"3px",left:s?"5px":"32px",width:"20px",height:"20px",backgroundColor:s?"var(--ifm-color-secondary)":"var(--ifm-color-primary)",borderRadius:"50%",transition:"left 0.3s"}})})]})})},d=e=>{let{image:t,primaryBoxShadow:s}=e;return(0,i.jsx)("div",{style:{width:"100%",height:"100%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"},children:(0,i.jsx)("img",{src:t,alt:"Input Image",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"12px",boxShadow:s?"0 0 20px hsla(340, 70%, 44%, 0.5)":"0 0 20px hsla(192, 84%, 40%, 0.5)"}})})},l=e=>{let{image:t,height:s}=e;const[l,o]=(0,r.useState)(!0);s??=350;const c=`/assetpack/screenshots/${t}.png`,a=`/assetpack/screenshots/${t}-pro.png`;return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",paddingBottom:"24px"},children:[(0,i.jsx)(n,{toggleImage:()=>{o(!l)},showImage1:l}),(0,i.jsxs)("div",{style:{position:"relative",pointerEvents:"none",width:"100%",height:s},children:[(0,i.jsx)("div",{style:{transition:"opacity 0.5s ease-in-out",opacity:l?1:0,position:"absolute",width:"100%",height:"100%"},children:(0,i.jsx)(d,{image:c,primaryBoxShadow:!1})}),(0,i.jsx)("div",{style:{transition:"opacity 0.5s ease-in-out",opacity:l?0:1,position:"absolute",width:"100%",height:"100%"},children:(0,i.jsx)(d,{image:a,primaryBoxShadow:!0})})]})]})}},1184:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var r=s(4041);const i={},n=r.createContext(i);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);