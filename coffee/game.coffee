Game =
	gameW: 600
	gameH: 400

	init: ->		
		paddleW = 20
		paddleH = 100
		Engine.init @gameW, @gameH
		@ball = new Ball (@gameW/2 - paddleW/2), (@gameH/2 - paddleW/2), paddleW, paddleW
		@player = new Player 20, (@gameH/2 - paddleH/2), paddleW, paddleH
		@cpu = new CPU 560, (@gameH/2 - paddleH/2), paddleW, paddleH		
		Game.loop()
		
	update: ->
		@player.update()
		@cpu.update(@ball)
		@ball.update(@player, @cpu)
		
	draw: ->
		Engine.clear()
		@drawNet()
		@player.render()
		@cpu.render()
		@ball.render()

	drawNet: ->
		y = -15
		while y < @gameH 
			Engine.ctx.fillStyle = "#fff"
			Engine.ctx.fillRect @gameW/2-5, y, 10, 30
			y += 40

	loop: ->
		Game.update()
		Game.draw()
		Engine.animate(Game.loop)	
		
		
Game.init()