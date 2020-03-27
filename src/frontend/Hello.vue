<template>
    <div id="app">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function() {
            return {
                message: "hello world from vue.js!"
            }
        }
    }

    var frankie = function () {
        console.log("ok ok hello");
    };
    frankie();
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #CDF;
        border: 1px solid #000;
        padding: 20px;
        margin: 20px;
        max-width: 401px;
    }
</style>
