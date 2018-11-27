<template>
    <div>
        <h3>1) Wordpress base URL database replace</h3>
        <label for="prefix"> Prefix </label>
        <input id="prefix" type="text" v-model="prefix" />
        <label for="orldurl"> Old URL </label>
        <input id="oldurl" type="text" v-model="oldurl" />
        <label for="newurl"> New URL </label>
        <input id="newurl" type="text" v-model="newurl" />
        <div>
            <br>
            <code>
                UPDATE {{prefix}}options SET option_value = replace(option_value, '{{oldurl}}', '{{newurl}}') WHERE option_name = 'home' OR option_name = 'siteurl';<br>

UPDATE {{prefix}}posts SET guid = replace(guid, '{{oldurl}}','{{newurl}}');<br>

UPDATE {{prefix}}posts SET post_content = replace(post_content, '{{oldurl}}', '{{newurl}}');<br>

UPDATE {{prefix}}postmeta SET meta_value = replace(meta_value,'{{oldurl}}','{{newurl}}');
            </code>
        </div>
    </div>
</template>

<script>
export default {
    name: 'databaseUrlReplace',
    data: function(){
        return{
            prefix:'wp_',
            oldurl:'http://orl.url',
            newurl:'http://new.url'
        }
    }
}
</script>
<style>

</style>
