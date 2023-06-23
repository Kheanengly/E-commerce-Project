<template>
 
 <div class="Group_head">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">   
              <div id="circle"></div>
              <div id="circle2"></div>
              <div id="circle3"></div>
              <div id="circle4"></div>
              <img src="../logocar.png" alt=""  id="logo_jdm">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-for="(page,index) in pages" class="nav-item" :key="index">
                  <a  class="nav-link" 
                        :class="{active: activePage == index}"
                        v-bind:href="page.lists.url"
                        @click.prevent="activePage=index" 
                        
                    >{{page.lists.text}}</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search">
                <img src="../carts.png" alt="" style="width: 30px;">
                <h4>cart</h4>
                <div><h4>1</h4></div>
              </form>
            </div>
          </nav>
    </div>
    <div class="Group_hero">
        <div id="head-text">
            <div id="contant-head-text">
                <h1 style="margin-top: 30px; font-size: 50px; background: -webkit-linear-gradient(#eee, #333); -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: red; ">JDM CAR</h1>
                <p>Japanese domestic market (JDM) refers to Japan's home
                    market for vehicles and vehicle parts. Japanese owners 
                    contend with a strict motor vehicle inspection and grey markets.</p>
                <button id="detaile-bu"> Introduction </button>
            </div>
        </div>
        <div id="model-car">
            <div id="circle5"></div>
            <img src="../pngwing.com.png" alt="" id="supra">
            <img src="../pngwing.com (9).png" alt="" id="gtr">
        </div>      
    </div>
    <div class="Group_featured_model">
        <div  id="block-brand">
            <img src="../pngwing.com (1).png" alt="" class="logo-brand" id="mazada">
            <img src="../pngwing.com (2).png" alt="" class="logo-brand" id="toyota">
            <img src="../pngwing.com (4).png" alt="" class="logo-brand" id="honda">
            <img src="../pngwing.com (3).png" alt="" class="logo-brand" id="nissan">
            <img src="../pngwing.com (5).png" alt="" class="logo-brand" id="mitsubish">
            <img src="../pngwing.com (6).png" alt="" class="logo-brand" id="subaru">
            <img src="../pngwing.com (7).png" alt="" class="logo-brand" id="gtr-nissan">
            <img src="../pngwing.com (8).png" alt="" class="logo-brand" id="supra">
            <img src="" alt="" class="logo-brand">
        </div>
    </div>
    <div class="Group_product">
        <div class="sub-container" v-for="(model_car) in model_cars" :key="model_car">
            <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
              <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
              <img v-bind:src="model_car.car_img.url" alt="" style="width: 300px;">
              <img v-bind:src=" model_car.logo.url " alt="" style="width: 50px;margin-right: 10px;margin-top: 0px;">
            </div>
            <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
              <div><p>toyota supra 4k</p></div>
              <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
                <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
                <p>  201,000</p>
              </div>
            </div>
        </div>
        <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #b17a47, #FC7900);">
          <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
            <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
            <img src="../pngegg.png" alt="" style="width: 300px;">
            <img src="../pngwing.com (1).png" alt="" style="width:60px; margin-right: 10px;margin-top: 0px;">
          </div>
          <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
            <div><p>toyota supra 4k</p></div>
            <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
              <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
              <p>  201,000</p>
            </div>
          </div>
          </div>
          <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #a39d9d, #727070);">
            <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
              <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
              <img src="../pngegg (2).png" alt="" style="width: 300px;">
              <img src="../pngwing.com (3).png" alt="" style="width:40px; margin-right: 20px;margin-top: 10px;">
            </div>
            <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
              <div><p>toyota supra 4k</p></div>
              <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
                <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
                <p>  201,000</p>
              </div>
            </div>
        </div>
        <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #b42f3d, #C71A2A);">
          <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
            <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
            <img src="../pngegg (1).png" alt="" style="width: 300px;">
            <img src="../pngwing.com (4).png" alt="" style="width:60px; margin-right: 10px;margin-top: 0px;">
          </div>
          <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
            <div><p>toyota supra 4k</p></div>
            <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
              <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
              <p>  201,000</p>
            </div>
          </div>
      </div>
      <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #afab35, #EFE600);">
        <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
          <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
          <img src="../pngwing.com (12).png" alt="" style="width: 300px;">
          <img src="../pngwing.com (5).png" alt="" style="width:40px; margin-right: 10px;margin-top: 10px;">
        </div>
        <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
          <div><p>toyota supra 4k</p></div>
          <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
            <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
            <p>  201,000</p>
          </div>
        </div>
    </div>
    <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #976c6c, #AC6C6C);">
      <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
        <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
        <img src="../Daco_5523517.png" alt="" style="width: 300px; margin-top: 20px ;">
        <img src="../pngwing.com (4).png" alt="" style="width:60px; margin-right: 10px;margin-top: 0px;">
      </div>
      <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
        <div><p>toyota supra 4k</p></div>
        <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
          <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
          <p> 201,000</p>
        </div>
      </div>
    </div>
    <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #3359a4, #004EE5);">
      <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
        <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
        <img src="../imgbin_1998-subaru-impreza-bumper-car-subaru-wrx-png.png" alt="" style="width: 300px;">
        <img src="../pngwing.com (6).png" alt="" style="width:50px; margin-right:20px;margin-top: 10px;">
      </div>
      <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
        <div><p>toyota supra 4k</p></div>
        <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
          <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
          <p> 201,000</p>
        </div>
      </div>
    </div>
    <div class="sub-container" style="background: linear-gradient(0.25turn, #a59f9f, #59646d, #3C556D);">
      <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr; height:70%;">
        <img src="../—Pngtree—japan flag_8619059.png" alt="" style="width: 30px; height:30px ;margin-left: 10px;margin-top: 10px;">
        <img src="../pngwing.com (13).png" alt="" style="width: 300px;">
        <img src="../pngwing.com (2).png" alt="" style="width:50px; margin-right: 10px;margin-top: 10px;">
      </div>
      <div style="display: flex;  justify-content: space-between;margin-top: 10px;">
        <div><p>toyota supra 4k</p></div>
        <div style="width: 130px; height: 30px; background-color: #D9D9D9; border-radius: 20px 0 0 20px; display: flex;">
          <i class="fa fa-dollar" style="margin-left: 10px;margin-top: 5px;"></i>
          <p> 201,000</p>
        </div>
      </div>
    </div>
    </div>

    <div class="Group_footer">
      <h2> </h2>
    </div>

</template>
<script>
export default{
  data(){
    return{
        activePage: 0,
        theme: 'light',
        model_cars:[
          {
            car_img: {url:"pngwing.com.png"},
            logo: {url:"pngwing.com (8).png"},
            brand: "toyota supra 4k",
            value: "201,000"
          },
        ],
        pages:[
               {
                    lists:{text:"Home",url:"Homepage.html"},
                    pageTitle:"Home Page",
                    content:"today is one day,I learn about vue js"
               },
               {
                    lists:{text:"Product",url:"Productpage.html"},
                    pageTitle:"Product Page",
                    content:"today is one day,I learn about vue js"
               },
               {
                    lists:{text:"About",url:"#"},
                    pageTitle:"About Page",
                    content:"today is one day,I learn about vue js"
               },
               {
                    lists:{text:"Contact",url:"#"},
                    pageTitle:"About Page",
                    content:"today is one day,I learn about vue js"
               }
        ]
    };
  },
  methods: {
        changeTheme(){
            let theme = 'light';
            if(this.theme == 'light'){
                theme = 'dark';
            }
            this.theme = theme;
        }
  }
}
</script>
<style>
* {
    padding: 0px;
    margin: 0px;
}

.Group_head{
   
    width: 100%;
    height: 50px ;
   
}

#logo_jdm{
    position: relative;
    top: 40px;
    right: 510px;
    width: 150px;
    overflow: hidden;
    z-index: 3;
}

#circle {
    position: relative;
    width: 227px;
    height: 227px;
    top:40px;
    left: 20px;
    background-color: #D50000;
    border-radius: 150px;
    z-index: 2;
    
}

#circle2{
    position: relative;
    width: 100px;
    height: 100px;
    left: 200px;
    top:50px;
    opacity: 0.75;
    background-color: #D50000;
    border-radius: 90px;
    z-index: 3;
}

#circle3{
    position: relative;
    width: 70px;
    height: 70px;
    left: 400px;
    opacity: 0.55;
    bottom: 50px;
    background-color: #D50000;
    border-radius: 90px;
    z-index: 3;
}

#circle4{
    position: relative;
    width: 80px;
    height: 80px;
    left: 640px;
    opacity: 0.5;
    background-color: #D50000;
    border-radius: 90px;
    z-index: 3;
}

.Group_head #navbarTogglerDemo01{
    width: 100%;
    height: 100px;
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-around;
    z-index: 1;
    overflow: hidden;
}

.Group_head .nav-item a{
    display: flex;
    justify-content: space-around;
    margin: 0px 50px 0px 50px ;
    font-size: 20px;
}

.form-control{
    border-radius: 30px;
}

.Group_head .form-inline{
    width: 400px;
    display: flex;
    justify-content: space-around;
}

#search{
    width: 200px;
}

.Group_hero{
    display: flex;
    justify-content: space-around;
    position: relative;
    top:100px;
    width: 95%;
    height: 300px ;
    margin: auto;
    z-index: 1;
    background: linear-gradient(0.25turn, #a59f9f, #ba9696, #c19292);
}

#head-text{
    width: 50%;
}

#model-car{
    width: 50%;
}
.Group_hero #circle5{
    position: absolute;
    top:100px;
    background-color: #FD1313;
    opacity: 0.5;
    border-radius: 150px;
    width: 100px;
    height: 100px;
    z-index: 2;

}
.Group_hero #supra{
    position: absolute;
    bottom: 25px;
    left: 830px;
    width: 635px;
    height: 260px;
    z-index: 3;
}

.Group_hero #gtr{
    position: absolute;
    top:50px;
    left: 1250px;
    width: 435px;
    height: 280px;
    z-index: 3;
}

#contant-head-text{
    margin-left: 80px;
    width: 500px;
    height: 100%;
}

#detaile-bu{
    width: 189px;
    height: 42px;
    background-color: #D9D9D9;
    border: none;
    color: #666060;
}

.Group_featured_model{
    position: relative;
    top :120px;
    width: 95%;
    height: 80px ;
    margin: auto;
    background: linear-gradient(0.25turn, #a59f9f, #ba9696, #c19292);
}

#block-brand{
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
}

#mazada{
    width: 110px;
    height: 110px;
    padding-bottom: 20px;
}

#toyota{
    width: 70px;
    height: 70px;
    margin-top: 7px;
}

#honda{
    width: 100px;
    height: 110px;
    padding-bottom: 20px;
}

#nissan{
    width: 70px;
    height: 65px;
    margin-top: 7px;
}

#mitsubish{
    width: 55px;
    height: 55px;
    margin-top: 10px;
}

#subaru{
    width: 70px;
    height: 45px;
    margin-top: 15px;   
}

#gtr-nissan{
    width: 60px;
    height: 60px;
    margin-top: 5px;   
}

.Group_product{
    display: grid;
    grid-template-columns: repeat(4,2fr);
    position: relative;
    top:130px;
    width: 95%;
    height: 340px;
    margin: auto;
    gap: 0px 91px;
}

.sub-container{
    position: relative;
    top:20px;
    width: 400px;
    height: 150px;
    background: linear-gradient(0.25turn, #a59f9f, #ba9696, #c19292);
}

.Group_footer{
    position: relative;
    margin: auto;
    top: 170px;
    width: 100%;
    height: 150px;
    background-color: #D9D9D9;
}
</style>
