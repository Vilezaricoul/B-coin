<template>
  <div id="app">
	<div>
		<div class="header">
			<div class="header__row">
				<nav class="header__menu menu">
					<div class="menu__body">
						<ul class="menu__list">
							<li><router-link class="menu__link" to="/">Информация</router-link></li>
							<li><router-link class="menu__link" to="/About">Профиль</router-link></li>
						</ul>
					</div>
				</nav>
				<div class="header__logo"><img src="../src/components/bitcoin_logo_icon_147311.png" alt=""></div>
			</div>
		</div>
	</div>
    <router-view/>
	
  </div>
</template>
<script>




</script>


<style>

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body{
	background-color: rgb(251, 227, 196);
}
.header{
	background-color: rgb(247, 147, 26);
	width: 100%;
	z-index: 50;
	
}

.header__row{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 85px;
}
.header__logo{
	position: absolute;
	top: 0;
}

.menu__list{
	display: flex;
}
.menu__link{
	color: rgb(0, 0, 0);
	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2.6px;
	
	
}
li:nth-child(1){
	padding: 0 110px 0 0;
}
li:nth-child(2){
	padding: 0 40px 0 110px;
}
   li {
    list-style-type: none; /* Убираем маркеры */
   }
   ul {
    padding-left: 0; /* Сдвигаем список влево */
   }


</style>
