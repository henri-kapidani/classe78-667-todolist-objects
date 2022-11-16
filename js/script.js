/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

new Vue({
	el: '#app',
	data: {
		todos: [
			{
				id: 'ciao',
				text: 'Fare i compiti',
				done: true,
				list: [0, 1, 2],
			},
			{
				id: 'ciao',
				text: 'Fare la spesa',
				done: true,
				list: [0],
			},
			{
				id: 'ciao',
				text: 'Fare il bucato',
				done: false,
				list: [0, 1],
			},
		],
		newTodo: {
			text: '',
			done: false,
		},
	},
	methods: {
		addTodo() {
			if (this.newTodo.text.trim()) {
				this.newTodo.text = this.newTodo.text.trim();

				// const newObj = {...this.newTodo};
				// this.todos.push(newObj);

				// this.todos.push({
				// 	text: this.newTodo.text,
				// 	done: this.newTodo.done,
				// });

				this.todos.push({...this.newTodo, id: this.getUniqueId(this.existingIds)})

				this.newTodo.text = '';
			}
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		},
		invertDone(index) {
			this.todos[index].done = !this.todos[index].done;
		},
		getUniqueId(arr) {
			let randomNumber;
			do {
				randomNumber = this.getRandomInteger(10000, 99999);
			} while (arr.includes(randomNumber))
			return randomNumber;
		},
		getRandomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		},
	},
	computed: {
		existingIds() {
			return this.todos.map(e => e.id);
		}
	},
	created() {
		this.todos.forEach((objTodo, index, arrTodos) => {
			objTodo.id = this.getUniqueId(this.existingIds);
		});
	}
});
