(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{9776:function(e,i,n){Promise.resolve().then(n.bind(n,8751))},8751:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return m}});var o=n(7437),t=n(7817);n(2265);var s=n(8112),a=e=>{let{data:i}=e;return(0,o.jsx)("div",{className:"projectTileContainer",children:i.map((e,i)=>(0,o.jsxs)(t.Ohc,{id:e.name,className:"projectTile",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer",renderIcon:s.GI,children:[(0,o.jsx)("h6",{className:"projectTile__title",children:e.title}),(0,o.jsx)("p3",{className:"projectTile__description",children:e.description}),e.repositoryTopics.nodes.map((e,i)=>(0,o.jsx)(t.Vp9,{className:"projectTile__topics",children:e.topic.name},i))]},i))})},r=n(8661).c.j.t.filter(e=>"True"===e.publish),l=new Map,p=new Set;r.forEach(e=>{l.set(e.name,{topic:!0,search:!0}),e.repositoryTopics.nodes.forEach(e=>{p.add(e.topic.name)})});let c=Array.from(p);var m=function(){let e=()=>{r.forEach(e=>{document.getElementById(e.name)&&(l.get(e.name).topic&&l.get(e.name).search?document.getElementById(e.name).style.display="block":document.getElementById(e.name).style.display="none")})};return(0,o.jsxs)(t.rjZ,{fullWidth:!0,narrow:!0,children:[(0,o.jsxs)(t.sgG,{className:"banner-container",lg:16,md:8,sm:4,children:[(0,o.jsxs)(t.sgG,{className:"banner-title-container",lg:8,md:4,sm:2,children:[(0,o.jsx)("p",{className:"banner-title",children:"Projects"}),(0,o.jsxs)(t.X2j,{className:"search-row",children:[(0,o.jsx)(t.olm,{className:"banner-search",size:"lg",placeholder:"Search",labelText:"Search",closeButtonLabelText:"Clear search input",onChange:i=>{let n=i.target.value.toLowerCase();r.forEach(e=>{var i=!1;e.repositoryTopics.nodes.forEach(e=>{e.topic.name.toLowerCase().includes(n)&&(i=!0)});var o=i||e.name&&e.name.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n)||e.title&&e.title.toLowerCase().includes(n);if(document.getElementById(e.name)){var t=l.get(e.name);t.search=o,l.set(e.name,t)}}),e()}}),(0,o.jsx)(t._nR,{id:"carbon-multiselect",className:"filter-search",size:"lg",placeholder:"Topics",items:c,itemToString:e=>e||"",selectionFeedback:"top-after-reopen",onChange:i=>{let n=i.selectedItems;r.forEach(e=>{var i=e.repositoryTopics.nodes.map(e=>e.topic.name),o=n.every(e=>i.includes(e));if(document.getElementById(e.name)){var t=l.get(e.name);t.topic=o,l.set(e.name,t)}}),e()}})]})]}),(0,o.jsx)(t.sgG,{className:"banner-image-container",lg:8,md:4,sm:2})]}),(0,o.jsx)(t.sgG,{lg:16,md:8,sm:2,className:"repoTiles",children:(0,o.jsx)(a,{data:r})})]})}},8661:function(e){"use strict";e.exports=JSON.parse('{"c":{"j":{"t":[{"name":"solution-wxai-aws","description":"Deploying watsonx.ai on AWS for AI Assistant Solutions","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxai-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws"}},{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"publish":"True","title":"Deploying watsonx.ai on AWS for AI Assistant Solutions"},{"name":"ce-solutions-hub","description":"Client Engineering Solutions Hub","homepageUrl":"https://ibm-client-engineering.github.io/ce-solutions-hub/","repositoryTopics":{"nodes":[]},"publish":"False","title":"IBM Client Engineering Solutions Hub"},{"name":"solution-filenet-aws","description":"Solution to deploy IBM FileNet Content Manager on AWS EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-filenet-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"filenet-content-manager"}}]},"publish":"True","title":"FileNet Content Manager on AWS EKS "},{"name":"solution-sentibot","description":"A news scraper and sentiment analyzer powered by watsonx.ai","homepageUrl":"https://ibm-client-engineering.github.io/solution-sentibot/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx-ai"}},{"topic":{"name":"generative-ai"}}]},"publish":"True","title":"Sentibot"},{"name":"solution-mq-rdqm-hadr","description":"Set up IBM MQ Traditional with RDQM ","homepageUrl":"","repositoryTopics":{"nodes":[{"topic":{"name":"co-create"}},{"topic":{"name":"ibm-client-engineering"}},{"topic":{"name":"solution-library"}},{"topic":{"name":"ibm-mq"}},{"topic":{"name":"ibm-mq-installation"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-cmis-containerized","description":"Deploy IBM Content Management Interoperability Services (CMIS) on Containers","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-governance","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-governance/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"forward-foundry","description":null,"homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-assistant","description":"Enhancing Customer Care Journeys Using IBM Watsonx Products","homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-assistant/","repositoryTopics":{"nodes":[{"topic":{"name":"generative-ai"}},{"topic":{"name":"watsonx-assistant"}}]},"publish":"True","title":"Customer Care Virtual Agents"},{"name":"solution-watsonx-orchestrate","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-orchestrate/","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-wxo","description":"Using Integrated Custom Skills in IBM Watsonx Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-wxo/","repositoryTopics":{"nodes":[{"topic":{"name":"watsonx"}},{"topic":{"name":"watsonx-orchestrate"}},{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Watsonx Orchestrate Integrations"},{"name":"solution-processmining","description":"IBM Cloud Pak for Business Automation Process Mining on Red Hat OpenShift","homepageUrl":"https://ibm-client-engineering.github.io/solution-processmining/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}},{"topic":{"name":"openshift"}}]},"publish":"True","title":"Process Mining on Red Hat OpenShift"},{"name":"solution-mq-aws-eks","description":"IBM MQ on Amazon Elastic Container Service (EKS)","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-watsonx-news-scraper","description":null,"homepageUrl":"https://ibm-client-engineering.github.io/solution-watsonx-news-scraper/","repositoryTopics":{"nodes":[]},"publish":"False","title":"Watsonx News Scraper"},{"name":"solution-sfg-aws","description":"Installing IBM Sterling File Gateway (and other B2Bi components) on Amazon EKS","homepageUrl":"https://ibm-client-engineering.github.io/solution-sfg-aws/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-eks"}},{"topic":{"name":"ibm-sterling"}}]},"publish":"True","title":"Sterling File Gateway on AWS EKS"},{"name":"solution-satellite","description":"Deploying an application on a satellite location on IBM and AWS using IBM Cloud Console, Terraform, and Helmcharts","homepageUrl":"https://ibm-client-engineering.github.io/solution-satellite/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"satellite"}}]},"publish":"True","title":"IBM Satellite on IBM Cloud and AWS"},{"name":"solution-aspera-sync","description":"Improving synchronization between severs at maximum speed with minimum cost with IBM Aspera Sync","homepageUrl":"https://ibm-client-engineering.github.io/solution-aspera-sync/","repositoryTopics":{"nodes":[{"topic":{"name":"aspera-sync"}},{"topic":{"name":"data"}}]},"publish":"True","title":"Aspera Install Using Ansible Playbooks"},{"name":"solution-watson-orchestrate","description":"Connecting AWS Lambda to IBM Watson Orchestrate","homepageUrl":"https://ibm-client-engineering.github.io/solution-watson-orchestrate/","repositoryTopics":{"nodes":[{"topic":{"name":"aws-lambda"}},{"topic":{"name":"business-automation"}},{"topic":{"name":"watson-orchestrate"}}]},"publish":"True","title":"AWS Lambda on Watson Orchestrate"},{"name":"solution-cp4ba-document-processing","description":"Automated Document Processing Solutions Using IBM Cloud Pak for Business Automation","homepageUrl":"https://ibm-client-engineering.github.io/solution-cp4ba-document-processing/","repositoryTopics":{"nodes":[{"topic":{"name":"business-automation"}}]},"publish":"True","title":"Automated Document Processing"},{"name":"solution-how-we-work","description":"This will be the solution doc of solution docs","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-template-gatsby","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"legend","description":"The Legend project","homepageUrl":"https://legend.finos.org","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-kafka-prometheus","description":"JMX Metrics capture for Kafka, and visualized in prometheus","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-mq-gitops","description":"MQ automation through gitops","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":".github","description":"IBM Client Engineering","homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-workflow-on-containers","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-websphere-automation","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"solution-middleware-automation","description":"Automated Certificate Management for IBM MQ using Red Hat Ansible","homepageUrl":null,"repositoryTopics":{"nodes":[{"topic":{"name":"ibm-client-engineering"}}]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-ansible-fork","description":"Ansible roles for IBM MQ","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"mq-helm-fork","description":"A fork of the original code","homepageUrl":"","repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"},{"name":"MikeZFileShare","description":null,"homepageUrl":null,"repositoryTopics":{"nodes":[]},"publish":"False","title":"[Insert Solution Name]"}]}}}')}},function(e){e.O(0,[817,112,971,23,744],function(){return e(e.s=9776)}),_N_E=e.O()}]);