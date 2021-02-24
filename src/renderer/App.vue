<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-02-20 16:53:01
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-02-24 17:32:13
-->
<template>
  <div id="app">
    <div class="search-field">
      <input v-model="mainUrl" type="text" placeholder="请输入swagger需要抓取的主页url">
      <a @click="start" v-loading="mainLoading">开始</a>
      <a @click="startWithSinglePage" v-loading="mainLoading">单页开始</a>
    </div>
    <div class="content-field">
      <div class="all-generate-field" >
        <a class="all-generate" v-if="allPageConfigData.length" @click.prevent="allGenerateConfigFile"  v-loading="loadingContent">一键生成json配置</a>
        <a class="all-generate" v-if="mainUrlValidData.length" @click.prevent="startAllJsonSetting"  v-loading="loadingContent">一键获取swagger数据</a>
        <a class="all-generate" v-if="allPageConfigData.length" @click.prevent="showAddDefaultHttpConfigAlert"  v-loading="loadingContent">增加默认配置</a>
      </div>
      <ul>
        <li v-for="(item, index) in mainUrlValidData" :key="index">
          <span class="key">文档名: {{item.key}}</span>
          <div>
             <span class="value">{{item.value}}</span>
             <a  @click.prevent="startSingleSwaggerFile(item)" class="generate">获取swagger数据</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="all-generate-content-field">
      <ul>
        <li class="document-item" v-for="(item, index) in allPageConfigData" :key="index">
          <div class="error-info-show" v-if="!item.isSuccess">
            <div>***********************************</div>
            <div>文档名 {{item.title}}</div>
            <div>请求url: {{item.url}}</div>
            <div>错误信息:</div>
            <div>{{item.errMsg}}</div>
            <div>错误堆栈:</div>
            <div>{{item.stackMsg}}</div>
            <div>***********************************</div>
          </div>
          <div class="success-info-show" v-if="item.isSuccess">
              <div class="ducoment-show-header">
                <div>
                  <div>当前文件：{{ item.documentTitle || 'swagger-bootstrap-ui-前后端api接口文档' }}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;文档版本: {{item.documentVersion || '1.0'}}</div>
                  <div>主机地址: {{ item.host }}</div>
                </div>
                <div>
                  <a  class="show-btn" @click.prevent="generateConfigFile(index)">生成配置文件 ></a>
                  <a  class="show-btn" @click.prevent="showContextPathAlert(index)">配置环境path ></a>
                  <a  class="show-btn" @click.prevent="showCurDocument(index)">{{ item.isShow? '折叠':'展开' }} ></a>
                </div>
              </div>
              <!-- item表示的是整个swagger页面的内容 -->
              <ul class="generate-content-field" v-if="item.isShow">
                <!-- li中的subItem表示的是一组配置内容 -->
                <li  class="li-code"  v-for="(subItem, index) in item.dataList" :key="index">
                  <div>/********** {{subItem.title}} ***************************************************/</div>
                  <ul>
                    <li v-for="(subSubItem, index) in subItem.dataList" :key="index">
                      <div>/**</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;{{subSubItem.title}}</div>
                      <div>*/</div>
                      <div>{{ `${subSubItem.functionName} : {` }}</div>
                      <div>{{ `&nbsp;&nbsp;&nbsp;&nbsp;url: \`${ subSubItem.url }\`` }}</div>
                      <div>{{ `&nbsp;&nbsp;&nbsp;&nbsp;method: '${ subSubItem.method }'` }}</div>
                      <div>{{ `&nbsp;&nbsp;&nbsp;&nbsp;mime: '${ subSubItem.mime }'` }}</div>
                      <div>{{ `}` }}</div>
                    </li>
                  </ul>
                  
                </li>
              </ul>
          </div>
        </li>
      </ul>
    </div>
    <el-dialog title="环境path配置" :visible.sync="contextPathVisable">
      <el-form :model="form">
        <el-form-item label="环境path" :label-width="formLabelWidth">
          <el-input v-model="form.contextPath" autocomplete="off" palceholder="比如: /context"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="contextPathVisable = false">取 消</el-button>
        <el-button type="primary" @click="addContextPath">确 定</el-button>
      </div>
  </el-dialog>
  <el-dialog title="增加http默认配置" :visible.sync="httpDefaultConfigVisiable">
      <el-form :model="form">
        <el-form-item label="默认请求方式" :label-width="formLabelWidth">
          <el-input v-model="httpDefault.method" autocomplete="off" palceholder="比如: get,post"></el-input>
        </el-form-item>
        <el-form-item label="默认媒体类型" :label-width="formLabelWidth">
          <el-input v-model="httpDefault.mime" autocomplete="off" palceholder="比如: application/json"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="httpDefaultConfigVisiable = false">取 消</el-button>
        <el-button type="primary" @click="httpDefaultConfigVisiable=false">确 定</el-button>
      </div>
  </el-dialog>
  </div>
</template>
<script>
import fs from 'fs'
import pathUtil from 'path'
  export default {
    name: 'my-project',
    data(){
      return {
        mainUrl: "http://10.0.14.207:8000/",
        mainUrlValidData: [],
        mainLoading: false,
        loadingContent: false,
        isAllLoad: false,  //是否是加载所有的页面，如果不是，则加载的是单个页面
        allPageConfigData: [],
        singlePageConfigData:{},

        contextPathVisable:false,
        formLabelWidth:'100px',
        form: {
          contextPath: ''  //默认是不带网关前缀
        },

        httpDefaultConfigVisiable: false,
        httpDefault: {
          method: 'post',
          mime: 'application/json'
        }
      }
    },
    methods: {
      start(){
        this.mainLoading = true;
        this.getSwaggerMain();  
      },

      startWithSinglePage(){
        this.startSingleSwaggerFile({key: '', value:this.mainUrl})
      },

      showCurDocument( index ){
        let item = this.allPageConfigData[index];
        item.isShow = !item.isShow
      },

      //弹出环境配置的弹出框
      showContextPathAlert(index){
        this.curUpdateContextPath = index;
        this.contextPathVisable = true
      },
      //弹出框点击确认之后给数据添加环境前缀
      addContextPath(){
         let contextPath = this.form.contextPath || '';
         if( !contextPath.length ){
           return;
         }
         let curIndex = this.curUpdateContextPath;
         let pageInfo = this.allPageConfigData[curIndex];
         pageInfo.dataList && pageInfo.dataList.forEach( group=>{
            if( Array.isArray(group.dataList) ){
              group.dataList.forEach( item=>{
                if( contextPath.endsWith('/') ){
                  contextPath = contextPath.substr(0, contextPath.length-1);
                }
                item.url = contextPath+item.url;
              })
            }
         })
        this.contextPathVisable = false;
        alert("当前swagger页环境path前缀应用成功")
      },

      async allGenerateConfigFile(){
        this.isAllGenerate = true;
        for( let i=0; i<this.allPageConfigData.length ;i++ ){
          await this.generateConfigFile(i);
        }
        
        alert("配置文件全部生成成功！")
        this.isAllGenerate = false;
      },

      async generateConfigFile( index ){
        //获取当前的路径，然后在其路径下创建一个以host为名字的json文件
        let directoryPath = pathUtil.join(__dirname, '../../url_json_config_xxxx');
        try {
          await fs.stat(directoryPath, ()=>{});
        }catch( e ){
          await fs.mkdir(directoryPath, ()=>{});
        }

        //获取指定swagger页的数据
        let pageInfo = this.allPageConfigData[index];
        if(!pageInfo.isSuccess ){
          return;
        }
        //获取host作为文件的名字
        let filePath = pathUtil.join(directoryPath, pageInfo.host.replace(/\.|:/g, '_')+".js");

        let { documentTitle='swagger-bootstrap-ui-前后端api接口文档', documentVersion='1.0', host, dataList=[] } = pageInfo;
        fs.writeFileSync( filePath, `/**\n\t当前文件：${documentTitle}\t${documentVersion}\n\t主机地址: ${host}  \n*/` );
        fs.appendFileSync( filePath, `\n\nexport default {\n`, );
        for( let group of dataList ){
          fs.appendFileSync( filePath, `\n/********** ${group.title} ***************************************************/\n` );
          for( let info of group.dataList ){
            fs.appendFileSync( filePath, `\n/**\n` );
            fs.appendFileSync( filePath, `\t${info.title}  \n` );
            fs.appendFileSync( filePath, `*/\n` );
            fs.appendFileSync( filePath, `${info.functionName} : {\n` );
            fs.appendFileSync( filePath, `\turl: \`${info.url}\`,\n` );
            fs.appendFileSync( filePath, `\tmethod: \`${info.method}\`,\n` );
            fs.appendFileSync( filePath, `\tmime: \`${info.mime}\`\n` );
            fs.appendFileSync( filePath, `},\n` );
            fs.appendFileSync( filePath, `\n` );
          }
        }
        fs.appendFileSync( filePath, `\n}` );
        if( !this.isAllGenerate ){
          alert("配置文件生成成功！")
        }
      },

      async getSwaggerMain(){
        let url = this.mainUrl;
        let res = await this.$http.get(url);
        this.mainLoading = false;
        if( res.status == 200 ){
          let data = res.data;
          this.parseSwaggerMainPage(data)
        }
      },

      //此时的data是字符串类型的数据
      parseSwaggerMainPage(data){
        // console.log(data)
        this.mainUrlValidData = [];
        //1、找到所有的table
        //2、判断table的thead中含有Availability Zones, 则表示是有效的注册swagger文档区域
        let reg = /<table[\S\s]*?id='instances'[\s\S]*?<\/table>/g;
        let matchs = data.match(reg) || [];
        if( matchs.length == 0 ){
          return;
        }
        let availDataList =  matchs.filter( item=>{
              return item.includes("Availability Zones")
            } )
        if( availDataList.length == 0 ){
            return;
        }
        let availTable = availDataList[0];
        //解析所有的<a href=""></a>
        matchs = availTable.match(/<a[\s\S]*?href=".+?"[\s\S]*?>[\s\S]*?<\/a>/g) || []
        matchs.forEach( item=>{
          //获取每一条数据的URL，以<a></a>中间包含的数据
          let aMatch = item.match(/href="(.+?)"/);
          let key = "";
          let value = "";
          if( aMatch.length > 1 ){
              value = aMatch[1];
          }
          let contentMatch = item.match(/>([\s\S]+?)</);
          if( contentMatch.length > 1 ){
            key = contentMatch[1]
          }
          this.mainUrlValidData.push({ 'key': key, 'value': value })
        })
      },

      async startAllJsonSetting(){
        this.isAllLoad = true;
        this.loadingContent = true;
        this.allPageConfigData = [];
        for( let item of this.mainUrlValidData ){
          await  this.startSingleSwaggerFile( item );
        }
        this.isAllLoad = false;
        this.loadingContent = false;
      },

      showAddDefaultHttpConfigAlert(){
        this.httpDefaultConfigVisiable = true;
      },

      async startSingleSwaggerFile( {key:name="", value:url=""} ){
        //页面URL：http://10.0.14.207:8017/doc.html
        //页面对应的数据的URL: http://10.0.14.207:8017/v2/api-docs
        let lastIndex = url.lastIndexOf('/');
        if( lastIndex == -1 ){
          alert("url错误,操作终止");
          return;
        }

        if( !this.isAllLoad ){
          this.loadingContent = true;
          this.allPageConfigData = [];
        }
        let dataUrl = url.substring( 0, lastIndex )+"/v2/api-docs";
        try {
          let res = await this.$http.get(dataUrl);
          if( res.status == 200 ){
          let data = res.data;
          console.log(data)
          this.parseSwaggerContentPage(data)
          if( !this.isAllLoad ){
            this.loadingContent = false
         }
        }
        }catch ( e ) {

          //存在异常
          this.allPageConfigData.push( {
            title: name,
            url: dataUrl,
            errMsg: e.message,
            stackMsg: e,
            isShow: true,
            isSuccess: false
          })

          if( !this.isAllLoad ){
            this.loadingContent = false
         }
        }
      },

      //此时的data是字符串类型的数据
      parseSwaggerContentPage(data) {
        //获取到文档的标题
        let documentTitle = data.info.title;
        let documentVersion = data.info.version;
        let swaggerVersion = data.swagger;
        let host = data.host;
        console.log(`swagger版本: ${swaggerVersion}`);
        console.log(`host地址：${host}`)

        //根据tags确定好生成配置的先后顺序.
        const tags = data.tags;
        if( !tags || !tags.length ){
          alert("无API配置内容");
          return;
        }
        console.log("tags内容列表：");
        console.log(tags)

        let info = { 
           documentTitle,
           documentVersion,
           swaggerVersion,
           host,
           dataList:[],
           isShow: true,
           isSuccess: true
         }


        //获取所有的swagger中的url相关的配置数据
        //paths是一个对象，不是数组
        let paths = data.paths || {};
        Object.keys( paths ).forEach( (pathKey, index) => {
          //path是一个对象。且key值不固定。 
          let path = paths[pathKey]

          Object.keys(path).forEach( (httpMethod, index) =>{
            let data = path[httpMethod]
            //1.uri
            let url = pathKey;
            //2.请求方法
            let method = httpMethod || this.httpDefault.method || "";
            //3.MIME
            let mime = data.consumes && data.consumes[0] || this.httpDefault.mime || ""
            //4.函数方法名
            let functionName = data.operationId;
            //5.函数方法名上的注释标题
            let title = data.summary;
            //6.tag解析，用于确定每个属性的排列顺序
            let tag = data.tags && data.tags[0] || ''
            //7.解析参数
            //  暂不解析，现阶段用不到
            info.dataList.push( {url, method, mime, functionName, title, tag} )
          } )
        })


        let dataList = [];
        for( let tag of tags ){
            let  listInTag = info.dataList.filter( item=>{
               return item.tag == tag.name;
            })
            info.dataList = info.dataList.filter(item=>{
              return item.tag != tag.name;
            } )
            dataList.push({
              title: tag.name,
              dataList: listInTag
            });
        }
        if( info.dataList.length ){
          dataList.push( {
            title: '默认分组的数据',
            dataList: info.dataList
          })
        }
        info.dataList = dataList;
         this.allPageConfigData.push(info)
      }
    }
  }
</script>

<style lang="scss" scoped>
.search-field {
     -webkit-app-region: no-drag;
  width: 530px;
  margin: 50px auto 0;
  display: flex;
  align-items: center;
  input {
    box-sizing: border-box;
    width: 440px;
    height: 36px;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ddd;
    padding-left: 10px;
  }
  a {
    margin-left: 5px;
    box-sizing: border-box;
    font-size: 18px;
    color: #333;
    display: inline-block;
    line-height: 36px;
    min-width: 84px;
    text-align: center;
    background-color: rgb(72, 135, 189);
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
}



.content-field {
  -webkit-app-region: no-drag;
  padding: 20px;
  margin: 20px auto 0;
  .all-generate-field {
    .all-generate {
      display: inline-block;
      padding: 5px 10px;
      background-color: rgb(72, 135, 189);
      border-radius: 4px;
      margin-bottom: 5px;
      color: #fff;
      font-size: 12px;
      float: right;
      cursor: pointer;
      margin-left: 10px;
    }
    &::after {
      display: block;
      content:'';
      clear: both;
    }
  }
  li {
    height: 36px;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 14px;
    padding: 0 5px;
    .generate {
      display: inline-block;
      background-color: rgb(72, 135, 189);
      margin-left: 20px;
      // height: 30px;
      font-size: 12px;
      color: #fff;
      border-radius: 4px;
      height: 28px;
      line-height: 20px;
      padding: 3px 10px;
      cursor: pointer;
    }
  }
  li:nth-child(2n+1){
    background-color: #f5f5f5;
  }
  
}

.all-generate-content-field {
    padding: 20px;
    font-size: 14px;
    background-color: #f5f5f5;
    .generate-content-field {
      margin-top: 5px;
      border-radius: 4px;
      li {
        color: #333;
        padding: 20px 0;
        font-weight: bold;
      }
    }
}

.document-item {
 border: #eee;
 .error-info-show {
   padding:20px;
   background-color:  #fff;
   color: #c00;
   margin-bottom: 20px;
   border-radius: 6px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
 }
 .success-info-show {
   background-color:  #fff;
   margin-bottom: 20px;
   padding:20px;
   border-radius: 6px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
 }
.ducoment-show-header {
  display: flex;
  justify-content: space-between;
  .show-btn {
    display: inline-block;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 4px;
    font-size: 12px;
    border: 1px solid #aaa;
  }
}
}



  /* CSS */
</style>
