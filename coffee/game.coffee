Game =
	#gameW: 455*2
	#gameH: 262*2
	gameW: 750
	gameH: 510

	init: ->		
		paddleW = 10
		paddleH = 32
		Engine.init @gameW, @gameH
		Court.init @gameW, @gameH
		@ball = new Ball (@gameW/2 - paddleW/2), (@gameH/2 - paddleW/2)
		@player = new Player 100, (@gameH/2 - paddleH/2), paddleW, paddleH
		@cpu = new CPU (@gameW - 100-paddleW), (@gameH/2 - paddleH/2), paddleW, paddleH		
		Game.loop()
		
	update: ->
		@player.update()
		@cpu.update(@ball)
		@ball.update(@player, @cpu)
		
	draw: ->
		Engine.clear()
		Court.renderNet()
		Court.renderScore(@player.score, @cpu.score)
		@player.render()
		@cpu.render()
		@ball.render()

	loop: ->
		Game.update()
		Game.draw()
		Engine.animate(Game.loop)	
		
		
Game.init()