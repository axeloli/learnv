<template>
	<div class="container" v-loading.fullscreen="fullscreenLoading">
		<div class="contain_top">
			<el-form class="form_box" label-width="0px">
			    <el-form-item class="search">
			    	<el-input>
			    		<el-button slot="append" icon="el-icon-search"></el-button>
			    	</el-input>
			    </el-form-item>
				<el-form-item  class="addnew">
					<el-button type="warning">新增微信</el-button>
				</el-form-item>
			   
			</el-form>
		</div>
		<div class="contain_body">
			<div class="switch">
				<el-menu :default-active="type" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		    		<el-menu-item index="ALL">全部账号</el-menu-item>
		    		<el-menu-item index="OFFLINE">离线账号</el-menu-item>
		    		
		    	</el-menu>
			</div>
			<div class="total">共50条</div>
			<el-table
			  
		      :data="tableData"
		      border
		      style="width: 100%">
		      <el-table-column
		        prop="name"
		        label="微信基本信息"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="wxId"
		        label="微信ID"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="friendsNum"
		        label="好友数">
		      </el-table-column>
		      <el-table-column
		        prop="IMEI"
		        label="登录设备IMEI号">
		      </el-table-column>
		      <el-table-column
		        prop="status"
		        label="状态">
		      </el-table-column>
		      <el-table-column
		        label="操作"
		        width="100">
		        <template slot-scope="scope">
		          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
		          
		        </template>
		      </el-table-column>
		    </el-table>
		    <div class="block">
			    <span class="demonstration">完整功能</span>
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
	
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="pageSet.pageSize"
            :current-page="pageSet.pageIndex"
            :total="pageSet.total"
			      layout="total, sizes, prev, pager, next, jumper">
			    </el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
  import tableList from './mock'
  import mockAxios from './mockAxios'
	export default {
		created(){
      // this.tableData = this.data
      this.getList()
		},
		
	    
		data() {
	      return {
          
          keywords: '', // 搜索框
          type: 'ALL', // 0.ALL 1.ONLINE 2.OFFLINE
	        tableData: [],
	        data: tableList,
	        pageSet: {  // 页面相关
            pageIndex: 1,
            pageSize: 20,
            total: 0
          },
          fullscreenLoading: false,
	      };
      },
		methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	        switch(key){
	        	case '1':
	        	this.tableData = this.data;
	        	break;
	        	case '2':
            this.tableData = this.data.filter(v=>v.status == 'offline');
            break;
            default:
            break;
	        }
	        
        },
        // 获取table数据
        getList() {
          let params = {
            pageIndex: this.pageSet.pageIndex,
            pageSize: this.pageSet.pageSize,
            keywords: this.keywords,
            type: this.type
          }
          // 请求时loading弹窗
          !this.fullscreenLoading && (this.fullscreenLoading = true)
          mockAxios.post('/getList', params).then(res => {
            if (res && res.success) {
              this.tableData = res.data || []
              this.pageSet.total = res.total || 0
              this. fullscreenLoading && (this.fullscreenLoading = false)
            } else {
              return Promise.reject({errMsg: 'DATA ERROR'})
            }
          }).catch(e => {
            this. fullscreenLoading && (this.fullscreenLoading = false)
            console.log('get list error', e)
            this.$message.error(e && e.errMsg || '发生了未知错误');
          })
        },
	      handleClick(row) {
	        console.log(row);
	      },
	      handleSizeChange(size) {
          this.pageSet.pageSize = size
          this.getList()
	      },
	      handleCurrentChange(val) {
          this.pageSet.pageIndex = val
          this.getList()
	      }
	    }
	}
</script>

<style lang="less">
	.container{
		width:1200px;
		margin:0 auto;
		
		position:relative;
	}
	.search{
		width:240px;
	}
	.search .el-input-group__append{
		background:orange;
	}
	.form_box{
		display:flex;
		padding-top:60px;
	}
	.addnew{
		position:absolute;
		right:0px;
	}
	.total{
		font-size:12px;
		color:#909399;
		line-height:24px;
	}
	
</style>