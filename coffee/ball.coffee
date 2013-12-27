class Ball
	constructor: (x, y, width, height) ->
		@x = x
		@y = y
		@width = width
		@height = height
		@x_speed = 3
		@y_speed = 0
		
	render: ->
		Engine.ctx.fillStyle = "#fff"
		y = @y
		while y < @y+@height
			Engine.ctx.fillRect @x, y, @width, 1
			y += 2
		
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

		# player score
		if (@x + @width) > Engine.canvasW
	        @reset()

	    # collision with CPU paddle
		if  (@x + @width) > paddle2.x && (@x + @width) < (paddle2.x + paddle2.width) && @y >= paddle2.y && @y < (paddle2.y + paddle2.height) 
	        @x_speed *= -1
	        @y_speed += (paddle2.y_speed / 2)
	        #@x += @x_speed

	    # CPU score
		if @x < 0
	        @reset()

	reset: ->
		#@x_speed *= -1
		@x_speed = 3
		@y_speed = 0
		@x = Engine.canvasW/2
		@y = Engine.canvasH/2