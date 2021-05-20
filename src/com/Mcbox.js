import "../scss/Mcbox.scss";
import useFetch from "../hooks/useFetch";

export default function Mcbox(){
    const coms = useFetch("http://localhost:3001/comment");

    return(
        <div id="McboxWrap"> 
            <div id="McboxArea">
                <div id="mcBox_first">
                    <p>userid</p>
                    <p>date</p>              
                </div>
                <p id="mcBox_middle">
                    Content&nbsp;Content&nbsp;Content&nbsp;Content&nbsp;Content
                    Content&nbsp;Content&nbsp;Content&nbsp;Content&nbsp;Content
                    Content&nbsp;Content&nbsp;Content&nbsp;Content&nbsp;Content
                    Content&nbsp;Content&nbsp;Content&nbsp;Content&nbsp;Content
                </p>
                <div id="mcBox_last">
                    <p id="last_com">conmment( {coms.length} )</p>
                    <div id="last_updown">
                        <p>▲</p>
                        <p>▼</p>
                    </div>                    
                </div>
            </div>   
        </div>
    )
}