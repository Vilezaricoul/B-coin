<template>

	<div class="block">
		<div class="block__row">
			<div class="block__element">
				<div class="block__content">USD</div>
			</div>
			<div class="block__element">
				<div class="block__content">ETH</div>
			</div>
			<div class="block__element">
				<div class="block__content">BTC</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="block__garf">
			<div class="chart">
				<line-example/>
			</div>
		</div>
	</div>

</template>

<script>
import LineExample from '../components/LineExample'


export default{
	components: {
      LineExample,

    },

}

</script>
<style scoped>

.block{
	margin-top: 100px;
}

/* flex-контейнер */
.block__row{
display:flex;
justify-content:space-evenly;
}

/* flex-элемент */
.block__element{
border-radius: 50px;
border: 5px solid #000000;
}

/* контент */
.block__content{
	font-size: 36px;
border-radius: 50px;
padding: 20px;
background-color: rgb(243, 170, 70);
/* плюс прочие стили для текста, отступы */
}
.line{

	margin: 50px 200px 0 200px;
	
}


</style>