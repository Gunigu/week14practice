new Vue({
	el: "#app",
	data:{
		message: "Hello World",
		coolness: "Hi",
		num: 50,
		bool: true,
		list: [
            {
            	name: "Bob",
            	age: 23
            },
             {
            	name: "Scott",
            	age: 42
            },
             {
            	name: "Jen",
            	age: 22
            },

		]
	},

	methods: {
		reverseMessage: function(){
			this.message =this.message.split("").reverse().join("")
		}

	}
})

