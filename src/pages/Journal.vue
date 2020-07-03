<template>
	<div id="journal-page">
		<h2>Журнал</h2>
		<div class="journal-page__post-wrapper">
			<p v-for="post in journalRender"
			class="journal-page__post">
				{{post.message}} {{post.time}}
			</p >
			<p v-if="!journal.journalArray.length">Журнал пуст</p>
		</div>
		<button @click="clear">Очистить журнал</button>
	</div>
</template>

<script type="text/babel">
	import { mapActions, mapState } from 'vuex'
	import store from '../store/index'

	export default {
		data: () => {
			return {
				journalRender: []
			}
		},
		mounted(){
			this.renderJournal();
		},
		methods: {
			...mapActions([
				'clearJournal'
			]),
			clear(){
				this.journalRender = [];
				this.clearJournal();
			},
			renderJournal(){
				let post;
				for(let i=0; i < this.journal.journalArray.length; i++) {
					post = this.journal.journalArray[i];
					setTimeout(() => {
						this.journalRender.push(this.journal.journalArray[i]);
					}, i*500);
				}
			}
		},
		computed: mapState([
			'journal'
		])
	}
</script>

<style scoped>
.journal-page__post {
	animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
