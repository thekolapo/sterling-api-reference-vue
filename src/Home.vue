<template>
    <div>
        <div id="nav">
            <div class="left-side">
                <img src="./assets/img/sterling-logo.png">
                <div><span class="color-red">Sterling</span> - Dev Arena</div>
            </div>
            <div class="right-side">
                <!-- <a href="/signup.html">Sign Up</a> -->
                <router-link to="/Signup">Sign Up</router-link>
                <a href="#section-3">Pricing</a>
                <a href="#section-3">Integrations</a>
            </div>
        </div>
         <div id="hero-section">
            <div class="left-side" id="hero-section-left">
                <div class="header-text">The future bank starts with collaboration</div>
                <div class="long-text">SPAY presents an array of carefully selected Suite of APIs targeted to meet the needs of fintechs, SMEs and tech communities.</div>
                <Button class="button-black" @click="navigateTo('/docs')">View Docs</Button>
                <Button class="button-trans" @click="navigateTo('/login')">Login</Button>
            </div>
            <div class="right-side" id="hero-section-right">
                <img src="./assets/img/hero-image.png" id="hero-image" ref="heroImage">
            </div>
        </div>
        <div id="section-2">
            <div class="header-text">Build tomorrow’s digital experiences, today.</div>
            <div class="long-text">Tap into the vast toools we’ve built and create powerful integrations for our 3 million customers - or simply just for your team.</div>
            <div class="section-discover-create">
                <div class="box-img-text">
                    <img src="./assets/img/img-discove.png" id="img-create" ref="imgDiscover">
                    <div class="text-short">Discover</div>
                    <div class="text-long">Look trough our docs to  find an API that interests</div>
                </div>
                <div class="box-img-text">
                    <img src="./assets/img/img-create.png" id="img-create" ref="imgCreate">
                    <div class="text-short">Create</div>
                    <div class="text-long">Let your creativity loose in our sandbox.</div>
                </div>
                <div class="box-img-text">
                    <img src="./assets/img/img-launch.png" id="img-launch" ref="imgLaunch">
                    <div class="text-short">Launch</div>
                    <div class="text-long">Go Live with your new invention.  The sky is your launchpad</div>
                </div>
            </div>
        </div>
        <!-- <div id="section-3">
            <div class="left-side"></div>
            <div class="right-side">
                <div class="header-text">The future bank starts with collaboration</div>
                <div class="long-text">SPAY presents an array of carefully selected Suite of APIs targeted to meet the needs of fintechs, SMEs and tech communities.</div>
                <Button class="button-black" onclick="location.href='/docs.html'">View Docs</Button>
            </div>
        </div> -->
        <div id="section-4">
            <div class="left-side">
                <div class="header-text">Showcase your app in our directory</div>
                <div class="long-text">SPAY presents an array of carefully selected Suite of APIs targeted to meet the needs of fintechs, SMEs and tech communities.</div>
                <Button class="button-black">Coming Soon</Button>
            </div>
            <div class="right-side"></div>
        </div>
        <div id="footer"></div>
    </div>
    
</template>

<script>
// import Vue from 'vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
// import vueSmoothScroll from 'vue2-smooth-scroll'
// Vue.use(VueSmoothScroll)

export default {
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted() { 
    const timeline = new TimelineLite() 
    const { heroImage, imgDiscover, imgCreate, imgLaunch } = this.$refs

    TweenMax.to(heroImage, 4, {scale: 1.05,  repeat: -1, yoyo: true}); 
    TweenMax.to(imgDiscover, 4.4, {transform : "rotate(10deg)",  repeat: -1, yoyo: true});
    TweenMax.to(imgCreate, 4.4, {scale: 1.04,  repeat: -1, yoyo: true}); 
    TweenMax.to (imgLaunch, 4.4, {scale: 1.1,  repeat: -1, yoyo: true}); 
  },

  methods: {
      navigateTo(page) {
           this.$router.push(page); 
      }
  }
  
}
</script>

<style lang="scss" scoped>

body{
    font-family: "Graphik";
    font-weight: normal;
    // background: #0d1014;
    // color: white;
}

button{
    font-size: 13px;
    margin-top: 28px;
    margin-right: 20px;
    width: 150px;
    height: 47px;
    border-radius: 23.5px;
    outline: none;
    border: none;
    // border: solid 2px #979797;
}

.mobile-only{
    display: none;
}

.header-text{
    font-weight: 500;
}

.button-black{
    background: black;
    color: white;
    box-shadow: 1px 5px 20px 1px rgba(49, 49, 49, 0.4);
    transition: 0.5s;
}

.button-black:hover{
    box-shadow: none;
    transition: 0.5s;
}

.button-trans{
    border: solid 2px #979797;
    background: transparent;
}

#nav{
    width: 70%;
    height: 30px;
    padding-top: 48px;
    margin: 0 auto;
    font-size: 17px;
    font-weight: 500;
    font-size: 16px;

    .left-side{
        float: left;
        width: 50%;
        // height: 50px;
        // background: gray;

        img{
            object-fit: contain;
            width: 22px;
            height: 22px;

            // width: 5%;
            float: left;
        }

        div{
            display: block;
            width: 50%;
            float: left;
            margin-top: 1px;
            margin-left: 8px;
        }
    }

    .right-side{
        width: 50%;
        height: 30px;
        // background: green;
        float: right;

        a{
            float: right;
            margin-left: 40px;
            color: black;
        }

        a:hover{
            text-decoration: none;
        }
    }

}

.color-red{
    color: #d0021b;
}

#hero-section{
    width: 70%;
    margin: 0 auto;
    margin-top: 140px;
    padding-bottom: 100px;

    .left-side{
        width: 50%;
        padding-top: 60px;
        // background: red;
        float: left;

        .header-text{
            line-height: 1.28;
            width: 80%;
            font-size: 42px;
            line-height: 1.28;
        }

        .long-text{
            font-size: 18px;
            margin-top: 20px;
            width: 85%;
        }
        
    }

    .right-side{
        width: 50%;
        float: right;

        img{
            width: 100%;
            height: 470px;
            object-fit: contain;
            object-position: right;
        }
    }
}

#section-2{
    margin-top: 150px;
    padding-top: 97px;
    width: 100%;
    background: black;
    color: white;
    float: left;

    .header-text{
        font-size: 33px;
        color: white;
        width: 25%;
        margin: 0 auto;
        text-align: center;
    }

    .long-text{
        text-align: center;
        width: 35%;
        margin: 0 auto;
        font-size: 17px;
        margin-top: 13px;
    }

    .section-discover-create{
        width: 75%;
        margin: 0 auto;
        // margin-left: 20%;
        margin-top: 46px;
        padding-bottom: 10px;
        // float: left;

        .box-img-text{
            width: 33.3333333333%;
            // background: red;
            float: left;
            // height: 400px;
            margin-top: 46px;
            margin-bottom: 110px;

            img{
                width: 100%;
                height: 260px;
                object-fit: contain;
                object-position: center;
            }

            .text-short{
                text-align: center;
                font-size: 19px;
                margin-bottom: 13px;
                margin-top: 15px;
                font-weight: 500;
            }

            .text-long{
                text-align: center;
                width: 55%;
                font-size: 15px;
                margin: 0 auto;
                line-height: 1.6;
            }

        }
        
    }
}

#section-3{
    padding-top: 108px;
    width: 70%;
    // margin: 0 auto;
    // background: black;
    float: left;
    margin-left: 15%;

    .left-side{
        width: 41%;
        float: left;
        height: 250px;
        background: rgba(128, 128, 128, 0.356);
    }

    .right-side{
        width: 40%;
        float: right;
        font-size: 36px;
        line-height: 1.28;

        .long-text{
            font-size: 17px;
            line-height: 1.59;
            margin-top: 13px;
        }
    }
}

#section-4{
    padding-top: 136px;
    width: 70%;
    // margin: 0 auto;
    // background: black;
    float: left;
    margin-left: 15%;

    .left-side{
        width: 40%;
        float: left;
        font-size: 36px;
        line-height: 1.28;

        .long-text{
            font-size: 17px;
            line-height: 1.59;
            margin-top: 13px;
        }
    }

    .right-side{
        width: 41%;
        float: right;
        height: 250px;
        background: rgba(128, 128, 128, 0.356);
    }
}

#footer{
    width: 100%;
    background: black;
    margin-top: 144px;
    height: 415px;
    float: left;
}

@media screen and (max-width: 1670px){
    #hero-section{
    
        .left-side{
    
            .header-text{
                width: 90%;
                font-size: 42px;
            }
    
            
        }
    
    }
    
}

@media screen and (max-width: 1440px){
    #hero-section{
    
        .left-side{
    
            .header-text{
                width: 90%;
                font-size: 39px;
            }
    
            
        }
    }

    #section-2{
    //    display: none;
    
        .header-text{
            width: 40%;
        }
    
        .long-text{
            width: 45%;
        }
    
        .section-discover-create{
            width: 85%;
        }
    }

    
}

@media screen and (max-width: 1280px){
    #nav{
        width: 77%;
    }

    #hero-section{
        width: 77%;

        .left-side{
    
            .header-text{
                width: 100%;
                font-size: 35px;
            }
    
            
        }
    }

    #section-2{
        
            .header-text{
                width: 40%;
            }
        
            .long-text{
                width: 45%;
            }
        
            .section-discover-create{
                width: 90%;
            }
    }

   

}

@media screen and (max-width: 1024px){
    #nav, #hero-section{
        width: 80%;
    }

    #hero-section{

        .left-side{
    
            .header-text{
                width: 100%;
                font-size: 34px;
            }
    
            
        }
    }

    #section-2{
        
            .header-text{
                width: 55%;
            }
        
            .long-text{
                width: 75%;
            }
        
            .section-discover-create{
                width: 100%;

                .text-long{
                   width: 100%;
                }
            }
    }

    #section-3, #section-4{
        width: 80%;
        margin-left: 10%;

        .left-side, .right-side{
            width: 45%;
        }
    }

}


@media screen and (max-width: 900px){
    #section-2{
        margin-top: 50px;
    }

    #nav, #hero-section{
        width: 80%;
    }

    #hero-section{
        margin-top: 50px;
        display:flex;
        flex-direction:column;
        flex-direction:column-reverse;

        .left-side{
            width: 100%;
            padding-top: 0px;
            margin-top: -40px;
                

            .header-text{
                width: 80%;
                font-size: 34px;
            }
    
            
        }

        .right-side{
            width: 100;
            float: left;

            img{
                width: 440px;
                height: 500px;
                object-fit: contain;
                object-position: left;
                margin-top: 20px;
            }
    
        }
    }

    #nav{

        .right-side{
    
            a{
                margin-left: 25px;
            }
    
        }
    }

    #hero-section-right{
        // display: none;
    }

    .mobile-only{
        display: none;
    }
    
}

@media screen and (max-width: 768px){
    #nav{
        width: 87%;
        .left-side{
            width: 100%;
        }

        .right-side{
            display: none;
    
            a{
                margin-left: 25px;
            }
    
        }
    }

    #hero-section{
        width: 87%;

        .right-side{
            img{
                width: 400px;
                height: 500px;
            }
            
    
        }
    }

    #section-2{
        .header-text{
            width: 90%;
        }
    
        .long-text{
            width: 92%;
        }
    
        .section-discover-create{
            width: 100%;

            .text-long{
               width: 100%;
            }

            .box-img-text{
                width: 100%;
                margin-left: 0%;
                margin-top: 5px;
                margin-bottom: 100px;
                float: left;
    
                img{
                    width: 95%;
                    height: 260px;
                    object-fit: contain;
                    object-position: center;
                }
    
                .text-short{
                    text-align: center;
                    font-size: 19px;
                    margin-bottom: 13px;
                    margin-top: 15px;
                    font-weight: 500;
                }
    
                .text-long{
                    text-align: center;
                    width: 55%;
                    font-size: 15px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
    
            }
        }
    }
    
    #section-3, #section-4{
        width: 80%;
        margin-left: 10%;
        // display: none;

        .left-side, .right-side{
            float: left;
            width: 70%;
        }

        .left-side{
            margin-bottom: 40px;
        }
    }
}

@media screen and (max-width: 600px){
    #hero-section{
        width: 87%;

        .right-side{
            img{
                width: 350px;
                height: 500px;
            }
            
    
        }
    }

    #section-3, #section-4{

        .left-side, .right-side{
            width: 89%;

            .header-text{
                font-size: 30px;
            }
        }
    }

}

@media screen and (max-width: 480px){

    #section-2{
        margin-top: 0px;

        .header-text{
            font-size: 25px;
        }

        .long-text{
            font-size: 16px;
        }

        .section-discover-create{

            .box-img-text{
                .text-long{
                    width: 80%;
                }
    
            }
        }
    }

    #hero-section{
        width: 87%;

        .left-side{
    
            .header-text{
                width: 100%;
                font-size: 30px;
            }

            .long-text{
                width: 97%;
            }

            button{
                margin-right: 10px;
                width: 130px;
                height: 47px;
                font-size: 12px;
            }
        }

        .right-side{
            img{
                width: 300px;
                height: 500px;
                margin-top: 0px;
            }
            
    
        }
    }

    #section-3, #section-4{

        .left-side, .right-side{
            width: 100%;
        }
    }

}

@media screen and (max-width: 320px){
    #hero-section{

        .left-side{

            button{
                margin-right: 10px;
                width: 120px;
                height: 47px;
                font-size: 11px;
            }
        }

    }

}

</style>
