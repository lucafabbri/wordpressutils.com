<template>
    <div>
        <h2>1) Wordpress base URL database replace</h2>
        <p>Change and Update WordPress URLS in Database When Site is Moved to new Host</p>
        <div>
            <label for="prefix"> Table Prefix </label>
            <input id="prefix" type="text" v-model="prefix" />
            <label for="orldurl"> Old URL </label>
            <input id="oldurl" type="text" v-model="oldurl" />
            <label for="newurl"> New URL </label>
            <input id="newurl" type="text" v-model="newurl" />
        </div>
        <div>
            <br>
            <pre>
UPDATE {{prefix}}options SET option_value = replace(option_value, '{{oldurl}}', '{{newurl}}') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE {{prefix}}posts SET guid = replace(guid, '{{oldurl}}','{{newurl}}');
UPDATE {{prefix}}posts SET post_content = replace(post_content, '{{oldurl}}', '{{newurl}}');
UPDATE {{prefix}}postmeta SET meta_value = replace(meta_value,'{{oldurl}}','{{newurl}}');
            </pre>
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
