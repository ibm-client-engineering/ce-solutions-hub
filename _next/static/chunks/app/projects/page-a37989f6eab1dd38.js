(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{9776:function(e,i,n){Promise.resolve().then(n.bind(n,3077))},4044:function(e,i,n){"use strict";var t=n(7437);n(2265);var o=n(8112),s=n(4664);i.Z=e=>{let{data:i}=e;return(0,t.jsx)("div",{className:"projectTileContainer",children:i.map((e,i)=>(0,t.jsxs)(s.Ohc,{id:e.name,className:"projectTile",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer",renderIcon:o.GI,children:[(0,t.jsx)("h6",{className:"projectTile__title",children:e.title}),(0,t.jsx)("p3",{className:"projectTile__description",children:e.description}),e.repositoryTopics.nodes.map((e,i)=>(0,t.jsx)(s.Vp9,{className:"projectTile__topics",children:e.topic.name},i))]},i))})}},3077:function(e,i,n){"use strict";n.r(i);var t=n(7437),o=n(4664),s=n(2265),a=n(4044);let l=n(8661).c.j.t.filter(e=>"True"===e.publish),r=new Map,p=new Set;l.forEach(e=>{r.set(e.name,{topic:!0,search:!0}),e.repositoryTopics.nodes.forEach(e=>{p.add(e.topic.name)})});let c=Array.from(p),m=new URLSearchParams(window.location.search),u=m?m.get("topic"):null,g=u?[u]:[];i.default=function(){let[e,i]=(0,s.useState)(g),n=()=>{l.forEach(e=>{document.getElementById(e.name)&&(r.get(e.name).topic&&r.get(e.name).search?document.getElementById(e.name).style.display="block":document.getElementById(e.name).style.display="none")})};(0,s.useEffect)(()=>{u&&p(u)},[u]);let p=e=>{l.forEach(i=>{let n=i.repositoryTopics.nodes.map(e=>e.topic.name).includes(e);if(document.getElementById(i.name)){let e=r.get(i.name);e.topic=n,r.set(i.name,e)}}),n()};return(0,t.jsxs)(o.rjZ,{fullWidth:!0,narrow:!0,children:[(0,t.jsxs)(o.sgG,{className:"banner-container",lg:16,md:8,sm:4,children:[(0,t.jsxs)(o.sgG,{className:"banner-title-container",lg:8,md:4,sm:2,children:[(0,t.jsx)("p",{className:"banner-title",children:"Projects"}),(0,t.jsxs)(o.X2j,{className:"search-row",children:[(0,t.jsx)(o.olm,{className:"banner-search",size:"lg",placeholder:"Search",labelText:"Search",closeButtonLabelText:"Clear search input",onChange:e=>{let i=e.target.value.toLowerCase();l.forEach(e=>{let n=!1;e.repositoryTopics.nodes.forEach(e=>{e.topic.name.toLowerCase().includes(i)&&(n=!0)});let t=n||e.name&&e.name.toLowerCase().includes(i)||e.description&&e.description.toLowerCase().includes(i)||e.title&&e.title.toLowerCase().includes(i);if(document.getElementById(e.name)){let i=r.get(e.name);i.search=t,r.set(e.name,i)}}),n()}}),(0,t.jsx)(o._nR,{id:"carbon-multiselect",className:"filter-search",size:"lg",placeholder:"Topics",items:c,itemToString:e=>e||"",selectionFeedback:"top-after-reopen",onChange:e=>{let t=e.selectedItems;i(t),l.forEach(e=>{let i=e.repositoryTopics.nodes.map(e=>e.topic.name),n=t.every(e=>i.includes(e));if(document.getElementById(e.name)){let i=r.get(e.name);i.topic=n,r.set(e.name,i)}}),n()},initialSelectedItems:e})]})]}),(0,t.jsx)(o.sgG,{className:"banner-image-container",lg:8,md:4,sm:2})]}),(0,t.jsx)(o.sgG,{lg:16,md:8,sm:2,className:"repoTiles",children:(0,t.jsx)(a.Z,{data:l})})]})}},8661:function(e){"use strict";e.exports=JSON.parse('{"c":{"j":{"t":[{"name":"solution-unified-virtual-agent","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-unified-virtual-agent/","repositoryTopics":{"nodes":[]},"publish":"False","title":"Unified Virtual Agent"},{"name":"solution-ai-assistants","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-ai-assistants/","repositoryTopics":{"nodes":[]},"publish":"False","title":"AI Assistants"},{"name":"ce-solutions-hub","description":"Client Engineering Solutions Hub","homepageUrl":"https://ibm-client-engineering.github.io/ce-solutions-hub/","repositoryTopics":{"nodes":[]},"publish":"False","title":"IBM Client Engineering Solutions Hub"},{"name":"engineering-journal-quantum-safe","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/engineering-journal-quantum-safe/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wxai-aws","description":"Deploying watsonx.ai on AWS for AI Assistant Solutions","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxai-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws"}},{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"publish":"True","title":"IBM watsonx.ai on AWS"},{"name":"solution-askhr","description":"Documentation and assets for Client Engineering implementing AskHR Usecases","homepageUrl":"https://ibm-client-engineering.github.io/solution-askhr/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-openpages-wx","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-openpages-wx/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-wca4z","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-wca4z/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wca4z-onprem","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-wca4z-onprem/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-AskCSM","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-AskCSM/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":".github","description":"IBM Client Engineering","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-onprem-wxai","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-optim","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-optim/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-filenet-aws","description":"Solution to deploy IBM FileNet Content Manager on AWS EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-filenet-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"filenet-content-manager"}}]},"publish":"True","title":"FileNet Content Manager on AWS EKS "},{"name":"solution-sentibot","description":"A news scraper and sentiment analyzer powered by watsonx.ai","homepageUrl":"https://ibm-client-engineering.github.io/solution-sentibot/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"generative-ai"}}]},"publish":"True","title":"Sentibot"},{"name":"solution-mq-rdqm-hadr","description":"Set up IBM MQ Traditional with RDQM ","homepageUrl":"","repositoryTopics":{"nodes":[{"topic":{"name":"co-create"}},{"topic":{"name":"ibm-client-engineering"}},{"topic":{"name":"solution-library"}},{"topic":{"name":"ibm-mq"}},{"topic":{"name":"ibm-mq-installation"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-cmis-containerized","description":"Deploy IBM Content Management Interoperability Services (CMIS) on Containers","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-governance","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-governance/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"forward-foundry","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-assistant","description":"Enhancing Customer Care Journeys Using IBM Watsonx Products","homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-assistant/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"publish":"True","title":"Customer Care Virtual Agents"},{"name":"solution-watsonx-orchestrate","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-orchestrate/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wxo","description":"Using Integrated Custom Skills in IBM Watsonx Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxo/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx"}},{"topic":{"name":"watsonx-orchestrate"}},{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Watsonx Orchestrate Integrations"},{"name":"solution-processmining","description":"IBM Cloud Pak for Business Automation Process Mining on Red Hat OpenShift","homepageUrl":"https://ibm-client-engineering.github.io/solution-processmining/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}},{"topic":{"name":"openshift"}}]},"publish":"True","title":"Process Mining on Red Hat OpenShift"},{"name":"solution-mq-aws-eks","description":"IBM MQ on Amazon Elastic Container Service (EKS)","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-news-scraper","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-news-scraper/","repositoryTopics":{"nodes":[]},"publish":"False","title":"Watsonx News Scraper"},{"name":"solution-sfg-aws","description":"Installing IBM Sterling File Gateway (and other B2Bi components) on Amazon EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-sfg-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"ibm-sterling"}}]},"publish":"True","title":"Sterling File Gateway on AWS EKS"},{"name":"solution-satellite","description":"Deploying an application on a satellite location on IBM and AWS using IBM Cloud Console, Terraform, and Helmcharts","homepageUrl":"https://ibm-client-engineering.github.io/solution-satellite/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"satellite"}}]},"publish":"True","title":"IBM Satellite on IBM Cloud and AWS"},{"name":"solution-aspera-sync","description":"Improving synchronization between severs at maximum speed with minimum cost with IBM Aspera Sync","homepageUrl":"https://ibm-client-engineering.github.io/solution-aspera-sync/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"data"}}]},"publish":"True","title":"Aspera Install Using Ansible Playbooks"},{"name":"solution-watson-orchestrate","description":"Connecting AWS Lambda to IBM Watson Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-watson-orchestrate/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-lambda"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"watson-orchestrate"}}]},"publish":"True","title":"AWS Lambda on Watson Orchestrate"},{"name":"solution-cp4ba-document-processing","description":"Automated Document Processing Solutions Using IBM Cloud Pak for Business Automation","homepageUrl":"https://ibm-client-engineering.github.io/solution-cp4ba-document-processing/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Automated Document Processing"},{"name":"solution-how-we-work","description":"This will be the solution doc of solution docs","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template-gatsby","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"legend","description":"The Legend project","homepageUrl":"https://legend.finos.org","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-kafka-prometheus","description":"JMX Metrics capture for Kafka, and visualized in prometheus","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-mq-gitops","description":"MQ automation through gitops","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-workflow-on-containers","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-websphere-automation","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-middleware-automation","description":"Automated Certificate Management for IBM MQ using Red Hat Ansible","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-ansible-fork","description":"Ansible roles for IBM MQ","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-helm-fork","description":"A fork of the original code","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"MikeZFileShare","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"}]}}}')}},function(e){e.O(0,[664,112,971,23,744],function(){return e(e.s=9776)}),_N_E=e.O()}]);