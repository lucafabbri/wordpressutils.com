<template>
    <div>
        <h2>2) Wordpress meta key replace</h2>
        <p>Usefull when you import a wordpress database dump from windows and table prefix get lowercase</p>
        <div>
            <label for="prefix"> Table Name </label>
            <input id="prefix" type="text" v-model="tablename" />
            <label for="prefix"> Field Name </label>
            <input id="prefix" type="text" v-model="fieldname" />
            <label for="orldurl"> Old Value </label>
            <input id="oldurl" type="text" v-model="oldvalue" />
            <label for="newurl"> New Value </label>
            <input id="newurl" type="text" v-model="newvalue" />
        </div>
        <div>
            <br>
            <pre>
UPDATE {{tablename}} SET {{fieldname}} = replace({{fieldname}},'{{oldvalue}}','{{newvalue}}');
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'metaKeyReplace',
    data: function(){
        return{
            tablename:'wp_usermeta',
            fieldname:'meta_key',
            oldvalue:'oldvalue',
            newvalue:'newvalue'
        }
    }
}
</script>
<style>

</style>
