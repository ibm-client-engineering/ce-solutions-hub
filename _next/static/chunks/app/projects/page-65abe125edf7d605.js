(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{9776:function(e,i,o){Promise.resolve().then(o.bind(o,8751))},8751:function(e,i,o){"use strict";o.r(i),o.d(i,{default:function(){return m}});var n=o(7437),t=o(7817);o(2265);var s=o(8112),a=e=>{let{data:i}=e;return(0,n.jsx)(n.Fragment,{children:i.map((e,i)=>(0,n.jsxs)(t.Ohc,{id:e.name,className:"projectTile",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer",renderIcon:s.GI,children:[(0,n.jsx)("h6",{className:"projectTile__title",children:e.title}),(0,n.jsx)("p3",{className:"projectTile__description",children:e.description}),e.repositoryTopics.nodes.map((e,i)=>(0,n.jsx)(t.Vp9,{className:"projectTile__topics",children:e.topic.name},i))]},i))})},l=o(8661).c.j.t.filter(e=>"True"===e.publish),r=new Map,p=new Set;l.forEach(e=>{r.set(e.name,{topic:!0,search:!0}),e.repositoryTopics.nodes.forEach(e=>{p.add(e.topic.name)})});let c=Array.from(p);var m=function(){let e=()=>{l.forEach(e=>{document.getElementById(e.name)&&(r.get(e.name).topic&&r.get(e.name).search?document.getElementById(e.name).style.display="block":document.getElementById(e.name).style.display="none")})};return(0,n.jsxs)(t.rjZ,{fullWidth:!0,narrow:!0,children:[(0,n.jsxs)(t.sgG,{className:"banner-container",lg:16,md:8,sm:4,children:[(0,n.jsxs)(t.sgG,{className:"banner-title-container",lg:8,md:4,sm:2,children:[(0,n.jsx)("p",{className:"banner-title",children:"Projects"}),(0,n.jsxs)(t.X2j,{className:"search-row",children:[(0,n.jsx)(t.olm,{className:"banner-search",size:"lg",placeholder:"Search",labelText:"Search",closeButtonLabelText:"Clear search input",onChange:i=>{let o=i.target.value.toLowerCase();l.forEach(e=>{var i=!1;e.repositoryTopics.nodes.forEach(e=>{e.topic.name.toLowerCase().includes(o)&&(i=!0)});var n=i||e.name&&e.name.toLowerCase().includes(o)||e.description&&e.description.toLowerCase().includes(o)||e.title&&e.title.toLowerCase().includes(o);if(document.getElementById(e.name)){var t=r.get(e.name);t.search=n,r.set(e.name,t)}}),e()}}),(0,n.jsx)(t._nR,{id:"carbon-multiselect",className:"filter-search",size:"lg",placeholder:"Topics",items:c,itemToString:e=>e||"",selectionFeedback:"top-after-reopen",onChange:i=>{let o=i.selectedItems;l.forEach(e=>{var i=e.repositoryTopics.nodes.map(e=>e.topic.name),n=o.every(e=>i.includes(e));if(document.getElementById(e.name)){var t=r.get(e.name);t.topic=n,r.set(e.name,t)}}),e()}})]})]}),(0,n.jsx)(t.sgG,{className:"banner-image-container",lg:8,md:4,sm:2})]}),(0,n.jsx)(t.sgG,{lg:16,md:8,sm:2,className:"repoTiles",children:(0,n.jsx)(a,{data:l})})]})}},8661:function(e){"use strict";e.exports=JSON.parse('{"c":{"j":{"t":[{"name":"solution-wxai-aws","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-wxai-aws/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"ce-solutions-hub","description":"Client Engineering Solutions Hub","homepageUrl":"https://ibm-client-engineering.github.io/ce-solutions-hub/","repositoryTopics":{"nodes":[]},"publish":"False","title":"IBM Client Engineering Solutions Hub"},{"name":"solution-filenet-aws","description":"Solution to deploy IBM FileNet Content Manager on AWS EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-filenet-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"filenet-content-manager"}}]},"publish":"True","title":"FileNet Content Manager on AWS EKS "},{"name":"solution-sentibot","description":"A news scraper and sentiment analyzer powered by watsonx.ai","homepageUrl":"https://ibm-client-engineering.github.io/solution-sentibot/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"generative-ai"}}]},"publish":"True","title":"Sentibot"},{"name":"solution-mq-rdqm-hadr","description":"Set up IBM MQ Traditional with RDQM ","homepageUrl":"","repositoryTopics":{"nodes":[{"topic":{"name":"co-create"}},{"topic":{"name":"ibm-client-engineering"}},{"topic":{"name":"solution-library"}},{"topic":{"name":"ibm-mq"}},{"topic":{"name":"ibm-mq-installation"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-cmis-containerized","description":"Deploy IBM Content Management Interoperability Services (CMIS) on Containers","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-governance","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-governance/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"forward-foundry","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-assistant","description":"Enhancing Customer Care Journeys Using IBM Watsonx Products","homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-assistant/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"publish":"True","title":"Customer Care Virtual Agents"},{"name":"solution-watsonx-orchestrate","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-orchestrate/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"dtcc_rag_chatbot","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wxo","description":"Using Integrated Custom Skills in IBM Watsonx Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxo/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx"}},{"topic":{"name":"watsonx-orchestrate"}},{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Watsonx Orchestrate Integrations"},{"name":"solution-processmining","description":"IBM Cloud Pak for Business Automation Process Mining on Red Hat OpenShift","homepageUrl":"https://ibm-client-engineering.github.io/solution-processmining/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}},{"topic":{"name":"openshift"}}]},"publish":"True","title":"Process Mining on Red Hat OpenShift"},{"name":"solution-mq-aws-eks","description":"IBM MQ on Amazon Elastic Container Service (EKS)","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-trusteer-entra","description":null,"homepageUrl":"https://pages.github.ibm.com/ibm-client-engineering/solution-trusteer-entra/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-news-scraper","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-news-scraper/","repositoryTopics":{"nodes":[]},"publish":"False","title":"Watsonx News Scraper"},{"name":"solution-ai-sidekick","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-sfg-aws","description":"Installing IBM Sterling File Gateway (and other B2Bi components) on Amazon EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-sfg-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"ibm-sterling"}}]},"publish":"True","title":"Sterling File Gateway on AWS EKS"},{"name":"solution-satellite","description":"Deploying an application on a satellite location on IBM and AWS using IBM Cloud Console, Terraform, and Helmcharts","homepageUrl":"https://ibm-client-engineering.github.io/solution-satellite/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"satellite"}}]},"publish":"True","title":"IBM Satellite on IBM Cloud and AWS"},{"name":"solution-aspera-sync","description":"Improving synchronization between severs at maximum speed with minimum cost with IBM Aspera Sync","homepageUrl":"https://ibm-client-engineering.github.io/solution-aspera-sync/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"data"}}]},"publish":"True","title":"Aspera Install Using Ansible Playbooks"},{"name":"solution-watson-orchestrate","description":"Connecting AWS Lambda to IBM Watson Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-watson-orchestrate/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-lambda"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"watson-orchestrate"}}]},"publish":"True","title":"AWS Lambda on Watson Orchestrate"},{"name":"solution-cp4ba-document-processing","description":"Automated Document Processing Solutions Using IBM Cloud Pak for Business Automation","homepageUrl":"https://ibm-client-engineering.github.io/solution-cp4ba-document-processing/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Automated Document Processing"},{"name":"solution-how-we-work","description":"This will be the solution doc of solution docs","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-consumer-bankchat-bot","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-cp4ba-processmining","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template-gatsby","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"legend","description":"The Legend project","homepageUrl":"https://legend.finos.org","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-kafka-prometheus","description":"JMX Metrics capture for Kafka, and visualized in prometheus","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-mq-gitops","description":"MQ automation through gitops","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":".github","description":"IBM Client Engineering","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-workflow-on-containers","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-websphere-automation","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-middleware-automation","description":"Automated Certificate Management for IBM MQ using Red Hat Ansible","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-ansible-fork","description":"Ansible roles for IBM MQ","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-helm-fork","description":"A fork of the original code","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"MikeZFileShare","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"}]}}}')}},function(e){e.O(0,[817,112,971,23,744],function(){return e(e.s=9776)}),_N_E=e.O()}]);