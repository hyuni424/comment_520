import "../scss/Writ2.scss";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

export default function Writ2(props){
    //불러온 값
    const {open2, close2} = props;    
    //날짜
    const date = new Date();
    //작성후 이동
    const histroy = useHistory();
    //금지어
    const [filt,setfilt]=useState(['금지']); 

    function onSubmit(){
        //금지어
        if(conRef.current.value===filt[0]){
            alert("금지어 발견, 단어를 대체합니다.");  
            setfilt(filt);     
            conRef.current.value="금지어 발견";
        } 
        
        //입력
        fetch(`http://localhost:3001/comment/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid : "test1",
                date : date,
                content : conRef.current.value,
                like : 0,
                hate : 0
            }),
        }).then(res => {
            if (res.ok) {                
                alert("댓글 작성이 완료 되었습니다.");
                histroy.push(`/`);
            }
        });
    }
    const conRef = useRef(null);

    return(
        <div id="reWriteWrap">
            { open2 ? (
            <div id="reWriteArea">
                <div className="reWriteUser">
                    <p><b>test1</b></p>
                </div>
                <form>
                    <fieldset>
                        <legend>댓글 작성</legend>
                        <p className="reWriteGo"><textarea title="댓글 작성시 상대방에 대한 배려와 책임을 담아주세요" placeholder="댓글 작성시 상대방에 대한 배려와 책임을 담아주세요" autoFocus required ref={conRef}></textarea></p>
                        <p className="reWriteBtn" onClick={onSubmit}><button onClick={close2}>댓글 등록</button></p>
                    </fieldset>                
                </form>
            </div>   
            ) : null }
        </div>
    )
}