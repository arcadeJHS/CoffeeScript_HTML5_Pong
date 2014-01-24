Court =
	init: (gameW, gameH) ->
		@net_jump = 10
		@net_y = @net_jump		
		@net_width = 5
		@net_step_length = 10		
		@gameW = gameW
		@gameH = gameH

	score: [
		[1,1,1,0,1,1,1],
		[0,0,1,0,0,0,1],
		[0,1,1,1,1,1,0],
		[0,1,1,1,0,1,1],
		[1,0,1,1,0,0,1],
		[1,1,0,1,0,1,1],
		[1,1,0,1,1,1,1],
		[0,1,1,0,0,0,1],
		[1,1,1,1,1,1,1],
		[1,1,1,1,0,0,1]
	]

	renderNet: ->
		Engine.ctx.fillStyle = "#fff"
		y = @net_y 
		while y < @gameH						
			Engine.drawCRT @gameW/2-@net_width, y, @net_width, y+@net_step_length
			y += (@net_step_length + @net_jump)

	renderScore: (score1, score2) ->
		# refactor!
		s1 = Court.score[score1]
		for s, i in s1
			if s
				switch i
					when 0 then Engine.drawCRT 100+0, 0, 10, 40
					when 1 then Engine.drawCRT 100+0, 0, 40, 10
					when 2 then Engine.drawCRT 100+30, 0, 10, 40
					when 3 then Engine.drawCRT 100+0, 30, 40, 30+10
					when 4 then Engine.drawCRT 100+0, 30, 10, 30+40
					when 5 then Engine.drawCRT 100+0, 60, 40, 60+10
					when 6 then Engine.drawCRT 100+30, 30, 10, 30+40
		s2 = Court.score[score2]
		for s, i in s2
			if s
				switch i
					when 0 then Engine.drawCRT @gameW-100+0, 0, 10, 40
					when 1 then Engine.drawCRT @gameW-100+0, 0, 40, 10
					when 2 then Engine.drawCRT @gameW-100+30, 0, 10, 40
					when 3 then Engine.drawCRT @gameW-100+0, 30, 40, 30+10
					when 4 then Engine.drawCRT @gameW-100+0, 30, 10, 30+40
					when 5 then Engine.drawCRT @gameW-100+0, 60, 40, 60+10
					when 6 then Engine.drawCRT @gameW-100+30, 30, 10, 30+40