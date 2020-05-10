	document.getElementById('part2').hidden = true;
	document.getElementById('part1').hidden = false;
	document.getElementById('claim').onclick = function(){
      document.getElementById('part1').hidden = true;
	  document.getElementById('part2').hidden = false;
	}
