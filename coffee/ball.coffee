class Ball
	constructor: (x, y) ->
		@x = x
		@y = y
		@width = 10
		@height = 10
		@x_speed = 3
		@y_speed = 0

	reset: ->
		@x = Engine.canvasW/2
		@y = Engine.canvasH/2
		@x_speed = 3
		@y_speed = 0
		
	render: ->
		Engine.ctx.fillStyle = "#fff"
		Engine.drawCRT @x, @y, @width, @y+@height
		
	update: (paddle1, paddle2) ->
		# ball movement
		@x += @x_speed
		@y += @y_speed 

		# collision with top/bottom walls 
		if @y < 0
			@y_speed *= -1
		if (@y + @height) > Engine.canvasH
    		@y_speed *= -1       

		# collision with player paddle
		if @x <= (paddle1.x + paddle1.width) && (@x > paddle1.x) && (@y >= paddle1.y) && @y < (paddle1.y + paddle1.height)
			@x_speed *= -1
			@y_speed += (paddle1.y_speed / 2)
			#@x += @x_speed

	    # collision with CPU paddle
		if  (@x + @width) > paddle2.x && (@x + @width) < (paddle2.x + paddle2.width) && @y >= paddle2.y && @y < (paddle2.y + paddle2.height) 
	        @x_speed *= -1
	        @y_speed += (paddle2.y_speed / 2)
	        #@x += @x_speed

	    # player score
		if (@x + @width) > Engine.canvasW			
	        @reset()
	        paddle1.score += 1

	    # CPU score
		if @x < 0			
	        @reset()
	        paddle2.score += 1