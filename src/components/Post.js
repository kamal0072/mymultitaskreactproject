import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/tipCalc.css'

function Post() {
        // State for storing bill total 
        const [bill, setBill] = useState('');

        // State for storing tip percentage
        const [tip, setTip] = useState("10%");
    
        // State for storing number of splits
        const [split, setSplit] = useState(1);
    
        // State for storing split total
        const [splitTotal, setSplitTotal] = useState(0);
    

        function handleTipChange(e){
            let value = e.target.value.replace("%", "");
            console.log(value)
            if (value.indexOf("%") === -1){
                value = value + "%";
            }
            setTip(value)
        }

        function splitMinus(){
            setSplit((oldValue) => Math.max(oldValue - 1, 1));
        };
        // Function to increase the number of splits by 1
        function splitPlus(){
            setSplit((oldValue) => oldValue + 1)
        };


        function handleBillChange(e){
            setBill(e.target.value);
        };


        function calculate(){
            let percentage = 1 + parseInt(tip.replace("%", " "))/100;
            const result = ((bill*percentage) / split).toFixed(2);
            setSplitTotal(result);
        };

        useEffect(() => {
            calculate()
        }, [bill, tip, split])

    return (
        <main>
                <label>Bill Total: </label>
                <input type="text" placeholder={"0.00"} value={bill} onChange={handleBillChange} />

                <label>Tip </label>
                <input type="text" placeholder={"0.00"} value={tip} onChange={handleTipChange}/>


                <div className="summary">
                    {/* Split section */}
                    <div className="split">
                        <label> Split </label>
                        <div className="class-control">
                            <button onClick={splitMinus}>-</button>
                                <span>{split}</span>
                            <button onClick={splitPlus}>+</button>
                        </div>
                    </div>
                </div>

                <div className="result">
                    <label> Split Total : </label>
                    <span>{splitTotal}</span>
                </div>

        </main>
    );
}

export default Post;