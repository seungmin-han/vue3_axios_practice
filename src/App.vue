<template>
  	<img alt="Vue logo" src="./assets/logo.png">
  	<div>
  		<input type="text" :value="store.token" disabled>
		<button @click="store.getToken">토큰 발급</button>
  	</div>  
  	<hr>
  	<div>
    	<table border=1 align=center>
			<tr>
				<th>id</th>
				<th>name</th>
			</tr>
			<tr v-for="item in store.state.list" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
			</tr>
  		</table>
		<input ref="id" type="text" v-model="store.id" placeholder="id"><br>
		<input ref="name" type="text" v-model="store.name" placeholder="name"><br>
		<button @click="store.create, nameCheck">추가</button>
		<button @click="store.update, nameCheck, idCheck">수정</button>
		<button @click="store.delete_, idCheck">삭제</button>
  	</div>
	<hr>
</template>

<script>


// import Service from "@/api/Service"
import {useListStore} from "@/stores/list"
import { ref } from '@vue/reactivity';
export default {
  name: 'App'
  , setup() 
  {
    const store = useListStore();
    const id = ref(null);
    const name = ref(null);
    
    function nameCheck() 
    {
        if(name.value==null || name.value=="") 
        {
            alert("name을 입력하세요.");
            return;
        }
    }

    function idCheck() 
    {
        if(id.value==null || id.value=="") 
        {
            alert("id를 입력하세요.");
            return;    
        }
    }
    return {
        store
        , id
        , name
        , nameCheck
        , idCheck
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
