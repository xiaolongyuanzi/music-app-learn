<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'
  import ListView from 'base/listview/listview'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'
  export default {
  	data(){
  		return {
  			singers:[]
  		}
  	},
  	created(){
  		this._getSignerList()
  	},
  	methods:{
  		_getSignerList(){
  			getSingerList().then((res)=>{
  				if(res.code === ERR_OK){
  					this.singers = this._normalizeSinger(res.data.list)
  					// console.log(res.data)
  					// console.log(this._normalizeSinger(this.singers))
  				}
  			})
  		},
  		_normalizeSinger(list){
  			let map = {
  				hot:{
  					title:HOT_NAME,
  					items:[]
  				}
  			}
  			list.forEach((item,index)=>{
  				//默认list数据前10条为热门
  				if(index < HOT_SINGER_LEN){
  					map.hot.items.push(new Singer({
  						id:item.Fsinger_mid,
  						name:item.Fsinger_name
  					}))
  				}
  				const key = item.Findex
  				if(!map[key]){
  					map[key] = {
  						title:key,
  						items:[]
  					}
  				}
  				map[key].items.push(new Singer({
						id:item.Fsinger_mid,
						name:item.Fsinger_name
  				}))
  			})
  			// console.log(map)
  			//得到有序列表，处理map的数据结构
  			let hot = []
  			let ret = []
  			for (let key in map){
  				let val = map[key]
  				if(val.title.match(/[a-zA-Z]/)){
  					ret.push(val)
  				}else if(val.title === HOT_NAME){
  					hot.push(val)
  				}
  			}
  			ret.sort((a,b)=>{
  				return a.title.charCodeAt(0) -b.title.charCodeAt(0)
  			})
  			return hot.concat(ret)
  		}
  	},
    components:{
      ListView
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
      position: fixed
      top: 88px
      bottom: 0
      width: 100%
</style>