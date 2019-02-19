var index = 0;
showTab(index);

function showTab(n) {

	var x = document.getElementsByClassName("tab");
		x[n].style.display = "block";

	if (n == 0) {

        document.getElementById("prevBtn").style.display = "none";
        
	} else {

        document.getElementById("prevBtn").style.display = "inline";
        
	}
	if (n == (x.length - 1)) {

        document.getElementById("nextBtn").innerHTML = "Submit";
        
	} else {

        document.getElementById("nextBtn").innerHTML = "Next";
        
    }

    getStepPosition(n)
    
}

function goToStep(n) {

	var x = document.getElementsByClassName("tab");

	if (n == 1 && !validateForm()) return false;

	x[index].style.display = "none";

	index = index + n;

	if (index >= x.length) {

		document.getElementById("multiForm").submit();

		return false;

    }

	showTab(index);
}

function validateForm() {

	var x, 
	y, 
	i, 
	valid = true;

	x = document.getElementsByClassName("tab");
	y = x[index].getElementsByTagName("input");
	z = x[index].getElementsByClassName("label");

	for (i = 0; i < y.length; i++) {

		if (y[i].value == "") {

			y[i].className += " invalid";
            z[i].className += " invalid";

            valid = false;
            
		} else {

			y[i].classList.remove("invalid");
            z[i].classList.remove("invalid");
            
		}
            
    }

	if (valid) {
        
        document.getElementsByClassName("step")[index].className += " finish";

    }

    return valid;
    
}

function getStepPosition(n) {

	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
        
        x[i].className = x[i].className.replace(" active", "");
            
    }

    x[n].className += " active";
    
}
