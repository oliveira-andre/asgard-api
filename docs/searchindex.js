Search.setIndex({docnames:["changelog/index","changelog/v0.90.0","devguide/code/api","devguide/code/backends","devguide/code/index","devguide/code/internal-utils","devguide/code/organization","devguide/code/services","devguide/contrib/index","devguide/contrib/write-new-orquestrator","devguide/index","index","src/asgard/asgard","src/asgard/asgard.api","src/asgard/asgard.backends","src/asgard/asgard.backends.marathon","src/asgard/asgard.backends.mesos","src/asgard/asgard.backends.mesos.client","src/asgard/asgard.backends.mesos.models","src/asgard/asgard.http","src/asgard/asgard.services"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog/index.rst","changelog/v0.90.0.rst","devguide/code/api.rst","devguide/code/backends.rst","devguide/code/index.rst","devguide/code/internal-utils.rst","devguide/code/organization.rst","devguide/code/services.rst","devguide/contrib/index.rst","devguide/contrib/write-new-orquestrator.rst","devguide/index.rst","index.rst","src/asgard/asgard.rst","src/asgard/asgard.api.rst","src/asgard/asgard.backends.rst","src/asgard/asgard.backends.marathon.rst","src/asgard/asgard.backends.mesos.rst","src/asgard/asgard.backends.mesos.client.rst","src/asgard/asgard.backends.mesos.models.rst","src/asgard/asgard.http.rst","src/asgard/asgard.services.rst"],objects:{"":{asgard:[12,0,0,"-"]},"asgard.api":{accounts:[13,0,0,"-"],agents:[13,0,0,"-"],apps:[13,0,0,"-"],index:[13,0,0,"-"],users:[13,0,0,"-"]},"asgard.api.accounts":{account_by_id:[13,1,1,""],add_user_to_account:[13,1,1,""],change_account:[13,1,1,""],index:[13,1,1,""],remove_user_from_account:[13,1,1,""],users_from_account:[13,1,1,""]},"asgard.api.agents":{agent_apps:[13,1,1,""],agents_handler:[13,1,1,""],agents_with_attrs:[13,1,1,""],apply_attr_filter:[13,1,1,""],calculate_stats:[13,1,1,""]},"asgard.api.apps":{app_stats:[13,1,1,""],app_stats_avg_1min:[13,1,1,""],get_app_stats:[13,1,1,""]},"asgard.api.index":{handle:[13,1,1,""]},"asgard.api.users":{accounts_from_user:[13,1,1,""],create_user:[13,1,1,""],delete_user:[13,1,1,""],update_user_partial:[13,1,1,""],user_by_id:[13,1,1,""],users_list:[13,1,1,""],whoami:[13,1,1,""]},"asgard.app":{patched_startup:[12,1,1,""]},"asgard.backends":{accounts:[14,0,0,"-"],base:[14,0,0,"-"],marathon:[15,0,0,"-"],mesos:[16,0,0,"-"],users:[14,0,0,"-"]},"asgard.backends.accounts":{AccountsBackend:[14,2,1,""]},"asgard.backends.accounts.AccountsBackend":{add_user:[14,3,1,""],get_account_by_id:[14,3,1,""],get_accounts:[14,3,1,""],get_users_from_account:[14,3,1,""],remove_user:[14,3,1,""]},"asgard.backends.base":{AgentsBackend:[14,2,1,""],AppsBackend:[14,2,1,""],Interval:[14,2,1,""],Orchestrator:[14,2,1,""]},"asgard.backends.base.AgentsBackend":{get_agents:[14,3,1,""],get_apps_running:[14,3,1,""],get_by_id:[14,3,1,""]},"asgard.backends.base.AppsBackend":{get_app_stats:[14,3,1,""]},"asgard.backends.base.Interval":{ONE_HOUR:[14,4,1,""],ONE_MINUTE:[14,4,1,""]},"asgard.backends.base.Orchestrator":{get_agent_by_id:[14,3,1,""],get_agents:[14,3,1,""],get_app_stats:[14,3,1,""],get_apps_running_for_agent:[14,3,1,""]},"asgard.backends.marathon":{impl:[15,0,0,"-"]},"asgard.backends.marathon.impl":{MarathonAppsBackend:[15,2,1,""]},"asgard.backends.marathon.impl.MarathonAppsBackend":{get_app_stats:[15,3,1,""]},"asgard.backends.mesos":{client:[17,0,0,"-"],impl:[16,0,0,"-"],models:[18,0,0,"-"]},"asgard.backends.mesos.client":{impl:[17,0,0,"-"]},"asgard.backends.mesos.client.impl":{MesosClient:[17,2,1,""]},"asgard.backends.mesos.client.impl.MesosClient":{get_agent_by_id:[17,3,1,""],get_agents:[17,3,1,""]},"asgard.backends.mesos.impl":{MesosAgentsBackend:[16,2,1,""],MesosOrchestrator:[16,2,1,""],populate_apps:[16,1,1,""]},"asgard.backends.mesos.impl.MesosAgentsBackend":{get_agents:[16,3,1,""],get_apps_running:[16,3,1,""],get_by_id:[16,3,1,""]},"asgard.backends.mesos.impl.MesosOrchestrator":{get_agent_by_id:[16,3,1,""],get_agents:[16,3,1,""],get_app_stats:[16,3,1,""],get_apps_running_for_agent:[16,3,1,""]},"asgard.backends.mesos.models":{agent:[18,0,0,"-"],app:[18,0,0,"-"],task:[18,0,0,"-"]},"asgard.backends.mesos.models.agent":{MesosAgent:[18,2,1,""]},"asgard.backends.mesos.models.agent.MesosAgent":{apps:[18,3,1,""],calculate_stats:[18,3,1,""],filter_by_attrs:[18,3,1,""],tasks:[18,3,1,""]},"asgard.backends.mesos.models.app":{MesosApp:[18,2,1,""]},"asgard.backends.mesos.models.app.MesosApp":{transform_to_asgard_app_id:[18,3,1,""]},"asgard.backends.mesos.models.task":{MesosTask:[18,2,1,""]},"asgard.backends.mesos.models.task.MesosTask":{transform_to_asgard_task_id:[18,3,1,""]},"asgard.backends.users":{UsersBackend:[14,2,1,""]},"asgard.backends.users.UsersBackend":{create_user:[14,3,1,""],delete_user:[14,3,1,""],get_accounts_from_user:[14,3,1,""],get_alternate_accounts:[14,3,1,""],get_user_by_id:[14,3,1,""],get_users:[14,3,1,""],update_user:[14,3,1,""]},"asgard.conf":{AuthSpec:[12,2,1,""],Settings:[12,2,1,""]},"asgard.conf.Settings":{Config:[12,2,1,""]},"asgard.conf.Settings.Config":{env_prefix:[12,4,1,""]},"asgard.http":{client:[19,0,0,"-"]},"asgard.http.client":{HttpClient:[19,2,1,""]},"asgard.http.client.HttpClient":{"delete":[19,3,1,""],get:[19,3,1,""],patch:[19,3,1,""],post:[19,3,1,""],put:[19,3,1,""]},"asgard.services":{accounts:[20,0,0,"-"],agents:[20,0,0,"-"],apps:[20,0,0,"-"],users:[20,0,0,"-"]},"asgard.services.accounts":{AccountsService:[20,2,1,""]},"asgard.services.accounts.AccountsService":{add_user_to_account:[20,5,1,""],get_account_by_id:[20,5,1,""],get_accounts:[20,5,1,""],get_users_from_account:[20,5,1,""],remove_user_from_account:[20,5,1,""]},"asgard.services.agents":{AgentsService:[20,2,1,""]},"asgard.services.agents.AgentsService":{get_agent_by_id:[20,3,1,""],get_agents:[20,3,1,""],get_apps_running_for_agent:[20,3,1,""]},"asgard.services.apps":{AppsService:[20,2,1,""]},"asgard.services.apps.AppsService":{get_app_stats:[20,5,1,""]},"asgard.services.users":{UsersService:[20,2,1,""]},"asgard.services.users.UsersService":{create_user:[20,5,1,""],delete_user:[20,5,1,""],get_accounts_from_user:[20,5,1,""],get_alternate_accounts:[20,5,1,""],get_user_by_id:[20,5,1,""],get_users:[20,5,1,""],update_user:[20,5,1,""]},asgard:{api:[13,0,0,"-"],app:[12,0,0,"-"],backends:[14,0,0,"-"],conf:[12,0,0,"-"],http:[19,0,0,"-"],services:[20,0,0,"-"]}},objnames:{"0":["py","module","Python m\u00f3dulo"],"1":["py","function","Python fun\u00e7\u00e3o"],"2":["py","class","Python classe"],"3":["py","method","Python m\u00e9todo"],"4":["py","attribute","Python atributo"],"5":["py","staticmethod","Python m\u00e9todo est\u00e1tico"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:staticmethod"},terms:{"1min":1,"4xx":[5,19],"5xx":[5,19],"S\u00e3o":6,"\u00edndic":11,"\u00fanic":7,"a\u00e7\u00f5":[3,7,9,14],"al\u00e9m":6,"an\u00e1log":9,"atr\u00e1v":3,"atrav\u00e9s":7,"c\u00e1lcul":[7,20],"c\u00f3dig":[2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"class":[2,3,5,7,9,12,14,15,16,17,18,19,20],"comp\u00f5":7,"conex\u00e3":5,"cont\u00e9m":[2,6],"conte\u00fad":[6,11],"defini\u00e7\u00e3":2,"dispon\u00edv":7,"ent\u00e3":[2,9],"enum":14,"espec\u00edf":9,"est\u00e3":[2,3,6,7,14,16],"estat\u00edst":[7,20],"exce\u00e7\u00e3":7,"f\u00e1cil":9,"fict\u00edci":9,"fun\u00e7\u00f5":[6,7],"import":[2,9],"inst\u00e2nc":[3,7,20],"int":[14,20],"jun\u00e7\u00e3":3,"m\u00e9tod":[3,5,7,9,14,16],"m\u00f3dul":11,"m\u00faltipl":3,"neces\u00e1ri":8,"necess\u00e1r":[5,6],"necess\u00e1ri":6,"p\u00e1gin":11,"padr\u00e3":[5,19],"par\u00e2metr":3,"poss\u00edv":7,"poss\u00edvel":9,"rela\u00e7\u00e3":9,"requisi\u00e7\u00e3":5,"return":[2,9],"ser\u00e3":[5,19],"static":[7,20],"subdivis\u00f5":6,"ter\u00e3":[5,19],"unit\u00e1ri":8,"usu\u00e1ri":[8,11,14],"utilit\u00e1ti":[4,10,11],"v\u00e3o":[3,7],"vers\u00e3":[1,8,10,11],"vis\u00e3":6,"with":[2,9],Com:9,Como:[3,9],Essa:[2,7,20],Essas:7,Esse:[3,5,6,9,19],Esses:[5,19],Isso:2,Uma:3,__init__:9,_request:5,abaix:3,abc:14,abstrat:[3,9,14],acc_id:14,account:[2,3,7,9,12,14,15,16,20],account_by_id:13,account_id:20,accounts:12,accounts_from_us:13,accountsbackend:[14,20],accountsservic:20,accurat:9,acim:2,add_us:14,add_user_to_account:[13,20],adicion:[3,5],aditional_api_urls:17,agent:[2,3,7,9,12,13,14,16,17,20],agent_apps:13,agent_id:[3,7,14,16,17,20],agentd_id:[14,16],agentfactory:2,agents:[2,3,7,8,12,14,16],agents_backend:[3,9,14,16],agents_handl:13,agents_servic:2,agents_with_attrs:13,agentsbackend:[3,9,14,16],agentsresourc:2,agentsservic:[3,6,20],aind:[3,5],aiohttp:[5,13,19],aiohttp_client:8,aiorespons:8,algum:[5,6,9],ali:[5,7,19],ambient:[8,11],any:[2,13],apach:3,apen:2,api:[2,3,4,6,7,8,10,11,12],apis:[3,6,7],app:[1,3,7,14,15,16,20],app_id:[7,18,20],app_stats:13,app_stats_avg_1min:13,append:9,apply_attr_filt:[2,13],apps:[3,7,9,12,14,16,18],apps_backend:[3,9,14,16],appsbackend:[3,9,14,15,16],appsbackends:3,appsserivc:7,appsservic:[3,6,20],appstats:[3,7,14,15,16,20],aqu:[3,6,7,9,14],argument:[5,19],asgard:[2,3,4,5,6,7,8,9,10],asgard_:12,asgard_http_client_connect_timeout:[5,19],asgard_http_client_total_timeout:[5,19],assim:[3,9],async:[2,9],attribut:9,attrs:2,atual:[6,14,16],atualiz:[8,10,11],autentic:9,auth:[12,19],auth_required:[12,19],authspec:12,avg:1,await:[2,9],backend:[2,3,6,7,8,20],backends:[4,6,7,9,10,11,12,13,20],backens:9,banc:8,bas:[3,7,9,12,13,15,16,17,18,19,20],basemodel:[2,12],basesettings:12,bem:3,bool:[5,9],busc:[7,11],cad:[2,3,5,6,7,9,14,19],calculat:18,calculate_stats:[2,13,18],cam:6,capaz:3,cas:[5,7,9,19],cham:9,change_account:13,changelog:11,chron:6,classs:9,client:[1,5,6,9,12,14,16],client_reqrep:[5,19],clientrespons:[5,19],clients:[3,4,6,10,11],clientsession:[5,19],clienttimeout:[5,19],clust:[3,7,20],codebas:9,col:3,comec:[3,9],commits:1,complet:8,comport:[5,19],compreend:9,comun:6,comunic:[3,6],concret:[6,7],conf:[5,9,19],config:12,configs:[5,19],configur:[5,19],confogir:5,conhec:6,connect:[5,19],conseg:[3,6],consid:[7,20],consider:9,consig:7,constru:2,construtor:[3,5,19],cont:[9,14,16],containers:[3,8],contribu:[10,11],converters:6,cor:3,coroutin:[5,19],cpu:[7,18,20],create_us:[13,14,20],cresc:9,cri:[7,8,10,11],current_account:[14,20],dad:[6,8],dat:[9,12,18],def:[2,9],defin:[2,3,5],defind:3,delet:[5,19],delete_us:[13,14,20],dentr:[6,8],depdenent:[3,9,14],descobert:9,descrev:9,desenvolv:[8,11],deslig:8,dess:[2,3,5,6,7,9,20],dest:6,determin:3,dev:[2,3,5,9],dict:[2,5,13,19],dispon:5,divid:[3,7],document:[6,8,10],dois:9,efet:[3,7,9,14],endpints:7,endpoint:2,endpoints:[4,6,7,9,10,11],endppints:7,enpoints:6,enumeration:14,env_prefix:12,env_settings:12,envs:[5,19],escrev:[8,10,11],esss:3,estar:[5,19],estej:5,estiv:3,evolu:8,exception:[5,19],excut:[3,9,14],execut:[3,6,7],exempl:[2,5,9],exist:9,fal:[3,6,7,9,14],far:3,faz:[2,3,5,6,7],featur:[1,5,19],feit:[3,5,19],filter_by_attrs:18,filtered_agents:2,filters:2,filters_dict:13,fiqu:9,font:[3,5,7,9,12,13,14,15,16,17,18,19,20],form:[3,5,9],from:[2,9],funcion:8,funcional:[3,5,6],ger:[8,10,11],geral:[5,6],get:[5,9,19],get_account_by_id:[14,20],get_accounts:[14,20],get_accounts_from_us:[14,20],get_agent_by_id:[3,7,14,16,17,20],get_agents:[2,3,7,9,14,16,17,20],get_alternate_accounts:[14,20],get_app_stats:[3,7,13,14,15,16,20],get_apps_running:[14,16],get_apps_running_for_agent:[3,7,14,16,20],get_by_id:[14,16],get_user_by_id:[14,20],get_users:[14,20],get_users_from_account:[14,20],gui:11,handl:[2,13],handlers:12,headers:[5,19],help:9,hoj:7,html:[8,10,11],http:[1,4,5,6,7,9,10,11,12],http_client:9,httpclient:[4,10,19],https:5,ide:[2,5,6,7],ideal:5,identific:7,igu:[5,19],impl:[9,12,14],implement:[3,6,7,8,10,11,14],independent:14,index:12,inform:9,inicial:1,initializ:9,injet:[3,9,14],instal:11,instanc:[5,19],integr:8,interag:7,interfac:3,intern:[4,10,11],interval:[3,7,13,14,15,16,20],introdu:11,is_from_account:9,json:9,json_respons:2,just:7,jwt:[12,19],k8s:9,k8s_api_url:9,k8sagent:9,k8sagentbackend:9,k8sorchestrator:9,kwargs:[5,19],labels:9,lanc:[5,19],leg:[4,6,10,11],level:6,lid:6,lig:8,linh:[3,9],list:[2,3,7,9,13,14,16,17,18,20],lits:[7,20],local:[8,10,11],localiz:8,log:8,low:6,lowlevel:3,macr:6,main:12,maior:[5,19],manag:3,map:[2,3,7,9,14],marathon:[3,6,12,14],marathonappsbackend:15,math:12,med:[7,9],mencion:2,mes:[2,6,12,14],mescl:[5,19],mesm:[3,7],mesos_api_url:17,mesosagent:[16,17,18],mesosagentsbackend:16,mesosapp:[16,18],mesosclient:17,mesosorchestrator:16,mesospher:3,mesostask:18,method:5,model:[2,3,6,9],models:[2,3,4,6,7,9,10,11,12,13,14,15,16,17,20],moment:[5,19],mostr:7,mov:1,nad:[5,6,19],ness:[2,5,7,9,14,16],new_agent:9,nom:[5,19],non:[5,9,14,19,20],nov:[1,7,8,10,11],object:[12,14,17,19,20],objects:9,objet:[2,3,5,6,7,19,20],obter:9,one_hour:14,one_minut:14,optional:[3,7,14,16,17,20],options:12,orchestr:9,orchestrator:[3,7,9,14,16,20],organiz:[4,9,10,11],orquestator:3,orquestr:[6,7,8,10,11,14,20],orquestrdor:3,orquetsr:6,outr:[2,3,5,9,19],owner:9,pacot:[2,6],papel:7,par:[1,2,3,5,6,7,8,9,10,11,19],parametr:[5,7,9,20],pass:[5,6,7,19,20],past:8,patch:[5,19],patched_startup:[1,12],peg:[2,9],pel:5,pens:9,perceb:[2,7,9],pertencent:[14,16],pod:[3,5,6,7,9,14,19],pont:[6,7],populate_apps:16,poss:7,possu:[3,5,19],post:[5,19],precedent:[5,19],precis:[5,7,9],preench:7,primit:7,principal:[3,6],projet:[2,3,6,7,10],prov:6,put:[5,19],pydantic:[2,12],qua:[3,6,9],quaisqu:[5,19],qualqu:5,quand:7,raise_for_status:[5,19],ram:[7,18,20],raw:1,realiz:3,realment:7,receb:[3,5,7,9],redirect:[5,19],refer:[3,14,16],referent:2,remove_us:14,remove_user_from_account:[13,20],represent:2,request:[5,13,19],requests:[5,19],resourc:[2,12,13],respect:[3,8],respons:[5,9,19],resposr:2,respost:2,restant:[6,7],retorn:[3,7,9,14,16,20],rod:[3,8,9,10,11,14,16],rot:2,scheduledjobsbackend:3,sdk:12,see:9,sefl:9,seg:[5,19],seguint:[5,19],sej:6,self:9,sempr:5,separ:3,ser:[2,3,5,7,9,19],serializ:2,servic:[3,4,6,10,11,12],session:12,settings:[9,12],signatur:9,sistem:14,sobrescrit:[5,19],sock_connect:[5,19],sock_read:[5,19],statistics:18,stats:[1,2],str:[2,3,5,7,13,14,16,17,18,19,20],sub:2,suport:[5,6,9,14],surg:7,task:[12,14,16],tasks:18,tcp:5,ter:3,term:3,test:[8,10,11],thr:[7,20],timeout:[5,19],tip:7,tod:[2,3,5,6,7,8,9,14,16,20],total:[5,19],transform_to_asgard_app_id:18,transform_to_asgard_task_id:18,troc:7,tru:[5,19],type:9,typing:2,update_us:[14,20],update_user_partial:13,url:[5,19],usad:[5,6],usag:18,usand:[2,7,8],usar:[6,9],user:[2,3,7,9,12,14,15,16,20],user_by_id:13,user_has_account:12,user_id:[14,20],users:12,users_from_account:13,users_list:13,usersbackend:[14,20],usersservic:20,uso:[7,20],vai:[2,7,9],val:2,valor:[5,7,9,19],valu:12,vam:9,vari:[3,11],variadead:3,vej:9,vem:[7,20],vez:7,view:[2,9],vincul:14,volt:[5,19],web:2,web_request:13,whoam:13,wrapp:[5,19]},titles:["Changelog","0.90.0","Endpoints HTTP","Backends","&lt;no title&gt;","C\u00f3digos utilit\u00e1tios internos","Organiza\u00e7\u00e3o do c\u00f3digo","Services","Contribuindo com o projeto","Escrevendo uma implementa\u00e7\u00e3o de um novo Orquestrador","Guia de desenvolvimento","Bem vindos \u00e0 documenta\u00e7\u00e3o oficial do projeto Asgard","asgard package","asgard.api package","asgard.backends package","asgard.backends.marathon package","asgard.backends.mesos package","asgard.backends.mesos.client package","asgard.backends.mesos.models package","asgard.http package","asgard.services package"],titleterms:{"c\u00f3dig":[5,6],"utilit\u00e1ti":5,accounts:[13,14,20],agent:18,agents:[9,13,20],agentsservic:7,and:11,api:[1,13],app:[12,18],apps:[13,20],appsservic:7,asgard:[1,11,12,13,14,15,16,17,18,19,20],atual:3,backend:9,backends:[3,14,15,16,17,18],bas:14,bem:11,changelog:0,client:[17,19],conf:12,contents:[12,13,14,15,16,17,18,19,20],contribu:8,desenvolv:10,document:11,endpoints:2,escrev:9,futur:3,gui:10,http:[2,19],httpclient:5,impl:[15,16,17],implement:9,index:13,indic:11,intern:5,kubernet:3,marathon:15,mes:[3,16,17,18],models:18,modul:[12,13,14,15,16,17,18,19,20],nov:9,oficial:11,organiz:6,orquestr:[3,9],orquetsr:3,packag:[12,13,14,15,16,17,18,19,20],projet:[8,11],servic:[7,20],submodul:[12,13,14,15,16,17,18,19,20],subpackag:[12,13,14,16,17,19],suport:3,tabl:11,task:18,users:[13,14,20],vind:11}})