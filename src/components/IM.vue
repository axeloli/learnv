<template>
	<div class="container">
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
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		    		<el-menu-item index="1">全部账号</el-menu-item>
		    		<el-menu-item index="2">离线账号</el-menu-item>
		    		
		    	</el-menu>
			</div>
			<div class="total">共50条</div>
			<el-table
			  
		      :data="tableData"
		      border
		      style="width: 100%">
		      <el-table-column
		        prop="basicinfor"
		        label="微信基本信息"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="weixinID"
		        label="微信ID"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="friendsnum"
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
	
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created(){
			this.tableData = this.data
		},
		
	    
		data() {
	      return {
	        activeIndex: '1',
	        tableData:[],
	        data:[
	        	{
	        		basicinfor:'张三1',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'online',

	        	},
	        	{
	        		basicinfor:'张三2',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'offline',

	        	},
	        	{
	        		basicinfor:'张三3',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'online',

	        	},
	        	{
	        		basicinfor:'张三4',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'offline',

	        	},
	        	{
	        		basicinfor:'张三5',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'online',

	        	},
	        	{
	        		basicinfor:'张三6',
	        		weixinID:'321654asdasd',
	        		friendsnum:'12',
	        		IMEI:'1a2b3c4d',
	        		status:'offline',

	        	},
	        ]
	        
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
	        	this.tableData = this.data.filter(v=>v.status == 'offline')
	        }
	        
	      },
	      handleClick(row) {
	        console.log(row);
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
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