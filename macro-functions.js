
/*	MF -- Macro Functions
	Macro -- a single instruction that expands automatically into a set of instructions to perform a particular task.	
*/
export default class MF{

	static converge(fn, arrFn){
		return (val)=>{
    			let valArr = arrFn.map((currFn)=>{
            		return currFn(val);
            	});
            
            		return fn(...valArr);
    		}
	}

	static pipe(...arrFn){
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

	static merge(firstObj, SecondObj){
		return {...firstObj, ...SecondObj};
	}

	static compose(...arrFn){

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

}