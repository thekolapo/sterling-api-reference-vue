<template>
    <div>
        <div class="img-container">
            <img src="./assets/img/img-signup.png" id="img-login">
        </div>
        <div class="header-text">Sign Up to start Collaborating</div>
        <form>
            <input class="" placeholder="Full name">
            <input class="" placeholder="Email">
            <input class="" placeholder="Password">
            <button>Submit</button>
        </form>
        <div class="link-signup">Already have an account? <a href="/login.html">Sign In</a></div>  
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

body{
    font-family: "Graphik";
    font-weight: normal;
    // background: #0d1014;
    // color: white;
    padding-bottom: 100px;
}

.img-container{
    width: 100%;
    height: 290px;
    margin-top: 50px;
}

#img-login{
    width: 100%;
    height: 240px;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
    margin-top: 22px;
    // display: none;
}

.header-text{
    width: 20%;
    text-align: center;
    font-weight: 500;
    line-height: 1.3;
    font-size: 30px;
    margin-top: 10px;
    margin: 0 auto;
    margin-bottom: 29px;
}

.link-signup, .link-forgot-password{
    width: 100%;
    text-align: center;
    font-size: 15px;
    margin-top: 23px;

    a{
        text-decoration: none;
        color: #4a90e2;
    }
}

.link-forgot-password{
    margin-top: 8px;
}

form{
    width: 20%;
    margin: 0 auto;
    
}

input{
    height: 41px;
    width: 100%;
    display: block;
    border-radius: 5px;
    border: solid 1px #cac8c8;
    background-color: #f6f6f6;
    padding-left: 16px;
    margin-bottom: 26px;
}

button{
    width: 100%;
    display: block;
    border-radius: 5px;
    box-shadow: 1px 5px 20px 1px rgba(49, 49, 49, 0.46);
    height: 39px;
    background-color: #000000;
    color: white;
    font-size: 14px;
    transition: 0.5s;
}

button:hover{
    box-shadow: none;
    transition: 0.5s;
}

@media screen and (max-width: 1440px){
    form{
        width: 23%;
    }
}

@media screen and (max-width: 1280px){
    form{
        width: 27%;
    }

    .header-text{
        width: 30%;
    }
}

@media screen and (max-width: 1024px){
    form{
        width: 38%;
    }

}

@media screen and (max-width: 768px){
    form{
        width: 50%;
    }

    .header-text{
        width: 50%;
    }
}

@media screen and (max-width: 600px){
    form{
        width: 60%;
    }
}

@media screen and (max-width: 480px){
    form{
        width: 80%;
    }

    .header-text{
        width: 100%;
        font-size: 28px;
    }
}
</style>
