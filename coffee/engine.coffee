Engine =
	keysDown: {}		

	animate: (callback) -> 
		window.setTimeout callback, 1000/60
		
	init: (canvasW, canvasH) ->
		@setListeners()
		@canvas = document.createElement "canvas"
		document.body.appendChild @canvas
		@canvas.width = @canvasW = canvasW
		@canvas.height = @canvasH = canvasH		
		@ctx = @canvas?.getContext? "2d"		
		
	clear: ->
		@ctx.fillStyle = "#000"
		@ctx.fillRect 0, 0, @canvasW, @canvasH

	setListeners: ->
		window.addEventListener "keydown", (event) =>
			@keysDown[event.keyCode] = true
		window.addEventListener "keyup", (event) =>
			delete @keysDown[event.keyCode]

	# cathode ray tube effect
	drawCRT: (x, y, width, height) ->
		while y < height
			Engine.ctx.fillRect x, y, width, 1
			y += 2