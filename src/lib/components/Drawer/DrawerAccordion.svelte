<script lang="ts">
	export let id: string;
</script>

<div class="accordion tab">
	<input class="" {id} type="checkbox" name="tabs" />
	<div class="headline">
		<label for={id}>
			<div class="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<slot name="headline" />
		</label>
	</div>

	<div class="tab-content">
		<slot name="content" />
	</div>
</div>

<style>
	.accordion {
		width: 100%;
		overflow: hidden;
	}

	input {
		position: absolute;
		opacity: 0;
	}

	.headline {
		display: block;
	}

	label {
		display: flex;
		align-items: stretch;
		cursor: pointer;
		width: 100%;
		align-items: center;
		text-transform: uppercase;
		font-family: 'Lora', sans-serif !important;
		font-weight: 700 !important;
		font-size: 1.15em;
		letter-spacing: 0.08em;
	}

	.icon {
		width: 22px;
		height: 22px;
		margin-left: 5px;
		margin-right: 18px;
		color: #4495a1;
	}

	.tab-content {
		max-height: 0;
		margin-left: 48px;
		margin-bottom: 15px;
		height: 100%;
		overflow: hidden;
		-webkit-transition: max-height 0.5s;
		-o-transition: max-height 0.5s;
		transition: max-height 0.5s;
	}

	/* :checked - resize to full height */
	.tab input:checked ~ .tab-content {
		max-height: 100vh;
	}

	.tab input[type='checkbox'] + label .icon {
		-webkit-transition: all 0.25s;
		-o-transition: all 0.25s;
		transition: all 0.25s;
	}
	.tab input[type='checkbox']:checked + label .icon {
		color: #4495a1;
	}
</style>
