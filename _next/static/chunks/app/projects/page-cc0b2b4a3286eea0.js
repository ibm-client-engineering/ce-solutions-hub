(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{9776:function(e,i,n){Promise.resolve().then(n.bind(n,3077))},4044:function(e,i,n){"use strict";var t=n(7437);n(2265);var s=n(8112),o=n(8017),a=n(928),r=n(7143);i.Z=e=>{let{data:i}=e;return(0,t.jsx)("div",{className:"projectTileContainer",children:i.map((e,i)=>(0,t.jsxs)(r.Ohc,{id:e.name,className:"projectTile",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer",renderIcon:s.GI,children:[(0,t.jsx)("h6",{className:"projectTile__title",children:e.title}),(0,t.jsx)("p3",{className:"projectTile__description",children:e.description}),(0,t.jsxs)(r.X2j,{className:"project__row",children:[(0,t.jsx)(r.sgG,{className:"icon__column",lg:1,children:(0,t.jsx)(o.Em,{className:"enterprise_icon"})}),(0,t.jsx)(r.sgG,{className:"tag__column",children:(0,t.jsx)(r.Vp9,{className:"projectTile__industry",type:"cyan",children:e.industry},i)})]}),(0,t.jsxs)(r.X2j,{className:"project__row",children:[(0,t.jsx)(r.sgG,{className:"icon__column",lg:1,children:(0,t.jsx)(a.vW,{className:"toolkit_icon"})}),(0,t.jsx)(r.sgG,{className:"tag__column",children:Object.hasOwn(e,"technology")?e.technology.map((e,i)=>(0,t.jsx)(r.Vp9,{className:"projectTile__techs",type:"blue",children:e},i)):(0,t.jsx)(t.Fragment,{})})]})]},i))})}},3077:function(e,i,n){"use strict";n.r(i);var t=n(7437),s=n(7143),o=n(2265),a=n(4044);let r=n(8661).c.j.t.filter(e=>"True"===e.publish),l=new Map,c=new Set,p=new Set;r.forEach(e=>{l.set(e.name,{industry:!0,search:!0,tech:!0}),c.add(e.industry),Object.hasOwn(e,"technology")&&e.technology.forEach(e=>{p.add(e)})});let u=Array.from(p),m=Array.from(c),d=new URLSearchParams(window.location.search),g=d?d.get("industry"):null,h=g?[g]:[],y=d?d.get("industry"):null,b=y?[y]:[];i.default=function(){let[e,i]=(0,o.useState)(b),[n,c]=(0,o.useState)(h),p=()=>{r.forEach(e=>{document.getElementById(e.name)&&(l.get(e.name).industry&&l.get(e.name).search&&l.get(e.name).tech?document.getElementById(e.name).style.display="block":document.getElementById(e.name).style.display="none")})};return(0,t.jsxs)(s.rjZ,{fullWidth:!0,narrow:!0,children:[(0,t.jsxs)(s.sgG,{className:"banner-container",lg:16,md:8,sm:4,children:[" ",(0,t.jsxs)(s.sgG,{className:"banner-title-container",lg:8,md:4,sm:2,children:[" ",(0,t.jsx)("p",{className:"banner-title",children:"Projects"})]}),(0,t.jsx)(s.sgG,{className:"banner-image-container",lg:8,md:4,sm:2})]}),(0,t.jsxs)(s.sgG,{className:"search-row",lg:16,md:8,sm:4,children:[(0,t.jsxs)(s.sgG,{className:"filters__col",children:[(0,t.jsx)(s.sgG,{children:(0,t.jsx)(s._nR,{id:"carbon-multiselect",className:"filter-search",size:"lg",placeholder:"Industry",items:m,itemToString:e=>e||"",selectionFeedback:"top-after-reopen",onChange:e=>{let i=e.selectedItems;c(i),r.forEach(e=>{let n=e.industry,t=i.some(t=>Object.hasOwn(e,"industry")?n===t:0==i.length);if(document.getElementById(e.name)){let n=l.get(e.name);n.industry=!(i.length>0)||t,l.set(e.name,n)}}),p()},initialSelectedItems:n})}),(0,t.jsx)(s.sgG,{children:(0,t.jsx)(s._nR,{id:"carbon-multiselect",className:"filter-search",size:"lg",placeholder:"Technology",items:u,itemToString:e=>e||"",selectionFeedback:"top-after-reopen",onChange:e=>{let n=e.selectedItems;i(n),r.forEach(e=>{let i=e.technology,t=n.every(t=>Object.hasOwn(e,"technology")?i.includes(t):0==n.length);if(document.getElementById(e.name)){let i=l.get(e.name);i.tech=t,l.set(e.name,i)}}),p()},initialSelectedItems:e})})]}),(0,t.jsxs)(s.sgG,{className:"search_projects__col",children:[(0,t.jsx)(s.sgG,{children:(0,t.jsx)(s.olm,{className:"banner-search",size:"lg",placeholder:"Search",labelText:"Search",closeButtonLabelText:"Clear search input",onChange:e=>{let i=e.target.value.toLowerCase();r.forEach(e=>{var n;let t=!1,s=!1;e.repositoryTopics.nodes.forEach(e=>{e.topic.name.toLowerCase().includes(i)&&(t=!0)}),null===(n=e.technology)||void 0===n||n.forEach(e=>{e.toLowerCase().includes(i)&&(s=!0)});let o=t||s||e.name&&e.name.toLowerCase().includes(i)||e.description&&e.description.toLowerCase().includes(i)||e.title&&e.title.toLowerCase().includes(i)||e.industry&&e.industry.toLowerCase().includes(i);if(document.getElementById(e.name)){let i=l.get(e.name);i.search=o,l.set(e.name,i)}}),p()}})}),(0,t.jsx)(s.sgG,{className:"repoTiles",children:(0,t.jsx)(a.Z,{data:r})})]})]})]})}},8661:function(e){"use strict";e.exports=JSON.parse('{"c":{"j":{"t":[{"name":"solution-wxai-aws","description":"Streamline company compliance standards and policies with a self-serve assistant powered by advanced LLM and RAG Techniques","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxai-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws"}},{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"industry":"Various","publish":"True","technology":["Openshift","watsonx.ai"],"title":"Gen AI Compliance Virtual Assistant on AWS"},{"name":"solution-filenet-aws","description":"Operationalize FileNet on AWS EKS with advanced containerization capabilities","homepageUrl":"https://ibm-client-engineering.github.io/solution-filenet-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"filenet-content-manager"}}]},"industry":"Insurance","publish":"True","technology":["FileNet"],"title":"Journey to the Cloud: Migrating FileNet to AWS EKS"},{"name":"engineering-journal-quantum-safe","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/engineering-journal-quantum-safe/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"Quarto-Sample","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/Quarto-Sample/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-sentibot","description":"News scraper and sentiment analyzer powered by watsonx.ai that saves research and prospecting time","homepageUrl":"https://ibm-client-engineering.github.io/solution-sentibot/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"generative-ai"}}]},"industry":"Banking","publish":"True","technology":["watsonx.ai"],"title":"SentiBot: Gen-AI Powered News Scraper and Sentiment Analyzer"},{"name":"solution-sfg-aws","description":"Installing IBM Sterling File Gateway (and other B2Bi components) on Amazon EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-sfg-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"ibm-sterling"}}]},"industry":"Finance","publish":"True","technology":["Sterling File Gateway"],"title":"Adopting IBM Sterling File Gateway on Amazon EKS"},{"name":"solution-openpages-wxai-translation","description":"Leverage watsonx.ai to carry out language translation on the OpenPages platform.","homepageUrl":"https://ibm-client-engineering.github.io/solution-openpages-wxai-translation/","repositoryTopics":{"nodes":[]},"industry":"Banking","publish":"True","technology":["Openpages","watsonx.ai"],"title":"OpenPages watsonx.ai Translation"},{"name":"ce-solutions-hub","description":"Client Engineering Solutions Hub","homepageUrl":"https://ibm-client-engineering.github.io/ce-solutions-hub/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"IBM Client Engineering Solutions Hub"},{"name":"solution-ThirdPartyRisk-wxai","description":"Evaluating third party information technology products and their cybersecurity risks using watsonx.ai.","homepageUrl":"https://ibm-client-engineering.github.io/solution-ThirdPartyRisk-wxai/","repositoryTopics":{"nodes":[{"topic":{"name":"openpages"}},{"topic":{"name":"watsonx-ai"}}]},"industry":"Banking","publish":"True","technology":["Openpages","watsonx.ai"],"title":"Third Party Risk with watsonx.ai"},{"name":"test","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-unified-virtual-assistant","description":"Build a unified virtual assistant on watsonx Orchestrate with gen-AI routing, IAM, governance, RAG, and third-party integrations.","homepageUrl":"https://ibm-client-engineering.github.io/solution-unified-virtual-assistant/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"watsonx-orchestrate"}},{"topic":{"name":"ibm-security-verify"}}]},"industry":"Insurance","publish":"True","technology":["Security Verify","Watsonx Discovery","Watsonx Orchestrate","watsonx.ai","watsonx.governance"],"title":"Unified Virtual Assistant"},{"name":"solution-openpages-wx","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-openpages-wx/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"engineering-journal-zOS-datagate","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"zOS-datagate"},{"name":"solution-mq-gitops","description":"MQ automation through gitops","homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-ai-assistants","description":"Enhancing Customer Care Journeys Using IBM watsonx AI Assistants","homepageUrl":"https://ibm-client-engineering.github.io/solution-ai-assistants/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"industry":"Various","publish":"True","technology":["Watson Discovery","Watsonx Assistant","watsonx.ai"],"title":"AI Assistants"},{"name":"solution-askhr","description":"Documentation and assets for Client Engineering implementing AskHR Usecases","homepageUrl":"https://ibm-client-engineering.github.io/solution-askhr/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-wca4z","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-wca4z/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wca4z-onprem","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-wca4z-onprem/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-AskCSM","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-AskCSM/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":".github","description":"IBM Client Engineering","homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-onprem-wxai","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-optim","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-optim/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-mq-rdqm-hadr","description":"Set up IBM MQ Traditional with RDQM ","homepageUrl":"","repositoryTopics":{"nodes":[{"topic":{"name":"co-create"}},{"topic":{"name":"ibm-client-engineering"}},{"topic":{"name":"solution-library"}},{"topic":{"name":"ibm-mq"}},{"topic":{"name":"ibm-mq-installation"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-cmis-containerized","description":"Deploy IBM Content Management Interoperability Services (CMIS) on Containers","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-governance","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-governance/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"forward-foundry","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-assistant","description":"Enhancing Customer Care Journeys Using IBM Watsonx Products","homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-assistant/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"industry":"Unspecified","publish":"False","title":"Customer Care Virtual Agents"},{"name":"solution-watsonx-orchestrate","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-orchestrate/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wxo","description":"Using Integrated Custom Skills in IBM Watsonx Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxo/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx"}},{"topic":{"name":"watsonx-orchestrate"}},{"topic":{"name":"business-automation"}}]},"industry":"Various","publish":"True","technology":["Watsonx Orchestrate","watsonx.ai"],"title":"Watsonx Orchestrate Integrations"},{"name":"solution-processmining","description":"IBM Cloud Pak for Business Automation Process Mining on Red Hat OpenShift","homepageUrl":"https://ibm-client-engineering.github.io/solution-processmining/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}},{"topic":{"name":"openshift"}}]},"industry":"Finance","publish":"False","technology":["Openshift","Process Mining"],"title":"Process Mining on Red Hat OpenShift"},{"name":"solution-mq-aws-eks","description":"IBM MQ on Amazon Elastic Container Service (EKS)","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-news-scraper","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-news-scraper/","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"Watsonx News Scraper"},{"name":"solution-satellite","description":"Deploying an application on a satellite location on IBM and AWS using IBM Cloud Console, Terraform, and Helmcharts","homepageUrl":"https://ibm-client-engineering.github.io/solution-satellite/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"satellite"}}]},"industry":"Banking","publish":"False","technology":["IBM Cloud Satellite","Terraform"],"title":"IBM Satellite on IBM Cloud and AWS"},{"name":"solution-aspera-sync","description":"Improving synchronization between severs at maximum speed with minimum cost with IBM Aspera Sync","homepageUrl":"https://ibm-client-engineering.github.io/solution-aspera-sync/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"data"}}]},"industry":"Banking","publish":"False","technology":["Ansible","Aspera"],"title":"Aspera Install Using Ansible Playbooks"},{"name":"solution-watson-orchestrate","description":"Connecting AWS Lambda to IBM Watson Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-watson-orchestrate/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-lambda"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"watson-orchestrate"}}]},"industry":"Various","publish":"False","technology":["Watsonx Orchestrate"],"title":"AWS Lambda on Watson Orchestrate"},{"name":"solution-cp4ba-document-processing","description":"Automated Document Processing Solutions Using IBM Cloud Pak for Business Automation","homepageUrl":"https://ibm-client-engineering.github.io/solution-cp4ba-document-processing/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}}]},"industry":"Various","publish":"False","technology":["CP4BA"],"title":"Automated Document Processing"},{"name":"solution-how-we-work","description":"This will be the solution doc of solution docs","homepageUrl":"","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template-gatsby","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"legend","description":"The Legend project","homepageUrl":"https://legend.finos.org","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-kafka-prometheus","description":"JMX Metrics capture for Kafka, and visualized in prometheus","homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-workflow-on-containers","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-websphere-automation","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"solution-middleware-automation","description":"Automated Certificate Management for IBM MQ using Red Hat Ansible","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"mq-ansible-fork","description":"Ansible roles for IBM MQ","homepageUrl":"","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"mq-helm-fork","description":"A fork of the original code","homepageUrl":"","repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"},{"name":"MikeZFileShare","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"industry":"Unspecified","publish":"False","title":"[Insert Solution Name]"}]}}}')}},function(e){e.O(0,[143,682,971,23,744],function(){return e(e.s=9776)}),_N_E=e.O()}]);