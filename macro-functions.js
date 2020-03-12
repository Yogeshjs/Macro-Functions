/*	MF -- Macro Functions
	Macro -- a single instruction that expands automatically into a set of instructions to perform a particular task.	
*/
	exports.converge = function(fn, arrFn){
		return (val)=>{
    			let valArr = arrFn.map((currFn)=>{
            		return currFn(val);
            	});
            
            		return fn(...valArr);
    		}
	}

	exports.pipe = function(...arrFn){
		return (...val)=>{
    			let input = arrFn[0](...val);
       			arrFn.splice(0,1);
       			let output;
        		arrFn.map((currFn, index)=>{
        			input  = currFn(input);
            			if(index == arrFn.length -1){
            				output = input;
            			}
        		});
        
        		return output;
    		}
	}

	exports.merge = function(firstObj, SecondObj){
		return {...firstObj, ...SecondObj};
	}

	exports.compose = function(...arrFn){

		return (...val)=>{

    			const last = arrFn.length - 1;
	    		let input = arrFn[last](...val);
       			arrFn.splice(last,1);
        		const right_Left = arrFn.reverse();
       			let output;

		        right_Left.map((currFn, index)=>{
        			input  = currFn(input);
            			if(index == arrFn.length -1){
            				output = input;
            			}
        		});
        
        		return output;
    		}
	}


