class Paddle
	constructor: (x, y, width, height) ->
		@x = x
		@y = y
		@width = width
		@height = height
		@x_speed = 0
		@y_speed = 0
		
	render: ->
		Engine.ctx.fillStyle = "#fff"
		y = @y
		while y < @y+@height
			Engine.ctx.fillRect @x, y, @width, 1
			y += 2
		
	move: (x, y) ->
		@x += x
		@y += y
		@x_speed = x
		@y_speed = y
		if (@y < 0) 
			@y = 0
			@y_speed = 0
		else if (@y + @height > Engine.canvasH)
			@y = Engine.canvasH - @height
			@y_speed = 0
