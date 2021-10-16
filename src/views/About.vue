<template>
  <div class="about">
	  <div class="container">
		  <div class="profile__div">
			  <div class="img__prof">
			  	<img  src="../components/user_person_profile_avatar_icon_190943.png" alt="">
			  </div>
				<div class="buttom__prof">
					<input v-model.number="myMoney" />
					<div class="div__but">
						<button class="but" @click="addMoney">Add</button>
						<button class="but" @click="takeMoney" >Take</button>
					</div>
				</div>
		  </div>
		  <div class="info__div">
			  <div class="state__line">
				  <h1 style="text-align:center;">USD: {{this.items[0].value.toFixed(3)}}</h1>
			  </div>
			  <div class="char__div">
				  <pie-example :chartData="chartData"></pie-example>
			  </div>
		  </div>
		  <div class="item">
			  <div v-for="n in items" :key="n.id" class="value__money">{{n.label}}: {{n.value.toFixed(4)}}</div>
		  </div>
	  </div>
  </div>
</template>
<script>
  import PieExample from '../components/PieExample'
  

  export default {
    components: {
      PieExample,

    },
	data: () => ({
		myMoney:null,
		items: [
			{ label: "USD", value: 0, color: '#FFA500' },
			{ label: "ETH", value: 0, color: '#6495ED' },
			{ label: "BTC", value: 0, color: '#B22222' }
		].map((n, i) => ({
			...n,
			id: i + 1,
			active: true,
		})),
	}),
	computed: {
		chartData() {
		const items = this.items.filter((n) => n.active);
		
		return {
			labels: items.map((n) => n.label),
			datasets: [
			{
				backgroundColor: items.map((n) => n.color),
				data: items.map((n) => n.value),
			},
			],
		};
		},
	},
    methods: {
		addMoney() {
      		this.items[0].value += this.myMoney
			this.items[1].value += this.myMoney * 0.0003
			this.items[2].value += this.myMoney* 0.000017
    	},
		takeMoney() {
      		this.items[0].value -= this.myMoney
			this.items[1].value -= this.myMoney* 0.0003
			this.items[2].value -= this.myMoney* 0.000017
    	},


	}
}

</script>

<style>

.about{
	padding-top: 200px;
	
}
.container{
	background-color: rgb(251, 227, 196);
	margin: 0 50px;
	
	display: flex;
	justify-content: space-around;
}

.profile__div{
	background-color: rgb(243, 170, 70);
	border-radius: 20px;
	border: 5px solid rgb(0, 0, 0);
	width: 400px;
	display: flex;
	flex-direction: column;
}
.buttom__prof{
	display: flex;
	flex-direction: column;
	align-items: center;
}

input{
	font-size: 30px;
	border-radius: 5px;

}
.but{
	width: 150px;
	font-size: 24px;
	border-radius: 30px;
	padding: 10px;
	margin: 20px;
}

.img__prof{
	display: flex;
	justify-content: center;
	margin: 50px 0 60px 0;
}
.info__div{
	background-color: rgb(251, 227, 196);
	
	max-width: 400px;
}
.state__line{

	margin-top: 10px;

}
.item{
	border-radius: 20px;
	background-color: rgb(243, 170, 70);
	border: 5px solid rgb(0, 0, 0);
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
}
.value__money{
	border: 1px solid #000;
	padding: 20px;
	margin: 20px;
	border-radius: 50px;
	font-family: 'Helvetica', Arial;
	color: #464646;
    text-transform: uppercase;
	font-size: 28px;
	text-align: center;
}
  h1 {
    font-family: 'Helvetica', Arial;
    color: #464646;
    text-transform: uppercase;
    border-bottom: 1px solid #000000;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
  }

</style>