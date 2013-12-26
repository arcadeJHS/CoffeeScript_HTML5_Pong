class CPU extends Paddle
	update: (ball) ->
		y_pos = ball.y
		diff = -((@y + (@height / 2)) - (y_pos + ball.height/2))

		if (diff < 0 and diff < -10)
			diff = -10
		else if (diff > 0 and diff > 10)
			diff = 10

		@move(0, diff)