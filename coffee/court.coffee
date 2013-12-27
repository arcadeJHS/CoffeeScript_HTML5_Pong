Court =
	init: (gameW, gameH) ->
		@net_jump = 10
		@net_y = @net_jump		
		@net_width = 5
		@net_step_length = 10		
		@gameW = gameW
		@gameH = gameH

	render: ->
		y = @net_y 
		while y < @gameH			
			Engine.ctx.fillStyle = "#fff"
			Engine.ctx.fillRect @gameW/2-@net_width, y, @net_width, @net_step_length
			y += (@net_step_length + @net_jump)