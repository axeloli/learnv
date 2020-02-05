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
		</div>
	</div>
</template>

<script>
	export default {
		data() {
	      return {
	        activeIndex: '1',
	        
	      };
	    },
		methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	        
	      }
	    }
	}
</script>

<style lang="less" scoped>
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
</style>