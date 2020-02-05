<template>
	<div class="admin-box">
		<div class="nav_box">
			<div class="logo">SCRM微信管理</div>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	    		<el-menu-item index="1">设备管理</el-menu-item>
	    		<el-menu-item index="2">微信管理</el-menu-item>
	    		<el-menu-item index="3">IM管理</el-menu-item>
	    	</el-menu>
	    	<div class="user">张丽丽</div>
		</div>
    	<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
	      return {
	        activeIndex: '3',
	        
	      };
	    },
		methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	        switch(key){
	        	case '1':
	        	this.$router.push('/topnav/device');
	        	break;
	        	case '2':
	        	this.$router.push('/topnav/weixin');
	        	break;
	        	case '3':
	        	this.$router.push('/topnav/IM');
	        	break;
	        }
	      }
	    }
	}
</script>

<style lang="less" scoped>
	.nav_box {
		display: flex;
		border-bottom:1px solid #e6e6e6;
		line-height: 60px;
		font-size:14px;
		height:60px;
		padding:0 40px;
		box-shadow:0 5px 5px #e6e6e6;
		.el-menu{
			border-bottom:0px;
		}
	}
	.logo{
		font-size: 18px;
		color:orange;
		padding-right:160px;
	}
	.user{
		position:absolute;
		right:40px;
	}

</style>