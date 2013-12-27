Game =
	gameW: 750
	gameH: 510

	init: ->		
		paddleW = 10
		paddleH = 32
		Engine.init @gameW, @gameH
		Court.init @gameW, @gameH
		@ball = new Ball (@gameW/2 - paddleW/2), (@gameH/2 - paddleW/2), 10, 10
		@player = new Player 100, (@gameH/2 - paddleH/2), paddleW, paddleH
		@cpu = new CPU (@gameW - 100-paddleW), (@gameH/2 - paddleH/2), paddleW, paddleH		
		Game.loop()
		
	update: ->
		@player.update()
		@cpu.update(@ball)
		@ball.update(@player, @cpu)
		
	draw: ->
		Engine.clear()
		Court.render()
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