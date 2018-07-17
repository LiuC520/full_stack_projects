<template>
  <div class="containerFloatLeft">
    <h2 class="h2">AsyncStorage</h2>
    <p class="mt20">AsyncStorage是一个简单的键值存储系统，允许您在应用程序的多个负载之间保留数据。 它存储在本地浏览器中，因此同一浏览器的任何用户都将看到相同的数据。 这也意味着数据不会跟随设备之间的用户 - 为此，您需要将对象保存到Firebase等服务器后端。</p>
    <p class="mt20">AsyncStorage JavaScript API是一个简单的外观，可在浏览器内存储中提供干净的Promise API。</p>
    <p class='code1'>
      <span class="gray">// 保存数据</span><br/>
      try {<br/>
        &nbsp; await AsyncStorage.setItem( <span class="gray">'my-storage-key'</span>,  <span class="gray">'I like to save it.'</span>);<br/>
      } catch (error) {<br/>
         &nbsp; <span class="gray">// Error saving data</span><br/>
      }
    </p>
    <p class='code1'>
      <span class="gray">// 获取数据</span><br/>
      try {<br/>
       &nbsp; const value =  await AsyncStorage.getItem( <span class="gray">'my-storage-key'</span>);<br/>
      &nbsp; if (value !== <span class="green">null</span>) {
       &nbsp; &nbsp;  // We have data!
       &nbsp; &nbsp;  <span class="green">console</span>.log(value);
      &nbsp; }
      } catch (error) {<br/>
         &nbsp; <span class="gray">// Error retrieving data</span><br/>
      }
    </p>

    <h4>方法</h4>
    <p class='graybg'>static getItem(key: string): Promise</p>
    <p class="mt20">获取为key的Item.返回promise，成功就返回值，错误就reject</p>

    <p class='graybg'>static  setItem(key: string, value: string): Promise</p>
    <p class="mt20">存储为key的Item.返回promise，保存成功就resolve，错误就reject</p>

    <p class='graybg'>static removeItem(key: string): Promise</p>
    <p class="mt20">移除为key的Item.返回promise，成功就返回数组，里面都是key值</p>

    <p class='graybg'>static multiGet(keys: Array&lt;string>): Promise</p>
    <p class="mt20">获取所有的key.返回promise，成功就返回一个包含所有值的数组，错误就reject</p>

    <p class='graybg'>static getAllKeys(): Promise</p>
    <p class="mt20">获取多个key的值.返回promise，成功就返回值，错误就reject</p>

    <p class='graybg'>static multiSet(keyValuePairs: Array&lt;[string, string]>): Promise</p>
    <p class="mt20">存储多个key的数据.返回promise，成功就返回值，错误就reject</p>

    <p class='graybg'>static multiSet(keyValuePairs: Array&lt;[string, string]>): Promise</p>
    <p class="mt20">存储多个key的数据.返回promise，成功就返回值，错误就reject</p>

  </div>
</template>

<script>
export default {
  name: "asyncstorage",
  mounted() {
    document.title = "asyncstorage";
  },
  methods: {
    toview() {
      this.$router.push({
        path: "view"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../styles/mixin";
[v-cloak] {
  display: none;
}
</style>
