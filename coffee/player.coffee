class Player extends Paddle
	update: ->		
		for key of Engine.keysDown
			value = Number(key)
			if (value == 38)
				@move(0, -4)
			else if (value == 40)
				@move(0, 4)
			else
				@move(0, 0)