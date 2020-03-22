<template>
    <div id="login">
        <h1>Login</h1>
       <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        
        name: 'Login',
        data() {
            return {
                input: {
                    password: "password"
                }
            }
        },
        methods: {
            login() {
                if(this.input.password != "") {
                    if(this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } else {
                        console.log("The password is incorrect");
                    }
                } else {
                    console.log("A password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>